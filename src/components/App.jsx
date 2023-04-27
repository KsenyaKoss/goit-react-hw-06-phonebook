import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts} from './Contacts/ContactsList'

export const App = () => {

  return (
    <>
      <Form />
      <Filter/>
      <Contacts title="Contacts" />
    </>
  );
};
