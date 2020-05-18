import React, { Component } from 'react';
import { Button } from '../../../ui/button/Button';
import { Input } from '../../../ui/input/Input';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...initialState,
  };
  handleChange = ({ target: { name, value } }) => {
    if (name === value) {
      return alert('NOT1');
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      ...initialState,
    });
  };

  render() {
    const { name, number } = this.state;
    const { id } = this.props;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            onChange={this.handleChange}
            titleNameInput="Name"
            type="text"
            placeholder="enter name"
            value={name}
            id={id}
            required
          />
          <Input
            name="number"
            onChange={this.handleChange}
            titleNameInput="Number"
            type="tel"
            placeholder="enter number"
            value={number}
            id={id}
            required
          />
          <br />
          <Button name="Add contact" type="submit" />
        </form>
      </>
    );
  }
}
