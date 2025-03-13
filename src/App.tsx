import { useState } from 'react'
import Product from './components/Product';
import './App.css'
import { Menu } from 'lucide-react';
import view1 from './assets/newphotoes/view1.png';


function App() {
  const n='>'
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
            <div className='lower-view'> 
                <img src={view1} alt="view1" className="view1"/>
            </div>
            
            <div className='product-heading'>
               <p className='new-para'>Product Details</p>
            </div>
            <div className='product-view-2'>
               <Product/>
                
            </div>

           
             

     
        </div>
    </>
  )
}

export default App
