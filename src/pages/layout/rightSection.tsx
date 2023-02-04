import React from "react";
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