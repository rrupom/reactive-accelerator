import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import Scoreboard from "./components/Scoreboard.jsx";
import ScoreboardUpdated from "./components/ScoreboardUpdated.jsx";
import ChatApp from "./components/ChatApp.jsx";
import ChallengeTwo from "./components/ChallengeTwo.jsx";
import ChallengeFour from "./components/ChallengeFour.jsx";
import ChallengeFive from "./components/ChallengeFive.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChallengeFive />
  </React.StrictMode>
);
