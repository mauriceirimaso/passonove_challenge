import { useState,useEffect } from 'react'
import Product from './components/Product';
import './App.css'

import view1 from './assets/newphotoes/view1.png';
import night from './assets/newphotoes/night.png';
import cart from './assets/icons/cart-3.png'


function App() {
  const n='>'

  const [cartNumber, setCartNumber] = useState<number>(0); 

  const updateCart = (newCartNumber: number) => {
    setCartNumber(newCartNumber);
    localStorage.setItem('cartNumber', newCartNumber.toString());  
  };

  useEffect(() => {
    
    localStorage.setItem('cartNumber', '0');
  }, []);




  return (
    <>
     <div className="grand-container">
      <div className='header-div'>  
               <button
                   className="upper-button-active">
                   Groceries
               </button>
               <button
                    className="upper-button">
                       Fashion
               </button>
               <button
                    className="upper-button">
                       Womens
               </button>
            
            
            </div>

        <div className='cart-theme'>
              <button className='cart-div-4'>
                  <img src={night} className='night'/>
              </button>
              <div className='items'>
                     <p className='cart-number'> {cartNumber}</p>
              </div>
              <div className='cart-new-7'>
                    <img src={cart} className='night'/>
              </div>
        </div>
            <div className='lower-view'> 
                <img src={view1} alt="view1" className="view1"/>
            </div>
            
            <div className='product-heading'>
               <p className='new-para'>Product Details</p>
            </div>
            <div className='product-view-2'>
               
               <Product updateCart={updateCart} />
            </div>

           
             

     
        </div>
    </>
  )
}

export default App
