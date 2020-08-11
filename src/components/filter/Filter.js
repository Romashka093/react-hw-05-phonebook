import React from 'react';
import { Input } from '../../ui/input/Input';
import { CSSTransition } from 'react-transition-group';
import styles from './Filter.module.css';
import cssTransition from '../../animation/scaledTransition.module.css';

console.log('cssTransition', cssTransition);

export function Filter({ value, onChangeFilter }) {
  return (
    <CSSTransition
      in={value !== null}
      timeout={250}
      unmountOnExit
      classNames={cssTransition}
    >
      <div className={styles.wrap}>
        <div>
          <Input
            value={value}
            type="text"
            placeholder="enter contact name"
            onChange={onChangeFilter}
            titleNameInput="Find contact by name:"
          />
        </div>
      </div>
    </CSSTransition>
  );
}
