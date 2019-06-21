
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

var template = (
  <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle} </h2>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

function getLocation(location)
{
  if( location )
    return <p>Location: {location}</p>;
  return
    undefined
}

function getAge( age )
{
  if( age && age >= 18 )
    return <p>Age: {age}</p>
}
var templateTwo = (
  <div>
    <h1>Name: {user.name ? user.name : "No Name Provided"}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p> }
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
