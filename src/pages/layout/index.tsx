import {
  createTheme,
  CssBaseline,
  Grid,
  PaletteMode,
  Paper,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";

import Header from "./header";
import Sidebar from "./sidebar";
import Section from "./section";
import Footer from "./footer";
import RightSidebar from "./rightSection";

// Context
interface ColorContextSchema {
  toggleColorMode: () => void;
}

export const ColorContext = React.createContext<ColorContextSchema>(
  {} as ColorContextSchema
);

// -------------------------------------

// -------------------------------------

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Paper sx={{ mt: "7vh", height: "93vh" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} sx={{ height: "100%" }}>
            <Paper sx={{ height: "94%" }}>
              <Section />
            </Paper>
            <Paper sx={{ height: "6%" }}>
              <Footer />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default App;
