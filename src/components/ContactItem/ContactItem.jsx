import { Item, Name, Number, Button } from './ContactItem.styled';
import { PropTypes } from 'prop-types';

export const ContactItem = ({ info, onDelete }) => {
  const handlCliclDelete = () => {
    onDelete(info.id);
  };
  return (
    <Item key={info.id}>
      <Name>{info.name}</Name>
      <Number>{info.number} </Number>

      <Button type="button" onClick={handlCliclDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
