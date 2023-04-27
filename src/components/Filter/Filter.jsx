import { Styleddiv } from 'components/Contacts/ContactsListStyled';
import { StyledInput } from 'components/Form/FormStyled';
import { setFilter } from 'Redux/phoneBookSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
   const dispatch = useDispatch()


  return (
    <Styleddiv>
      <h2>Find contacts by name</h2>
      <StyledInput type="text" onChange={ev=>{dispatch(setFilter(ev.target.value))}}></StyledInput>
    </Styleddiv>
  );
};
