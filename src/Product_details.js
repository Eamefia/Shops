import { React } from 'react';
import "./Product_details.css";
import { useLocation } from "react-router-dom";

function Product_details() {
  const location = useLocation();
  const {name} = location.state;
  const {pic} = location.state;
    return (
        <div className='product__details ps-5 py-5'>
            <div className='row product__details__all'>
              <div className='col-4 product__details__images'>
                 <img src={pic}/>
              </div>
              <div className='col-4 mt-5 product__details__specs'>
                <strong>{name}, 128GB, Pacific Blue - Fully Unlocked</strong>
                <p><a href='#'>Visist Amazon Renewed Store</a></p>
                <div className='d-flex'>
                <p>⭐⭐⭐⭐</p>
                <p>20 ratings  | 10 answered questions</p>
                </div>
                <hr />
                <div className='product__details__specs__others'>
                   <p>Price: $609.99</p>
                   <span>$161.33 Shipping & Import Fees Deposit to Ghana Details</span>
                   <span>Available at a lower price from other sellers that may not offer free Prime shipping.</span>
                   <div className='mt-4'>
                       <h5>Product works and looks like new. Backed by the 90-day Amazon Renewed Guarantee.</h5>
                       <p> This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
                         - There will be no visible cosmetic imperfections when held at an arm’s length.
                         - This product will have a battery which exceeds 80% capacity relative to new.
                       - Accessories may not be original, but will be compatible and fully functional. Product may come in generic Box.
                      - Product will come with a SIM removal tool, a charger and a charging cable. Headphones and SIM card are not included.
                      - This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied under the Amazon Renewed Guarantee</p>
                   </div>
                   <hr />
                   <div className='product__details__specs__info'>
                      <div className='product__details__specs__info__props'>
                      <table class="table">
                         <tbody>
                            <tr>
                              <td scope="row">Package Dimention</td>
                              <td>9.13 x 1.57 inches</td>
                            </tr>
                            <tr>
                              <td scope="row">Item weight</td>
                              <td>1.15 pounds</td>
                            </tr>
                            <tr>
                              <td scope="row">ASIN</td>
                              <td>B09JFFG8D7</td>
                            </tr>
                            <tr>
                              <td scope="row">Item model number</td>
                              <td>iPhone 12 Pro Max</td>
                            </tr>
                            <tr>
                              <td scope="row">Customer Reviews</td>
                              <td>⭐⭐⭐⭐  2 ratings  5.0 out of 5 stars</td>
                            </tr>
                            <tr>
                              <td scope="row">Best Sellers Rank</td>
                              <td>#8,356 in Electronics (See Top 100 in Electronics)
                                     #269 in Cell Phones</td>
                            </tr>
                            <tr>
                              <td scope="row">OS</td>
                              <td>IOS 12</td>
                            </tr>
                            <tr>
                              <td scope="row">RAM</td>
                              <td>256</td>
                            </tr>
                            <tr>
                              <td scope="row">Wireless communication technologies</td>
                              <td>Cellular</td>
                            </tr>
                            <tr>
                              <td scope="row">Other display features</td>
                              <td>Wireless</td>
                            </tr>
                            <tr>
                              <td scope="row">Form Factor</td>
                              <td>Smartphone</td>
                            </tr>
                            <tr>
                              <td scope="row">Colour</td>
                              <td>Pacific Blue</td>
                            </tr>
                            <tr>
                              <td scope="row">Battery Power Rating</td>
                              <td>2815</td>
                            </tr>
                            <tr>
                              <td scope="row">Included Components</td>
                              <td>SIM Tray Ejector, USB Cable</td>
                            </tr>
                            <tr>
                              <td scope="row">Manufacturer</td>
                              <td>Apple Computer</td>
                            </tr>
                            <tr>
                              <td scope="row">Country of Origin</td>
                              <td>USA</td>
                            </tr>
                            <tr>
                              <td scope="row">Date First Available</td>
                              <td>October 14, 2021</td>
                            </tr>
                       </tbody>
                      </table>
                      </div>
                   </div>
                </div>
              </div>
              <div className='col-4 product__details__purchase ps-2'>
                 <div className="price__column pt-4 px-3">
                    <strong className="danger"><span className="danger">$</span>1000 </strong>
                    <p className="pt-2 pb-4">$56.81 Shipping & Import Fees Deposit to Ghana Details </p>
                    <p>Delivery <strong>January 19 - 26</strong></p>
                    <strong className="danger pt-3">In Stock</strong> <br></br>
                    <button className="btn-warning mt-4 add__cat">Add to cat</button>
                    <button className="btn-success mt-2 add__cat">Buy now</button>
                    <p>Secure transaction</p>
                    <small>Ships from  Amazon.com</small> <br></br>
                    <small>Sold by  Amazon.com</small>
                    <p>Return policy: Eligible for Return, Refund or Replacement</p>
                    <p>Support: Free Amazon product support included </p>
                    <strong>Add other items:</strong>
                    <div className="d-flex justify-content-between">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Iphone pro Max 130 minuits/ 90 days warranty
                      </label>
                    </div>
                    <strong className="danger"><span className="danger">$</span>920 </strong>
                    </div>
                    <div class="form-check py-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                      <label class="form-check-label" for="flexCheckChecked">
                         Add a gift receipt for easy returns
                      </label>
                    </div>
                    <button className="addlist">Add to List</button>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Product_details
