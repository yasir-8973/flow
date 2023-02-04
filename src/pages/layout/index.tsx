import {
  createTheme,
  CssBaseline,
  Grid,
  PaletteMode,
  Paper,
  ThemeProvider,
} from "@mui/material";
import React, {
  createContext,
  useReducer,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";
import Header from "./header";
import Sidebar from "./sidebar";
import Section from "./section";
import Footer from "./footer";
import RightSidebar from "./rightSection";
import { Reducer, Context, Actions, Dispatcher } from "./reducer";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>  
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const [state, _dispatch] = useReducer(Reducer, {
    mode: "light",
    colorMode: colorMode
  });  

  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <Context.Provider value={[state, dispatch]}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout />
      </ThemeProvider>
    </Context.Provider>
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
