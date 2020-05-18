import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

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
  };

  componentDidMount() {
    const contactsInLocalStorage = localStorage.getItem('contactsState');
    const contactsInState = localStorage.getItem('contactsPrevState');
    if (contactsInLocalStorage || contactsInState) {
      const contactsState = JSON.parse(contactsInLocalStorage);
      this.setState({ contacts: contactsState });
    }
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
    const { contacts, filter } = this.state;
    return (
      <Fragment>
        <ContactForm id={contactId} onAddContact={this.addContact} />
        <ContactList
          length={contacts.length}
          contacts={this.filterForContacts()}
          value={filter}
          onDeleteContact={this.deleteContact}
          onChangeFilter={this.changeFilter}
        />
      </Fragment>
    );
  }
}
