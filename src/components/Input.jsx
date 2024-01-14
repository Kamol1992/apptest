import React, { useState } from "react";



import styles from './Input.module.css'

export default function Input({name, onInputChange}){

    const [inputValue, setinputValue] = useState();

    const handleInput = (event) => {
        const value = parseFloat(event.target.value);
        setinputValue(value);
        console.log(value);
        onInputChange(value);
    }

  return (
    <p>
        <label>{name}</label>
        <input type="number" value={inputValue} className={styles.input} onChange={handleInput} min={name == 'Duration' ? 1 : 0.1} required />
        {inputValue == 0 ? (
          name == 'Duration' ? (<p className={styles.alert}>Wartość nie może być po przecinku</p>) : (<p className={styles.alert}>Wpisz poprawną wartość!</p>)
        ) : <p></p>}
    </p>
  )
}