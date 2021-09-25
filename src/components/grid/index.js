import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './Grid.module.css'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
 const Grid = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])

    const {productsData} = useSelector(state => state.products)
    console.log(productsData)
    var count=0;
    //function for rendering products
    const GridProducts =(props) =>{
       return(
        
        <div className={styles.product_wrapper} >
            <Link to={`/products?id=${props.product.id}`}>
        <div className={styles.img_wrapper}>
             <img src={props.product.image}></img>
        </div>
        <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{props.product.title}</h3>
            <h5 className={styles.price}>Rs: {props.product.price}</h5>
         </div>
         <div className={styles.rating_wrapper}>
             <div>
                 <span class="fa fa-star" ></span>
                 <span class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                 <span class="fa fa-star-half-alt"></span>
             </div>
            <h5 className={styles.rating}>{props.product.rating.rate}</h5>
         </div>
         </Link>
    </div>
   
       )
    }
    return (
        <div className={styles.main_wrapper}>
            { productsData?.map((product) => {
                    
                    //checking if their is prop for a specific category or not
                        if(product.category==props.name){
                            if(count<4){ 
                                count++;
                                return(GridProducts( product={product})
                                )}
                            }
                        else if(props.name==""){
                            return(
                                GridProducts(product={product})
                            )
                        }
                    
                })
            }
        </div>
    )
}
export default Grid;