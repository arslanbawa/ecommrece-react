import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';
import styles from './Cart.module.css'
import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import {
    useLocation
  } from "react-router-dom";


const Cart = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    let subtotal = 0; 
    

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setProducts(json))
    // },[])


    // Recall Thunk API
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
      
    const {cartProducts} = useSelector(state=>state.cartData);

    console.log(cartProducts)

    const handlerFlateRate = () => {
        setTotal(subtotal + 10);
        console.log("total " + total)
    }
    const handlerLocalDelivery = () =>{
        setTotal(subtotal + 20);
        console.log("total " + total)
    }
    return (
        <Container>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    <script></script>
            <div className="cart-main">
                <h1 className={styles.cartMainh1}>Shopping Cart</h1>
                <p  className={styles.cartPara}><Link to="/home">Home</Link> | <Link to="/home">Shop</Link></p>
            
                <Table striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <td>IMAGE</td>
                            <td>PRODUCT</td>
                            <td>PRICE</td>
                            <td>QUANTITY</td>
                            <td>TOTAL</td>
                            <td>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map((product, index)=>{

                                subtotal+=product.price * product.quantity;
                                {/* setSubtotal(subtotal + (product.price * product.quantity)) */}
                             
                                return(
                                    <tr key={index}>
                                        <td><img className={styles.tableImg} src={product.image}></img></td>
                                        <td className={styles.tbodyTitle}>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price * product.quantity}</td>
                                        <td>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>               
                <div className={`row ${styles.shoppingCart}`}>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div >
                            <button className={styles.sectionActionButton}>CONTINUE SHOPPING</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className={styles.checkoutTotal}>
                            <div className={styles.SubtotalSpan}>
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <span className={styles.shippingSpan}>Shipping</span>
                            <div className={styles.inputLabel}>
                                <input type="radio" id="free-shipping" name="shipping"/>
                                <label htmlFor="free-shipping">
                                    <div className={styles.labelSpan}>
                                        <span>Free Shipping</span><span>+$00.00</span>
                                    </div>
                                </label><br/>

                                <input type="radio" id="flat-rate" name="shipping"
                                    onClick={handlerFlateRate}
                                />
                                <label htmlFor="flat-rate">
                                    <div className={styles.labelSpan}>
                                            <span>Flat Rate</span><span>+$10.00</span>
                                    </div>
                                </label><br/>

                                <input type="radio" id="local-delivery" name="shipping"
                                    onClick={handlerLocalDelivery}
                                />
                                <label htmlFor="local-delivery">
                                    <div className={styles.labelSpan}>
                                        <span>Local Delivery</span><span>+$20.00</span>
                                    </div>
                                </label><br/>
                            </div>
                            <div className="calculate-shipping">
                                <span className={styles.calShipping}>Calculate Shipping</span>
                            </div>
                            <div className={styles.totalCost}>
                                <span>Total</span><span>${total}</span>
                            </div>
                            <div>
                                <button className={styles.ProceedToCheckout}>PROCEED TO CHECKOUT</button>
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