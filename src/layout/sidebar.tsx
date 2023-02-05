import React from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LinkIcon from '@mui/icons-material/Link';
import { Paper, Typography } from "@mui/material";
import { theme } from "../theme/customTheme";
import { useTheme } from "@mui/material";

const Sidebar = () => {
  const themeMode = useTheme();
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Paper variant="outlined" square sx={{ height: "100%", padding: 2 }}>
      <Paper 
        draggable
        sx={{
          display: "flex",
          padding: 1,
          flexDirection: "column",
          background: theme[themeMode?.palette?.mode]?.card,
          color: theme[themeMode?.palette?.mode]?.color,
          alignItems: "center",
          ':hover': {
            // bgcolor: 'pink', 
            // color: 'white',
            transform: 'translate3d(5px,0,0)'
          },
        }}
        onDragStart={(event) => onDragStart(event, "textEditor")}
      >
        <TextSnippetIcon />
        <Typography component="p" sx={{ fontSize: "10px" }}>
          {" "}
          Notes
        </Typography>
      </Paper>
      <br/>
      <Paper 
        draggable
        sx={{
          display: "flex",
          padding: 1,
          flexDirection: "column",
          background: theme[themeMode?.palette?.mode]?.card,
          color: theme[themeMode?.palette?.mode]?.color,
          alignItems: "center",
          ':hover': {
            transform: 'translate3d(5px,0,0)'
          },
        }}
        onDragStart={(event) => onDragStart(event, "linkEditor")}
      >
        <LinkIcon />
        <Typography component="p" sx={{ fontSize: "10px" }}>
          {" "}
          Link
        </Typography>
      </Paper>
      {/* <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      <div className="dndnode group" onDragStart={(event) => onDragStart(event, 'group')} draggable>
        Group Node
      </div> */}
    </Paper>
  );
};

export default Sidebar;
