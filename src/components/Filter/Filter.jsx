import { PropTypes } from 'prop-types';
export const Filter = ({ filterValue, onChange }) => {
  return (
    <>
      <p>find contacts by name</p>

      <input type="text" value={filterValue} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
