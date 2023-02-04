import React from "react";
import { ColorContext } from "@/theme/colorContext";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Paper, Typography } from "@mui/material";
import { theme } from '@/theme/customTheme';

const Sidebar = () => {
  const colorMode = React.useContext(ColorContext);

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  console.log(colorMode.toggleColorMode,'colorMode')

  return (
    <Paper variant="outlined" square sx={{ height: "100%", padding: 2 }}>
      <Paper 
        draggable
        sx={{
          display: "flex",
          padding: 1,
          flexDirection: "column",
          // background: theme.palette.card.color2,
          alignItems: "center",
        }}
        onDragStart={(event) => onDragStart(event, "textUpdater")}
      >
        <TextSnippetIcon />
        <Typography component="p" sx={{ fontSize: "10px" }}>
          {" "}
          Notes
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
