import React, { Component } from 'react';
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/input/Input';
import styles from './ContactForm.module.css';

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
      <div className={styles.wrap}>
        <form className={styles.paperWrap} onSubmit={this.handleSubmit}>
          <Input
            name="name"
            onChange={this.handleChange}
            titleNameInput="Name"
            type="text"
            placeholder="contact name"
            value={name}
            id={id}
            required
          />
          <Input
            name="number"
            onChange={this.handleChange}
            titleNameInput="Number"
            type="tel"
            placeholder="contact number"
            value={number}
            id={id}
            required
          />
          <br />
          <Button name="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}
