import React from 'react'
import './product.css';
import { Star } from 'lucide-react';
import sanitizer from '../assets/newphotoes/sanitizer.png';
import sanitizer2 from '../assets/newphotoes/sanitizer2.png';
import sanitizer3 from '../assets/newphotoes/sanitizer3.png';
import star from '../assets/icons/star.png';
import cart from '../assets/icons/cart.png';
import { ShoppingCart } from 'lucide-react';


const Product = () => {
  const b='<';
  const c='>'
  return (
    <>
      <div className='product-container1'>
        <div className='upper-product1'>
          <div className='off-div'>
                <div className='off-real'>
                   <p className='off-p'>56%-OFF</p>
                </div>
          </div>
             <img src={sanitizer} className='samsung'/>
          </div>
        <div className='recent-images'>
           <div className='div-1'>
                  <img src={sanitizer} className='samsung1'/>
           </div>
           <div className='div-1'>
                  <img src={sanitizer2} className='samsung1'/>
           </div>
           <div className='div-1'>
                 <img src={sanitizer3} className='samsung1'/>
           </div>
        </div>

        <div className='next-div'>
          <button className='first-div-1'>
              <p className='next-pp'>{b}</p>
          </button>
          <button className='first-div-1'>
              <p className='next-pp'>{c}</p>
          </button>
        </div>

        <div className='rating-div'> 
              <img src={star} className='star'/>
              <img src={star} className='star'/>
              <img src={star} className='star'/>
              <img src={star} className='star'/>
              <Star color="gold" size={16} />
              <Star color="gold" size={16} />
              <p className='rating-p'>(58 reviews)</p>
        </div>

        <div className='product-name-div'>
             <p className='hand'>Hand sanitizer</p>
        </div>
        <div className='price-div'>
             <p className='real-price'>$49.9</p>
             <p className='through-price'>$65.55</p>
        </div>



        <div className='cart-div'>
               <button className='negative-div'>
                   <p className='minimize'>-</p>
               </button>
               <div className='negative-div'>
                   <p className='minimize'>00</p>
               </div>
               <button className='negative-div'>
                    <p className='minimize'>+</p>
               </button>
               <a className='real-cart'>
                    
                     <p className='onto'>Add to cart</p>
               </a>
        </div>
        <div className='description-div'>
               <button className='description-button'>
                    <p className='decsription-p-2'>description</p>
               </button>
               <button className='description-button-2'>
                    <p className='decsription-p-2'>reviews</p>
               </button>
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