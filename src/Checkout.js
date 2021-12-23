import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduc from './CheckoutProduc';
import CurrencyFormat from "react-currency-format";
import Subtotal from './Subtotal';
import "./Checkout.css"

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
         <div className="checkout__left">
            <img className="checkout__ad" src="https://img.alicdn.com/imgextra/i4/O1CN01qWypzY20A76xEqVJ0_!!6000000006808-2-tps-968-230.png" alt=" checkoutAd"/>
        
        { basket?.length === 0 ? (
            <div>
              <h2>Your basket is empty</h2>
              <p>
               You have no items in your basket. to buy one or more
               "Add to basket" next to the item.
              </p>
            </div>
        ):(
            <div>
               <h2 className="checkout__title">Your shopping basket</h2>
               {basket.map((item) => (
                   <CheckoutProduc
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                   />
               ))}
            </div>
            
        )}
         </div>
            {basket.length > 0 && (
               <div className="checkout__right">
                   <Subtotal />
               </div>
            )}
        </div>
    )
}

export default Checkout
