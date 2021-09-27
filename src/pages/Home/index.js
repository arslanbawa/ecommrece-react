import React from 'react'
import Grid from '../../components/Grid'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import image1 from '../../images/Banner1.png'
import image2 from '../../images/Banner2.png'
import image3 from '../../images/Banner3.png'
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
export default function index() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div>
        <Slider {...settings}>
          <div>
         <Link to ="/Collections?id=men%27s%20clothing">   <img src={image1}  width="100%"></img></Link>
          </div>
          <div>
         <Link to ="/Collections?id=women%27s%20clothing">   <img src={image3}  width="100%"></img></Link>
          </div>
          <div>
          <Link to ="/Collections?id=women%27s%20clothing">   <img src={image2}  width="100%"></img></Link>
          </div>
        </Slider>
      
        <Container>

                <Grid name="electronics" />
                <Grid name="men's clothing" />
                <Grid name="women's clothing" />
                <Grid name="jewelery" />
                {/* <Collection/> */}
        </Container>
        </div>
    )
}
