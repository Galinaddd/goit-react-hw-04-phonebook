import { useState } from 'react';
import { Container } from './App.styled';
import { Filter } from '../Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(5),
    };
    const NameNornalized = name.toLowerCase();
    const IsInContacts = contacts.some(
      contact => contact.name.toLowerCase() === NameNornalized
    );
    if (IsInContacts) {
      alert(`${name} is olready in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () => {
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {filterContacts().length || filter ? (
        filterContacts().length ? (
          <>
            <Filter filterValue={filter} onChange={changeFilter} />
            <ContactList contacts={filterContacts()} onDelete={deleteContact} />
          </>
        ) : (
          <>
            <Filter filterValue={filter} onChange={changeFilter} />
            <p>Contact not found</p>
          </>
        )
      ) : (
        <p>There are no phone numbers in Contacts!</p>
      )}
    </Container>
  );
};
