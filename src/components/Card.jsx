import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <button className={styles.button} onClick={props.onClose}>X</button>
        <h3>{props.name}</h3>
        <div className={styles.weatherInfo}>
          <div>
            <p>Min</p>
            <p>{props.min}</p>
          </div>
          <div>
            <p>Max</p>
            <p>{props.max}</p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" />
        </div>
      </div>
    </div>
  )
};