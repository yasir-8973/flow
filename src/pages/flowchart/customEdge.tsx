import React from 'react';
import { getBezierPath } from 'reactflow';

export default function CustomEdge(props :any) {
  const [edgePath] = getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  });

  return (
    <>
      <path
        id={props.id}
        style={props.style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={props.markerEnd}
      />
      <text>
        <textPath href={`#${props.id}`} style={{ fontSize: 12 }} startOffset="50%" textAnchor="middle">
          {props?.data?.text}
        </textPath>
      </text>
    </>
  );
}