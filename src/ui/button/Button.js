import React from 'react';
import style from './Button.module.css';

export function Button({ name, type, onClick }) {
  return (
    <button className={style.button} onClick={onClick} type={type}>
      {name}
    </button>
  );
}
