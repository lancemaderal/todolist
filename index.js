import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList";


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <p>I Love UP-CSI - Applicants 18-19B</p>
        <p>Please enter a Task - DevCamp Project</p>
        <ToDoList/>
    </div>,
    destination
);