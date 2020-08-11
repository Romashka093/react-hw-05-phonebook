import React from 'react';
import style from './Input.module.css';

export function Input({
  titleNameInput,
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  required,
}) {
  return (
    <label htmlFor={id} className={style.label}>
      {titleNameInput}
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </label>
  );
}
