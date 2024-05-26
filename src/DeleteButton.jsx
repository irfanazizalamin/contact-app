import React from 'react'

/**
 * 
 * @param {String} id
 * @param {Function} onDelete
 * @returns 
 */
export default function DeleteButton({id, onDelete}) {
  return (
    <div className='contact-item__delete' onClick={() => onDelete(id)}>X</div>
  )
}
