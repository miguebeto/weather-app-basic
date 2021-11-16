import React from 'react';
import style from "./Card.module.css";

export default function Card({ onClose, name, min, max, img }) {
  // acá va tu código
	const handleClose = () => { 
	if( typeof onClose === "function") onClose();
}
  return (
    <div className={style.container}>
      <div className={style.weather}>
        <button className={style.button} onClick={handleClose}>X</button>
        <h3>{name}</h3>
        <div className={style.weatherInfo}>
          <div>
            <p>Min</p>
            <p>{min}</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}</p>
          </div>
          <img className={style.imgWeather} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
        </div>
      </div>
    </div>
  )
};