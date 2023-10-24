import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},

React.createElement("div",{id: "child"},
[
React.createElement("h1",{},"This is Namastey React"),
React.createElement("h2",{},"Iwas an h2 tag")] // array of children inside child class
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);


// const heading = React.createElement("h1", {id: "heading"}, "Hello from React,tsk");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);