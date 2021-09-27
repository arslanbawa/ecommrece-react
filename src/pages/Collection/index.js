import React, { useDebugValue } from 'react'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import styles from '../../components/Grid/Grid.module.css'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../redux/actions'
import { Container } from 'react-bootstrap';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Collection = () => {
    let query = useQuery();
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
      }, [])
    
    let item = query.get("id")

    const {productsData} = useSelector(state => state.products)
    console.log("this is product test "+productsData)
    var count=0;
    
    //function for rendering products
    const GridProducts =(props) =>{
        let title = props.product.title
        console.log("this is props test = "+props.product.category);
        return(
            <div className={styles.product_wrapper} >
                <Link to={`/products?id=${props.product.id-1}`}>
                <div className={styles.img_wrapper}>
                    <img src={props.product.image}/>
                </div></Link>
                <div className={styles.title_wrapper}>
                    <span className={styles.title}>{title.substr(0, 16)}</span>
                    <span className={styles.price}>$ {props.product.price}</span>
                </div>
                <div className={styles.rating_wrapper}>
                    <div>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star-half-alt"></span>
                    </div>
                    <span className={styles.rating}>{props.product.rating.rate}</span>
                </div>
                <div>
                    <Link to={`/products?id=${props.product.id-1}`}>
                        <button className={styles.cartButton}>Buy Now</button>
                    </Link>
                </div>     
            </div>
        )
    }


    //****************************/
    return(
        <Container>     
        <div>
            <Link to={`/Collections?id=${item}`}>
                <button className={styles.showCollection}>{item}</button>
            </Link>
            <div className={styles.main_wrapper}>
                {
                    productsData?.map((product) => {
                        //checking if their is prop for a specific category or not
                            if(product.category==item){
                                if(count<productsData.length){ 
                                    count++;
                                    return(GridProducts( product={product})
                                    )}
                                }
                            else if(item==""){
                                return(
                                    GridProducts(product={product})
                                )
                            }
                    })
                }
            </div>
        </div>
        </Container>
    )
}
export default Collection;
