import React, { Fragment } from 'react';
import { Button } from '../../../../ui/button/Button';
// import styles from './ListItem.module.css';

export function ListItem({ name, number, onDeleteContact }) {
  return (
    <Fragment>
      <p>{name}: </p>
      <span>{number}</span>
      <div>
        <Button name="delete" type="button" onClick={onDeleteContact} />
      </div>
    </Fragment>
  );
}
