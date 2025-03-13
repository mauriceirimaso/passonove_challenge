import React, { useState } from 'react';
import './product.css';
import { Star } from 'lucide-react';
import sanitizer from '../assets/newphotoes/sanitizer.png';
import sanitizer2 from '../assets/newphotoes/sanitizer2.png';
import sanitizer3 from '../assets/newphotoes/sanitizer3.png';
import star from '../assets/icons/star.png';
import face from '../assets/newphotoes/face.png';
import product2 from '../assets/newphotoes/product2.png';
import product3 from '../assets/newphotoes/product3.png';
import product4 from '../assets/newphotoes/product4.png';

import Newproduct from './Newproduct';


interface ChildProps {
  updateCart: (newCartNumber: any) => void; 
}

const Product: React.FC<ChildProps> = ({ updateCart }) => {
  const handleAddToCart = () => {
    updateCart((prevNumber: number) => prevNumber + 1);  
  };

  const b='<';
  const c='>'

  const [number, setNumber] = useState(0);
  const [cartitem, setcartitem] = useState(0);

  const increment = () => {
    setNumber(prevNumber => (prevNumber < 6 ? prevNumber + 1 : prevNumber));
  };

  const incrementcart = () => {
    setcartitem(prevNumber => (prevNumber < 6 ? prevNumber + 1 : prevNumber));
  };

  const decrement = () => {
    setNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : prevNumber));
  };

  
  const formattedNumber = number.toString().padStart(2, '0');
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
           <div className='div-active'>
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

        <div className='product-name-div-3'>
             <p className='hand'>Hand sanitizer</p>
        </div>
        <div className='price-div-3'>
             <p className='real-price'>$49.9</p>
             <p className='through-price'>$65.55</p>
        </div>



        <div className='cart-div'>
               <button onClick={decrement} className='negative-div'>
                   <p className='minimize'>-</p>
               </button>
               <div className='negative-div'>
                   <p className='minimize'>{formattedNumber}</p>
               </div>
               <button onClick={increment} className='negative-div'>
                    <p className='minimize'>+</p>
               </button>
               <button onClick={handleAddToCart} className='real-cart'>
                    
                     <p className='onto'>Add to cart</p>
               </button>
        </div>
        <div className='description-div'>
               <button className='description-button'>
                    <p className='decsription-p-2'>description</p>
               </button>
               <button className='description-button-2'>
                    <p className='decsription-p-2'>reviews</p>
               </button>
        </div>
        <div className='description-body'>
            <p className='descript-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quis repudiandae sed esse non veritatis eligendi cumque. Numquam blanditiis, libero perspiciatis optio laudantium nesciunt debitis, quibusdam rem dolores fuga quis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias a mollitia expedita voluptate itaque quaerat eos alias, repellendus repellat iste, soluta enim ut perferendis. Aspernatur nostrum iste quos commodi.

            </p>
        </div>

        <div className='related-div'>
            <p className='related-p'>Related products</p>
        </div>

       <div className='related-view'>
       <Newproduct
        name='Digital facemask'
        image={face}
        price={49.9}
        oldPrice={60.98}
        rating={3}
      />
      <Newproduct
        name='thermemoter gun'
        image={product2}
        price={49.9}
        oldPrice={60.98}
        rating={3}
      />
      <Newproduct
        name='cosmetic  containers'
        image={product3}
        price={49.9}
        oldPrice={60.98}
        rating={3}
      />
       <Newproduct
        name='cosmetic conatiners'
        image={product4}
        price={49.9}
        oldPrice={60.98}
        rating={3}
      />
         
       </div>





{/* 
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
        </div> */}
      </div>
    </>
  )
}

export default Product