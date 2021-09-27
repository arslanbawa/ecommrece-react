import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './Grid.module.css'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import Collection from '../../pages/Collection'

 const Grid = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
    
    const {productsData} = useSelector(state => state.products)
    console.log("Grid product Test"+productsData)
    var count=0;

    //function for rendering products
        const GridProducts =(props) =>{
            let title = props.product.title
            console.log("this is props = "+props.product.category);
            return(
                <div className={styles.product_wrapper} >
                    <Link to={`/products?id=${props.product.id-1}`}>
                    <div className={styles.img_wrapper}>
                        <img src={props.product.image}/>
                    </div></Link>
                    <div className={styles.title_wrapper}>
                        <span className={styles.title}>{title.substr(0, 16)}</span>
                        <span className={styles.price}>${props.product.price}</span>
                    </div>
                    <div className={styles.rating_wrapper}>
                        <div>
                            
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star-half-alt"></span>
                            <span className={styles.rating}>({props.product.rating.rate})</span>
                        </div>
                        
                    </div>
                    <div>
                        <Link to={`/products?id=${props.product.id-1}`}>
                            <button className={styles.cartButton}>Buy Now</button>
                        </Link> 
                    </div>     
                </div>
            )
        }
    return (
        <div>
            <Link to={`/Collections?id=${props.name}`}>
                <button className={styles.showCollection}>{props.name}</button>
            </Link>

            {/* <h4 className={styles.categoryH2}>{props.name}</h4> */}
            <div className={styles.main_wrapper}>
                {
                    productsData?.map((product) => {
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
        </div>
        
    )
}
export default Grid;