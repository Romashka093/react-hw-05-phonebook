import React from 'react';
import { ListItem } from './listItem/ListItem';
import { Filter } from '../filter/Filter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';
import cssTransition from '../../animation/scaledTransition.module.css';

export const ContactList = ({
  length,
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
  isLoaded,
}) => (
  <TransitionGroup component="ul" className={styles.wrap}>
    {length > 1 && (
      <Filter
        value={value}
        onChangeFilter={onChangeFilter}
        isLoaded={isLoaded}
      />
    )}
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={250}
        unmountOnExit
        classNames={cssTransition}
      >
        <li className={styles.paperWrap}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
