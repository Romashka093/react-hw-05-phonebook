import React from 'react';

export function Button({ name, type, onClick }) {
  return (
    <>
      <button onClick={onClick} type={type}>
        {name}
      </button>
    </>
  );
}
