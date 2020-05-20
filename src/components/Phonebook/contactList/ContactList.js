import React, { Fragment } from 'react';
import { ListItem } from './listItem/ListItem';
import { Filter } from '../filter/Filter';
import styles from './ContactList.module.css';

export const ContactList = ({
  length,
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
}) => (
  <Fragment>
    {length > 0 && <Filter value={value} onChangeFilter={onChangeFilter} />}
    <ul className={styles.wrap}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.paperWrap}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  </Fragment>
);
