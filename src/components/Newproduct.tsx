import React from 'react'
import './Newproduct.css';
import face from '../assets/newphotoes/face.png';
import star from '../assets/icons/star.png';

interface NewproductProps {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
}

const Newproduct: React.FC<NewproductProps> = ({ name, image, price, oldPrice }) => {
  return (
    <div className='newproduct-container'>
            <div className='photo-view'>
                <img src={image || face} className='face' alt={name} />
            </div>
            <div className='rating'>
                <img src={star} className='star1'/>
                <img src={star} className='star1'/>
                <img src={star} className='star1'/>
                
            </div>
            <div className='product-name-div'>
                 <p className='face1'>{name}</p>  
            </div>
            <div className='price-div'>
                 <p className='real-price-3'>${price}</p>
                 {oldPrice && <p className='fake-p'>${oldPrice}</p>}
            </div>
    </div>
  )
}

export default Newproduct