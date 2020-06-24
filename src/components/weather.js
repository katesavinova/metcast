import React from "react";

const Weather = props => {


    return (
        <div>
            {
                props.city &&
                <div>
                    <p>Местоположение:{props.city},{props.country}</p>
                    <p>Темпиратура:{props.temp}</p>
                    <p>Давление:{props.pressure}</p>
                    <p>Закат Солнца:{props.sunset}</p>
                </div>
            }
            <p>{props.error}</p>
        </div>
    );

}
export default Weather;