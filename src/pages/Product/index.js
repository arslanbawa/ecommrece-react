import { style } from 'dom-helpers'
import React, {useState, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import styles from '../Product/Product.module.css'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
export default function Product() {
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
    let query = useQuery();
    const dispatch = useDispatch()
    const [product, setProduct] = useState({});
    var [qty, setQty] = useState(1);
    const {productsData} = useSelector(state=>state.products);
    const {cartProducts} = useSelector(state=>state.cartData);

    useEffect(()=>{
        //Get id from Url and show first product if there's no id product[2]
        setProduct(productsData[(query.get("id")?(query.get("id")):0)])
    },[productsData])

   const qtyplus= ()=>{
        setQty(++qty)
    }
    const qtyminus= ()=>{
        if(qty>1)
        setQty(--qty)
    }
    return (
        <Container>
            {product?(
         <div className="product-page-wrap">       
            <div className="row">
                <div className="col-6">
                    <div className={styles.productImgWrap}>
                        {/* <img className="product-main-img img-fluid" src={product.image} /> */}
                        <img className={styles.productImage} src={product.image} />
                    </div>  
                </div>
                <div className="col-6">
                    <div className={styles.productTitle}>
                        <p>{product.title}</p>
                    </div>
                    <div className={styles.productPrice}>
                        <p>Price: ${product.price}</p>
                    </div>
                    <div className="product-form">
                    <div className="quantity-wrap">
                        <p className={styles.QuantityText}>
                            Set the quantity
                         </p>
                        <div className="quantity-input">
                            <button className="quantity-input__modifier quantity-input__modifier--left" onClick={qtyminus} >
                            &mdash;
                            </button>
                            <input className="quantity-input__screen" type="text" value={qty} readonly />
                            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={qtyplus}>
                            &#xff0b;
                            </button>  
                        </div>  
                    </div>
                     <Button onClick={()=>{                            
                            cartProducts.map((cartProduct, index)=>{
                                if(cartProduct.title===product.title)
                                {
                                    let productIndex= cartProducts.indexOf(product)
                                    cartProducts[index].quantity+=qty;
                                    dispatch(allActions.cartActions.updateProducts(cartProducts))
                                    return;
                                }
                            })
                                if(!(cartProducts.map((value)=>value.title).includes(product.title)))
                               {
                                   product.quantity=qty;
                                   dispatch(allActions.cartActions.addProduct(product))
                               }
                            }} variant="primary" className="btn-primary" >Add To Cart
                        </Button>
                    </div>
                </div>
                <div className="product-description">
                        <h5>Description: </h5>
                       <p> {product.description}</p>
                    </div>
             </div>
         </div>)  : (<h1>Loading... </h1>)}
        </Container>
    )
}
 