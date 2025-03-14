import { useState,useEffect } from 'react'
import Product from './components/Product';
import './App.css'

import view1 from './assets/newphotoes/view1.png';
import night from './assets/newphotoes/night.png';
import day from './assets/icons/day.png';
import { ShoppingCart } from 'lucide-react';
import cart from './assets/icons/cart-3.png';
import { Sun } from 'lucide-react';


function App() {
   

    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }

  const [cartNumber, setCartNumber] = useState<number>(0); 
  const [theme, setTheme] = useState(localStorage.getItem("theme"));


  const updateCart = (newCartNumber: number) => {
    setCartNumber(newCartNumber);
    localStorage.setItem('cartNumber', newCartNumber.toString());  
  };




  useEffect(() => {
    localStorage.setItem('cartNumber', '0');
  }, []);



 


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("Current Theme:", newTheme);
  };


  return (
    <>
    <div className={theme==='light' ? 'grand-grand' : 'dark-grand-grand'}>
    <div className={theme === 'light' ? 'grand-container' : 'dark-grand-container'}>
     
      <div className='header-div'>  
               <button
                   className="upper-button-active">
                       Groceries
               </button>
               <button
                    className={theme=== 'light' ? "upper-button" : "dark-upper-button"}>
                       Electronics
                      
               </button>
               <button
                    className={theme=== 'light' ? "upper-button" : "dark-upper-button"}>
                       Womens
               </button>
            </div>

        <div className='cart-theme'>
              <button onClick={toggleTheme}  className='cart-div-4'>
                { theme === 'light' ? 
                  <img src={night} className='night'/> :
                  <Sun color="white" size={27} />
                }
              </button>
              <div className='items'>
                     <p className='cart-number'> {cartNumber}</p>
              </div>
              <div  className='cart-new-9'>
                   { theme === 'light' ? 
                    <img src={cart} className='night'/>
                    : <ShoppingCart color='white' /> }

              </div>
        </div>


            <div className='lower-view'> 
                <img src={view1} alt="view1" className="view1"/>
            </div>
            
            <div className='product-heading'>
               <p className={theme=== 'light'? 'new-para' : 'dark-new-para' }>Product Details</p>
            </div>
            <div className='product-view-2'>
               {theme==='light'?
               <Product updateCart={updateCart} islight1={true}/>:<Product updateCart={updateCart} islight1={false}/>
  }
            </div>
           </div>
           
             

     
        </div>
    </>
  )
}

export default App
