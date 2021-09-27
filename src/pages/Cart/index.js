import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';
import styles from './Cart.module.css'
import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import updateProducts from '../../redux/actions/cartActions'
import {
    useLocation
  } from "react-router-dom";


const Cart = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [disable, setDisable] = useState(true);
    let subtotal = 0;

    // Recall Thunk API
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
      
    const {cartProducts} = useSelector(state=>state.cartData);

    console.log("Card Products are "+cartProducts)

    const handlerFreeShipping = () => {
        setTotal(subtotal + 0);
        setDisable(false)
    }
    const handlerFlateRate = () => {
        setTotal(subtotal + 10);
        setDisable(false)
    }
    const handlerLocalDelivery = () => {
        setTotal(subtotal + 20); 
        setDisable(false)

    }
    return (
        <Container>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <div className="cart-main">
                <h1 className={styles.cartMainh1}>Shopping Cart</h1>            
                <Table hover>
                    <thead className="table-light">
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
                            cartProducts?.map((product, index)=>{
                                subtotal+=product.price * product.quantity;     
                                return(
                                    <tr key={index}>
                                        <td><img className={styles.tableImg} src={product.image}></img></td>
                                        <td className={styles.tbodyTitle}>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price * product.quantity}</td>
                                        <td>
                                        <button type="button" class="btn btn-danger"
                                            onClick={()=>
                                            {   
                                                setDisable(true)
                                                let newList =  cartProducts.filter((val, index) =>
                                                {
                                                    return( product.id != val.id);
                                                })
                                                    dispatch(allActions.cartActions.updateProducts(newList))
                                            }
                                        }>Delete</button>
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
                        <Link to="/home"><button className={styles.sectionActionButton}>CONTINUE SHOPPING</button></Link>
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
                                <input type="radio" id="free-shipping" name="shipping"
                                    onClick={handlerFreeShipping}
                                />
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
                                <Link to={`/checkout?id=${total}`}>
                                    <button className={styles.ProceedToCheckout} disabled={disable}>
                                        PROCEED TO CHECKOUT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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