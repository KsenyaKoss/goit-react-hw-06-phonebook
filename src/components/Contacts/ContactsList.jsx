import { StyledList, Styleddiv } from './ContactsListStyled';
import { StyledTitle } from '../Form/FormStyled';
import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilterdContacts } from 'Redux/selectors';

export const Contacts = ({title}) => {
  const contacts = useSelector(selectFilterdContacts)
  return (
    <Styleddiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contactData={contact}
            ></ContactItem>
          );
        })}
      </StyledList>
    </Styleddiv>
  );
};

Contacts.propTypes = {
  title: PropTypes.string,
};
