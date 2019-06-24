

const app = {
  title: "Indecision App",
  subtitle: "Put your life in my hands",
  options: ['One', 'Two']
};

const user = {
  name: 'Oscar',
  age: 49,
  location: "In the office"
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle} </h2>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);


const templateTwo = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p> }
    {app.options}
  </div>
);


const templateThree = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    {app.options && <p>Here are your options</p> }
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
