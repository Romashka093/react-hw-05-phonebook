import React from 'react';

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
    <>
      <label htmlFor={id}>
        {titleNameInput}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </label>
    </>
  );
}
