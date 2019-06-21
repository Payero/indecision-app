
console.log("App is actually running");

var name = "Oscar E. Ganteaume";
const age = 49;

var templateTwo = (
  <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <p>Location: Dulles, VA</p>
  </div>
);

var template = (
  <div>
    <h1>Indecision App</h1>
    <h2>Hi: {name}! </h2>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
