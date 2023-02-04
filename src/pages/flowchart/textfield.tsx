import { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default memo(() => {
  const onChange = useCallback((evt: any) => {
    // console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} id="a" />
      <div>
        <textarea
          placeholder="Start typing"
          rows={4}
          name="comment[text]"
          className="ui-autocomplete-input"
          role="textbox"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
});