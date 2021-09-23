import React from 'react'
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import styles from './Cart.module.css'


const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])

    console.log(products)
    return (
        <Container>
            <div className="cart-main">
                <h1>Shopping Cart</h1>
                <p><Link to="/ShoppingCart">Home</Link> | <Link to="/ShoppingCart">Shop</Link></p>
            
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <td>PRODUCT</td>
                            <td>PRICE</td>
                            <td>QUANTITY</td>
                            <td>TOTAL</td>
                            <td>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index)=>{
                                if(index>3) return;
                                return(
                                    <tr key={index}>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>2</td>
                                        <td>{product.price * 2}</td>
                                        <td>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>               
                <div className={`row ${styles.shoppingCart}`}>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div >
                            <button className={styles.sectionActionButton}>CONTINUE SHOPPING</button>
                            <form>
                                <label>Discount Code:</label>
                                <div>
                                    <input type="text" placeholder="Enter Your Code"/>
                                    <button>Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="checkout-total">
                            <h4>
                                Subtotal
                                <span> $199.70</span>
                            </h4>
                            <h5>Shipping</h5>
                            <input type="radio" id="free-shipping" name="shipping"/>
                            <label htmlFor="free-shipping">Free Shipping <span>+$00.00</span></label><br/>

                            <input type="radio" id="flat-rate" name="shipping"/>
                            <label htmlFor="flat-rate">Flat Rate<span>+$10.00</span></label><br/>

                            <input type="radio" id="local-delivery" name="shipping"/>
                            <label htmlFor="local-delivery">Local Delivery <span>+$20.00</span></label><br/>
                            <div className="calculate-shipping">
                                <h5>Calulate Shipping</h5>
                                <h4>Total <span>$199.70</span></h4>
                            </div>
                            <div>
                                <button>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="shopping-cart">
                        <div className="section-action">
                            <button>CONTINUE SHOPPING</button>
                            <form>
                                <label>Discount Code:</label>
                                <div>
                                    <input type="text" placeholder="Enter Your Code"/>
                                    <button>Apply</button>
                                </div>
                            </form>
                        </div>
                        <div className="checkout-total">
                            <h4>
                                Subtotal
                                <span> $199.70</span>
                            </h4>
                            <h5>Shipping</h5>
                            <input type="radio" id="free-shipping" name="free-shipping"/>
                            <label htmlFor="free-shipping">Free Shipping <span>+$00.00</span></label><br/>

                            <input type="radio" id="flat-rate" name="flat-rate"/>
                            <label htmlFor="flat-rate">Flat Rate<span>+$10.00</span></label><br/>

                            <input type="radio" id="local-delivery" name="local-delivery"/>
                            <label htmlFor="local-delivery">Local Delivery <span>+$20.00</span></label><br/>
                            <div className="calculate-shipping">
                                <h5>Calulate Shipping</h5>
                                <button>UPDATE TOTAL</button>
                                <h4>Total <span>$199.70</span></h4>
                            </div>
                            <div>
                                <button>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                </div> */}
            </div>
        </Container>
    )
}

export default Cart








// import React from 'react'

// export default function index() {
//     return (
//         <div>
//               <h1>Cart</h1>
//         </div>
//     )
// }