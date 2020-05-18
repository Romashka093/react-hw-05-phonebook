import React from 'react';
import { Input } from '../../../ui/input/Input';

export function Filter({ value, onChangeFilter }) {
  return (
    <>
      <Input
        value={value}
        type="text"
        placeholder="enter contact name"
        onChange={onChangeFilter}
        titleNameInput="Find contact by name:"
      />
    </>
  );
}
