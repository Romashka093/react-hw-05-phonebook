import React from 'react';
import { Input } from '../../../ui/input/Input';
import styles from './Filter.module.css';

export function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.wrap}>
      <div>
        <Input
          // className={styles.paperWrap}
          value={value}
          type="text"
          placeholder="enter contact name"
          onChange={onChangeFilter}
          titleNameInput="Find contact by name:"
        />
      </div>
    </div>
  );
}
