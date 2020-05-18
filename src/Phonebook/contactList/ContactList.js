import React from 'react';
import { ListItem } from './listItem/ListItem';
import { Filter } from '../filter/Filter';

export const ContactList = ({
  length,
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
}) => (
  <>
    <h2>Contacts:</h2>
    {length > 0 && <Filter value={value} onChangeFilter={onChangeFilter} />}
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  </>
);
