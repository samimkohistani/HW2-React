import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
      {Weather}
      </section>
    </div>
  );
}

export default App;