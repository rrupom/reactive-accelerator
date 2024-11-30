import demoReducer from "./experimentalRecuder";

let initialState = [];
let actions = [
  { type: "added", id: 1, text: "Visit Kafka Museum" },
  { type: "added", id: 2, text: "Watch a puppet show" },
  { type: "deleted", id: 1 },
  { type: "added", id: 3, text: "Lennon Wall pic" },
];

let finalState = actions.reduce(demoReducer, initialState);

console.log(finalState);

const output = document.getElementById("output");
output.textContent = JSON.stringify(finalState, null, 2);
