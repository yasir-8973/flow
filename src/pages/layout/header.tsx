import * as React from "react";
import {
  Box,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { ColorContext } from "@/theme/colorContext";

export default function Header(props: any) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorContext);

  return (
    <AppBar
      sx={{
        position: "fixed",
        height: "7vh",
        boxShadow: "none",
        borderWidth: "1px",
        borderColor: 'lightgray',
        borderStyle: 'none none solid none'
      }}
    >
      <Toolbar variant="dense" sx={{ flexGrow: 1 }}>
        <Typography component="p">Header</Typography>
        <Paper sx={{ flexGrow: 1 }} />
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
