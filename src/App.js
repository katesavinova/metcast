import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "3c65d7ce8313b695684ad6a3de842b27";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeater = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      let sunsetInSec = data.sys.sunset;
      let date = new Date(sunsetInSec * 1000);
      let timeSunset = date.toLocaleTimeString();

      let press = data.main.pressure;
      let pressRu = Math.floor(press * 100 / 133.32);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: pressRu,
        sunset: timeSunset,
        error: ""
      });
    }
  }
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeater} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;