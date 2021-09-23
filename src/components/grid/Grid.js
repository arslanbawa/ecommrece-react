import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from './Grid.module.css'
 const Grid = (props) => {
    const storeData = useSelector(state=>state)
    const {productsData} = useSelector(state => state.products)
    console.log(productsData)
    return (
        <div className={styles.main_wrapper}>
            {
                productsData?.map((product) => {
                        if(product.category==props.name){
                            return(
                                <div className={styles.product_wrapper} >
                                    <div className={styles.img_wrapper}>
                                         <img src={product.image}></img>
                                    </div>
                                    <div className={styles.title_wrapper}>
                                        <h3 className={styles.title}>{product.title}</h3>
                                        <h5 className={styles.price}>Rs: {product.price}</h5>
                                     </div>
                                     <div className={styles.rating_wrapper}>
                                         <div>
                                             <span class="fa fa-star" ></span>
                                             <span class="fa fa-star"></span>
                                             <span class="fa fa-star"></span>
                                             <span class="fa fa-star"></span>
                                             <span class="fa fa-star-half-alt"></span>
                                         </div>
                                        <h5 className={styles.rating}>{product.rating.rate}</h5>
                                     </div>
                                </div>
                            )
                        }
                    
                })
            }
        </div>
    )
}
export default Grid;