import React from "react";
import ReactDOM from "react-dom/client";

//(React.createElement => Object => after rendering it to DOM it becomes a HTML object
// 3 components of react element tag name, id, The statement which has to be passed in the tag

// const heading = React.createElement("h1",{id: "heading"},"This is a react Element");   //Core React
// console.log(heading);


// React Element
const Title = () =>
(
  <h1 id="heading" className="head">
    Heading using JSX
  </h1>
); //using JSX


// React Functional Component
// Calling Title component inside HeadingComponent => <Title/>

// Composing 2 components under 1 and other is known as component composition
// ReactComponent can be called inside functional component, react component can be called inside a react component.
// Functional component can be called inside a react component

const number = 1000;

const HeadingComponent = () => (
  <div className="container">
    <Title/>       
    <h2>{100 + 200}</h2>   
    <h1>React based funcitonal component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
