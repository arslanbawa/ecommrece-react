import styles from '../Footer/Footer.module.css'
import React from 'react'
import bag from "../Footer/footlogo.png"

export default function index() {

    return (
        <div>
              <div className={styles.footer}>
        <div className={styles.footer_manage}>
            <div className={styles.footer_section}>
            
                <img src={bag} alt="logo" className={styles.footlogo} />
                <p className={styles.footer_logo_article}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Fusce fermentum rutrum fringilla. Donec nulla lacus,<br/>
                    scelerisque eu metus sit amet, euismod molestie mi. className aptent<br/>
                    taciti sociosqu ad litora torquent per conubia himenaeos.</p>
    
                <div className={styles.footer_social_wrap}>
                    <ul className={styles.footer_ul}>
                        <li className={styles.footer_li}><a href="#Facebook"><i class="fab fa-facebook" className={styles.iconcolor}></i></a></li>
                        <li className={styles.footer_li}><a href="#Instagran"><i class="fab fa-instagram-square"></i></a></li>
                        <li className={styles.footer_li}><a href="#YouTube"><i class="fab fa-youtube"></i></a></li>
                        <li className={styles.footer_li}><a href="#pintrest"><i class="fab fa-pinterest-square"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_section_links}>
                <h1 className={styles.footer_h1}>Useful Links</h1><br/><br/>
                <ul>
                    <li><a href="#Home" className={styles.footer_a}>Home</a></li><br/><br/>
                    <li><a href="#News" className={styles.footer_a}>News</a></li><br/><br/>
                    <li><a href="#Contact Us" className={styles.footer_a}>Contact Us</a></li><br/><br/>
                    <li><a href="#terms" className={styles.footer_a}>Terms of Use</a></li><br/><br/>
                    <li><a href="#privacy" className={styles.footer_a}>Privacy Policy</a></li>
                </ul>
            </div>
            <div className={styles.footer_section}>
                <h1 className={styles.footer_h1}>SignUp for Newsletter</h1>
                <br/><span  className={styles.footer_paragrap}>Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit. Fusce fermentum</span>

                <form className={styles.form_table}>
                    <div className={styles.input_container}>
                       <input className={styles.input_field} type="text" placeholder="Email..." name="email" />
                     
                    </div>
             </form>

            </div>
         </div>   
    </div>
        </div>
    )
}
