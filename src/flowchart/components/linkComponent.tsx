import { Grid, Paper } from "@mui/material";
import { Handle, Position } from "reactflow";
import LinkIcon from "@mui/icons-material/Link";
import { theme } from "../../theme/customTheme";
import { useTheme } from "@mui/material";

export default function TextField(props: any) {
  const themeMode = useTheme();
  return (
    <Paper sx={{ width: "304px", background: "#ecf0f1" }}>
      <Handle type="target" position={Position.Top} id="a" />
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinkIcon sx={{ color: theme?.common?.black }} />
        </Grid>
        <Grid item xs={10}>
          <input
            className="link-editor"
            type="text"
            placeholder="Enter a link URL"
          />
        </Grid>
      </Grid>
      <Handle type="source" position={Position.Bottom} id="b" />
    </Paper>
  );
}
