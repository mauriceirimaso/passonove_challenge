import React from 'react'
import './product.css';
import samsung from '../assets/newphotoes/samsung.png';

const Product = () => {
  return (
    <>
      <div className='product-container1'>
        <div className='upper-product1'>
             <img src={samsung} className='samsung'/>
        </div>
        <div className='lower-heading'>
            <p >Galaxy s22 ultra </p>
        </div>
      </div>
    </>
  )
}

export default Product