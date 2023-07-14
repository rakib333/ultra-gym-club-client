// import React from 'react';
import './Product.css'

function Product({ product, handleAddToList }) {
    const { img, description, title, time_needed, age } = product;
    return (
        <div className="product-container">
            <div className="product-card">
                <img src={img} alt="" />
                <div className='product-description'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{age} years</p>
                    <p>Time needed: {time_needed} minutes</p>
                </div>
                <button onClick={() => handleAddToList(product)}>Add to list</button>
            </div>

        </div>
    );
}

export default Product;