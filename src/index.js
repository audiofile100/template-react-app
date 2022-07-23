import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";

const app = document.getElementById("root");
const root = createRoot(app);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);