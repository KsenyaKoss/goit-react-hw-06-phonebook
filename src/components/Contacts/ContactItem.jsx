import { StyledItem } from './ContactsListStyled';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; 
import { deleteContact } from 'Redux/phoneBookSlice';

export const ContactItem = ({contactData}) => {
  const { name, number, id } = contactData;
  const dispatch = useDispatch()
  return (
    <StyledItem>
      {`${name}: ${number}`}
      <StyledButton
        type="button"
        onClick={()=>{dispatch(deleteContact(id))}}
      >
        Delete
      </StyledButton>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  })
};



const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 10px;
  margin: 20px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    background-position: right center;
  }
`;
