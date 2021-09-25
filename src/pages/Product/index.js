import { style } from 'dom-helpers'
import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import styles from '../Product/Product.module.css'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
export default function Product() {

    const [temp, setTemp] = useState(0);
    const dispatch = useDispatch()
    const [product, setProduct] = useState({});
    const {productsData} = useSelector(state=>state.products);
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [temp])
    useEffect(()=>{
        setProduct(productsData[1])
    },[productsData])

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
 