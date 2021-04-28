import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// please note that the following is based on the architecture walkthrough from the freeCodeCamp tutorial for this clone. -> denotes folder

// client side rendered app: react
// -> database is Firebase
// -> react-loading-skeleton
// tailwind

// architecture (folder structure)
  // src
    // -> components
    // -> contants
    // -> context
    // -> helpers
    // -> hooks
    // -> pages
    // -> lib (firebase is also going to live here)
    // -> services (firebase functions here)
    // -> styles (tailwind (app/tailwind))