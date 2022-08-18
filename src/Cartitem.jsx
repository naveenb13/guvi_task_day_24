import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function Cartitem({ cartitem, removeFromCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={{ border: '2px solid #5bccf6' }}>
      <img src={cartitem.img} width={"40rem"} style={{ border: '1px solid #030e12' }} /><strong>{cartitem.prod}</strong>
      <span>{<FontAwesomeIcon icon={faIndianRupee} />} <strong>{cartitem.cost}</strong></span>
      <button onClick={() => { removeFromCart(cartitem) }} className="badge bg-danger rounded-pill">X</button>
    </li>
  )
}

export default Cartitem