import React from 'react';
import TextField from './textfield';

const Sidebar = () => {
  const onDragStart = (event: any, nodeType:any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
        Textarea
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      <div className="dndnode group" onDragStart={(event) => onDragStart(event, 'group')} draggable>
        Group Node
      </div>
    </aside>
  );
};

export default Sidebar;