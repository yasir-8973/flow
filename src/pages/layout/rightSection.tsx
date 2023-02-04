import React from "react";
import TextField from "../flowchart/textfield";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

const RightSidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Paper variant="outlined" square sx={{ height:'100%' }}>
      
    </Paper>
  );
};

export default RightSidebar;