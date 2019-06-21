"use strict";

console.log("App is actually running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in my hands"
};

var user = {
  name: 'Oscar',
  age: 49,
  location: "In the office"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "h2",
    null,
    app.subtitle,
    " "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

function getLocation(location) {
  if (location) return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
  return;
  undefined;
}

function getAge(age) {
  if (age && age >= 18) return React.createElement(
    "p",
    null,
    "Age: ",
    age
  );
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name ? user.name : "No Name Provided"
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
