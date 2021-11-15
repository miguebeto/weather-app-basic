import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';


export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return(
    <div className={styles.container}>
      {
         cities
         ? cities.map(({id, main, name, weather}) => (
          <Card 
            key ={id}
            max={main.temp_max}
            min={main.temp_min}
            name={name}
            img={weather[0].icon}
            onClose={() => alert(name)}
          />
        ))
        : <h4>No Hay Ciudades</h4>
        
      }

    </div>
  )
};