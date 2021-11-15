import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return(
    <div className={styles.container}>
      {
         props.cities
         ? props.cities.map(city => (
          <Card 
            key ={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        ))
        : <h4>No Hay Ciudades</h4>
        
      }

    </div>
  )
};