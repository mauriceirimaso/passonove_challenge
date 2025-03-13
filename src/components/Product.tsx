import React from 'react'
import './product.css';
import samsung from '../assets/newphotoes/samsung.png';

const Product = () => {
  return (
    <>
      <div className='product-container1'>
        <div className='upper-product1'>
          <div className='off-div'>
                <div className='off-real'>
                   <p className='off-p'>56%-OFF</p>
                </div>
          </div>
             <img src={samsung} className='samsung'/>
        </div>
        <div className='lower-heading'>
            <p className='lower-p'>Galaxy s22 ultra </p>
        </div>
        <div className='lower-heading-3'>
            <p className='lower-p'>$ 3.233</p>
            <p className="second-p">$ 4.23</p>
        </div>
        <div className='lower-heading-4'>
            <p className='lower-2'>save</p>
            <p className='lower-2'>$3.233</p>
        </div>
      </div>
    </>
  )
}

export default Product