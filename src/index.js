import React from "react";
import { createRoot } from "react-dom/client"; //REACT 18
import App from "./App";
import "./index.css"

//REACT 18
const root = createRoot(document.getElementById("root"));
root.render(<App />);
