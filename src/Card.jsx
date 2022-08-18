import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee, faCircleArrowRight , faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import ReactStars from 'react-stars';

function Card({ item, CartItems, handleAddToCart }) {
    return (
        <div className='col-lg-3'>
            <div className="card px-2 py-2 mx-2 my-2" style={{ width: '18rem', border: '2px solid #5bccf6' }}>
                <img className="card-img-top" src={item.img} alt="Card image cap" style={{ border: '1px solid #030e12' }} />
                <div className="card-body">
                    <h5 className="card-title">{item.prod} <FontAwesomeIcon icon={faMobileAlt} /></h5>
                    <p className="card-text">{<FontAwesomeIcon icon={faIndianRupee} />} {item.cost}</p>
                    <span><ReactStars count={5} size={24} color2={'#ffd700'} value= {item.rating} edit={false} /></span>
                    <br></br>
                    <button disabled={CartItems.some((obj) => obj.id === item.id)} onClick={() => { handleAddToCart(item) }} className="btn btn-info" style={{ border: '1px solid #030e12' }}>Add to Cart <FontAwesomeIcon icon={faCircleArrowRight} /></button>
                </div>
            </div>
        </div>
    )
}

export default Card

