const parent = React.createElement(
  "h1", 
  {
    id: "parent"
  }, 
  [React.createElement("div", {id: "child1"},
     [React.createElement("h1", {}, "Hi iam h1"), 
      React.createElement("h2", {}, "Hi iam h2")]),
   React.createElement("div", {id: "child2"}, 
    [React.createElement("h1", {}, "Hi iam h11"), 
     React.createElement("h2", {}, "Hi iam h21")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)
root.render(parent);