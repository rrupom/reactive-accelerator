import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TravelPractice from "./components/TravelPractice.jsx";
import PracticeTravelEditable from "./components/PracticeTravelEditable.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PracticeTravelEditable />
  </React.StrictMode>
);
