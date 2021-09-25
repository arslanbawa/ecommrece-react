import React from 'react'
import styles from "../Home/Home.module.css"
import Carousel from 'react-bootstrap/Carousel'
export default function index() {
  return (
    <div>
      {/* <div className={styles.home_container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <div className={styles.card}>
                            <div className={styles.cardh3}>
                                <h2 className={styles.caption}>​The Annual Holiday Sale</h2>
                                <p><i>Come Here and Chose Best Quality For Yor Lover's</i></p>
                                <button className="btn btn-outline-secondary">Shop Now</button>
                            </div>
                        </div>
                        <h1 className={styles.h1text} >BACK IN STOCK</h1>
                        <div class={styles.box}>SHOP IT</div>
                        <div class={styles.box}>AVALIBLE</div>
                        

                    </div>
                </div>
            </div>
 */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
            className={styles.img_set}
          />
          <Carousel.Caption>
            <div className={styles.card}>
              <div className={styles.cardh3}>
                <h2 className={styles.caption}>​The Annual Holiday Sale</h2>
                <p><i>Come Here and Chose Best Quality For Yor Lover's</i></p>
                <button className="btn btn-outline-secondary">Shop Now</button>
              </div>
            </div>
            <h1 className={styles.h1text} >BACK IN STOCK</h1>
            <div class={styles.box}>SHOP IT</div>
            <div class={styles.box}>AVALIBLE</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1533193256116-fcaf17cfb3b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcCUyMGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
            className={styles.img_set}
          />

          <Carousel.Caption>
            <div className={styles.card}>
              <div className={styles.cardh3}>
                <h2 className={styles.caption}>​The Annual Holiday Sale</h2>
                <p><i>Come Here and Chose Best Quality For Yor Lover's</i></p>
                <button className="btn btn-outline-secondary">Shop Now</button>
              </div>
            </div>
            <h1 className={styles.h1text} >BACK IN STOCK</h1>
            <div class={styles.box}>SHOP IT</div>
            <div class={styles.box}>AVALIBLE</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1516905936230-def0f338ae4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcCUyMGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
            className={styles.img_set}
          />

          <Carousel.Caption>
            <div className={styles.card}>
              <div className={styles.cardh3}>
                <h2 className={styles.caption}>​The Annual Holiday Sale</h2>
                <p><i>Come Here and Chose Best Quality For Yor Lover's</i></p>
                <button className="btn btn-outline-secondary">Shop Now</button>
              </div>
            </div>
            <h1 className={styles.h1text} >BACK IN STOCK</h1>
            <div class={styles.box}>SHOP IT</div>
            <div class={styles.box}>AVALIBLE</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div>
  )
}
