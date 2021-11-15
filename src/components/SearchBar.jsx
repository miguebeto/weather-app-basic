import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return(
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='Ciudad....' />
      <button className={styles.button} onClick={() => props.onSearch('Buscando...')}>Agregar</button>
    </div>
  )
};