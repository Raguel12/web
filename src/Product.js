import React from 'react'
import "./Product.css";

function Product({id ,Name,price,rating,image}) {
  return (
    <div className="product">
        <img src={image} className="itemimg"></img>
            <div className="iteminfo">
                <p>{id}</p>
                <p>{Name}</p>
                <p>{price}</p>

                    <div className="starelement">
                        {Array(rating)
                            .fill()
                            .map(() => (<p>*</p>))}
                    </div>
            </div>
        <button>Add to Basket </button>
       
    </div>
  )
}

export default Product