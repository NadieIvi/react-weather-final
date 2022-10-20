import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <div>
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <span className="WeatherTemperature">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </span>
        </div>
        <div className="col-6">
          <br />
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
