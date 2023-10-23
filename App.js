const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[
React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")] // array of children inside child class
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);


// const heading = React.createElement("h1", {id: "heading"}, "Hello from React,tsk");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);