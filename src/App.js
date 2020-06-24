import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "3c65d7ce8313b695684ad6a3de842b27";

class App extends React.Component {
  gettingWeater = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeater} />
        <Weather />
      </div>
    );
  }
}
export default App;