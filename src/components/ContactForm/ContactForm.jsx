import { Component } from 'react';
import { Formik } from 'formik';
import { Label, AddContactForm, Input } from './ContactForm.styled';
import { PropTypes } from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = (values, { resetForm }) => {
    const { props } = this;
    props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={this.handleSubmit}
      >
        <AddContactForm>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <button type="submit">Add Contacts</button>
        </AddContactForm>
      </Formik>
    );
  }
}
