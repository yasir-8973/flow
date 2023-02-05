import { Paper } from "@mui/material";
import { Handle, Position } from "reactflow";


export default function TextField(props: any) {
  const textarea = document.getElementById(props.id);
  function setHeight(elem: any) {
    if(elem){
        const style = getComputedStyle(elem, null);
        const verticalBorders = Math.round(
          parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)
        );
        const maxHeight = parseFloat(style.maxHeight) || 300;
        elem.style.height = "auto";
        const newHeight = elem.scrollHeight + verticalBorders;
        elem.style.overflowY = newHeight > maxHeight ? "auto" : "hidden";
        elem.style.height = Math.min(newHeight, maxHeight) + "px";
    }    
  }

  textarea?.addEventListener("input", (e) => {
    setHeight(e.target);
  });

  setHeight(textarea);
  return (
    <Paper sx={{ width: '304px',background: '#ecf0f1' }}>
      <Handle type="target" position={Position.Top} id="a" />
      <textarea id={props.id} className="editable-textarea" rows={2} placeholder="Start Typing" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </Paper>
  );
};
