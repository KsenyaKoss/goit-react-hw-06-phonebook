import { Button } from './Button';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledTitle,
} from './FormStyled';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/phoneBookSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ev => {
    ev.preventDefault();
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    if (!existingContact){
      dispatch(
        addContact({
          id: nanoid(),
          name: ev.target.elements.name.value,
          number: ev.target.elements.number.value,
        })
      );
      setName('');
      setNumber('');
    } else {
      alert(`${name} or ${number} is already in contacts`);
      setName('');
      setNumber('');
    }
  };

  const handleInputChange = ev => {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
    }
    if (ev.target.name === 'number') {
      setNumber(ev.target.value);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Phonebook</StyledTitle>
      <StyledLabel htmlFor="">
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="">
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <Button title="Add contact" />
    </StyledForm>
  );
};
