// import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToList = (id, time) => {
        console.log('clicked', id, time)
    }
    return (
        <div className='products-container'>
            {/* <h3>products number: {products.length}</h3> */}
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToList={handleAddToList}
                ></Product>)
            }
        </div>
    );
};

export default Products;