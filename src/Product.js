import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const iphone = "https://www.backmarket.co.uk/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290063_308cbcf3-e050-4d34-b5c5-90a3714acb6c.jpg";
    const iphone2 = "https://m.media-amazon.com/images/I/718iXsqfamL._AC_SX522_.jpg"
    const addBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };
    return (
        <div className="product">
         <div className="product__item">
        <Link to={{
            pathname: "/product",
            state: {
                name: title,
                pic: image
            }
        }}>
            <img src={image} alt="hello"  className="img"/>
        </Link>
        <div className="product__info">
          <p>{title}</p>
          
          <div className="product__rating">
             {
                 Array(rating)
                 .fill()
                 .map((_) => (
                     <p>⭐</p>
                 ))
             }
          </div>
        </div>
        </div>
          <div className="d-flex justify-content-around align-items-center">
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button className="addbasket" onClick={addBasket}>Add to basket</button>
          </div>
           
        </div>
    )
}

export default Product
