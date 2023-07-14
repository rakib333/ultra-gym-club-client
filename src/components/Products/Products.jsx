// import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Calculation from '../Calculation/Calculation';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [times, setTimes] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToList = (product) => {
        const newTime = times + parseInt(product.time_needed)
        setTimes(newTime)

    }
    return (
        <div className='main-container'>
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
            <div className='site-calculation'>
                <Calculation time={times}></Calculation>
            </div>
        </div>
    );
};

export default Products;