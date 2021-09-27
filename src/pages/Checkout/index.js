import React, {useEffect, useState} from 'react'
import {Table, Container} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import updateProducts from '../../redux/actions/cartActions'
import styles from './Checkout.module.css'
import {useLocation} from 'react-router-dom'
import { Link } from "react-router-dom";



function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Checkout = () => {
    const [inputData, setInputData] = useState({
        contact:"", firstname: "", lastname:"", address:"", apartment:"", city:"", country:"",postalcode:""
    })
    const [userInfo, setUserInfo] = useState([])

    const onChangeHandler = e =>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    let query = useQuery();

    let total = query.get("id")

    console.log("this is total = "+total)

    let subtotal = 0
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
      
    const {cartProducts} = useSelector(state=>state.cartData);
    
    let updatedArr = userInfo

    // const onClickHandler = (e) =>{

    //     e.preventDefault();
    //     updatedArr = inputData
    //     setUserInfo(updatedArr)

    // }
    

    return (
        <Container>
            <div className={styles.mainCheckout}>
                <h1 className={styles.checkOutHeading}>Checkout</h1>
                {/* <h2>Thank you for your order - {userInfo.postalcode}</h2>
                {console.log(userInfo.contact)} */}
                <div className={styles.mainCheckoutWrap}>
                    <div className={styles.formCheckout}>
                        <form mb-3>
                            <span className={styles.formCheckoutHeading}>Contact Information</span>
                            <input class="form-control mb-3 mt-3" type="text" name="contact" placeholder=" Email or Mobile Phone Number"
                                value={inputData.contact} onChange={(e) => onChangeHandler(e)}
                            />
                            <span className={styles.formCheckoutHeading}>Shipping Address</span>
                            <input class="form-control mb-3 mt-3" type="text" name="firstname" placeholder=" Frist Name"
                                value={inputData.firstname} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="lastname" placeholder=" Last Name"
                                value={inputData.lastname} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="address" placeholder=" Address"
                                value={inputData.address} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="apartment" placeholder=" Apartment"
                                value={inputData.apartment} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="city" placeholder=" City"
                                value={inputData.city} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="country" placeholder=" Country"
                                value={inputData.country} onChange={(e) => onChangeHandler(e)}
                            />
                            <input class="form-control mb-3" type="text" name="postalcode" placeholder=" Postal Code"
                                value={inputData.postalcode} onChange={(e) => onChangeHandler(e)}
                            /><br/>
                        
                            {/* <button className={styles.formCheckoutButton}>Continue to Shipping</button> */}
                            <Link to="/Thankyou">
                                <button class="btn btn-primary"  id="submitButton">
                                    Submit
                                </button>
                            </Link>
                        </form>

                    </div>
                    <div className={styles.yourOrderCheckout}>
                        <div className="yourOrderWrap">
                            <Table>
                                <tbody>
                                    {
                                        cartProducts?.map((product, index)=>{
                                            subtotal+=product.price * product.quantity;     
                                            return(
                                                <tr key={index}>
                                                    <td>
                                                        <img className={styles.tableImg} src={product.image}/>
                                                    </td>
                                                    <td><sup>{product.quantity}</sup></td>
                                                    <td className={styles.tbodyTitle}>{product.title}</td>
                                                    <td>${product.price * product.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                            <p>Total Price including Shiping Cost: <b>${total}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Checkout;
