import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const data = {
    text: "Das ist ein Test",
    name: "Dennis"
};
ReactDOM.render(<App {...data}/>, document.getElementById("root"));