import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


let container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />)