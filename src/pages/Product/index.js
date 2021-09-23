import { style } from 'dom-helpers'
import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import styles from '../Product/Product.module.css'
export default function Product() {
    const [product, setProduct] = useState({});
    useEffect (()=>{
       fetch('https://fakestoreapi.com/products/2')
      .then(res=>res.json())
      .then(json=>{
          setProduct(json)
          console.log(json)
      })
    },[]);  
    return (
        <Container>
            {product?(
         <div className="product-page-wrap">       
            <div className="row">
                <div className="col-6">
                    <div className={styles.productImgWrap}>
                        <img className="product-main-img img-fluid " src={product.image} />
                    </div>  
                </div>
                <div className="col-6">
                    <div className="product-title">
                        <h1>{product.title}</h1>
                    </div>
                </div>
             </div>
         </div>)  : (<h1>Loading... </h1>)}
        </Container>
    )
}
 