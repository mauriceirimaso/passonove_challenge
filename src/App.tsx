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
               <div className='heading-1'>
                    <p className='normal-p'>Grab the best deal on</p>
                    <p className='second-p'>Smartphones</p>
               </div>
               <button className='view-all'>
                    View all{n}
               </button>
            </div>
            <div className='product-view-2'>
               <Product/>
                <Product/>
                <Product/>
            </div>

     
        </div>
    </>
  )
}

export default App
