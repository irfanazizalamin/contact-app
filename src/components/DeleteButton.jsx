import PropTypes from 'prop-types';

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

/**
 * 
 * @param {Number} id
 * @param {Function} onDelete
 * @returns 
 */
export default function DeleteButton({id, onDelete}) {
  return (
    <div className='contact-item__delete' onClick={() => onDelete(id)}>X</div>
  )
}
