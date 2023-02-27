import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ deleteContact, contactList }) => {
  return (
    <List>
      {contactList.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
