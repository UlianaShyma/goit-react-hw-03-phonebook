import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
