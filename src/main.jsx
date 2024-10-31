import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import AddRemoveClass from "./components/AddRemoveClass.jsx";
import ProfileEditor from "./components/ProfileEditor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileEditor />
  </React.StrictMode>
);
