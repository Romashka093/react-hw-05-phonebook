import React, { Component } from 'react';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import styles from './Phonebook.module.css';
import cssTransition from '../animation/appearTransition.module.css';

const contactId = shortid.generate();

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isLoaded: false,
  };

  componentDidMount() {
    const contactsInLocalStorage = localStorage.getItem('contactsState');
    const contactsInState = localStorage.getItem('contactsPrevState');
    if (contactsInLocalStorage || contactsInState) {
      const contactsState = JSON.parse(contactsInLocalStorage);
      this.setState({ contacts: contactsState });
    }
    this.setState({ isLoaded: true });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'contactsState',
        JSON.stringify(this.state.contacts),
      );
      localStorage.setItem(
        'contactsPrevState',
        JSON.stringify(prevState.contacts),
      );
    }
  }

  addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: shortid.generate(),
    };

    let isUniqueName = true;
    this.state.contacts.forEach(contact => {
      if (contact.name.includes(contactToAdd.name)) {
        isUniqueName = false;
        return alert(`${contactToAdd.name} is already in contacts.`);
      } else {
        isUniqueName = true;
      }
    });

    isUniqueName &&
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contactToAdd],
        };
      });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterForContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter, isLoaded } = this.state;
    return (
      <main className={styles.mainContentWrapper}>
        <CSSTransition in={isLoaded} timeout={500} classNames={cssTransition}>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <ContactForm id={contactId} onAddContact={this.addContact} />
        <ContactList
          isLoaded={isLoaded}
          length={contacts.length}
          contacts={this.filterForContacts()}
          value={filter}
          onDeleteContact={this.deleteContact}
          onChangeFilter={this.changeFilter}
        />
      </main>
    );
  }
}
