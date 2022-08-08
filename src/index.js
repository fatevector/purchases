// import React from "react";
// import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";

// const Post = (props) => {
//   return <h1>Post: {props.title}</h1>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Post title={'Hello World!'} />);

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Counter from "./components/counter";

const App = () => {
  return <Counter />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);