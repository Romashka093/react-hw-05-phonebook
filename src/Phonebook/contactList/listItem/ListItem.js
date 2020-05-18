import React from 'react';
import { Button } from '../../../../ui/button/Button';

export function ListItem({ name, number, onDeleteContact }) {
  return (
    <>
      <p>{name}</p>
      <span>{number}</span>
      <Button name="delete" type="button" onClick={onDeleteContact} />
    </>
  );
}
