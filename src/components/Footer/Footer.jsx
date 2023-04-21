import style from './Footer.module.css';
import logo from './../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.main}>
            <div className={style.footerLinks}>
                <div className={style.child1}>
                    <div onClick={scrollTop}><Link to="/"><img src={logo} alt="logo" /></Link></div>
                    <div>
                        VeganEssentials is a one-stop shopping destination for all vegan products. Shop now to get the highest quality animal-free & cruelty-free products.
                        <br /><br />
                        Email: info@veganessentials.com
                        <br />
                        Phone: 833-407-0747
                    </div>
                </div>
                <div className={style.child2}>
                    <h2>RESOURCES</h2>
                    <p><Link to="#">About Us</Link></p>
                    <p><Link to="#">Conatct</Link></p>
                    <p><Link to="#">FAQ</Link></p>
                    <p><Link to="#">Suggest a Product</Link></p>
                    <p><Link to="#">Shipping Policy</Link></p>
                    <p><Link to="#">Return Policy</Link></p>
                    <p><Link to="#">Privacy Policy</Link></p>
                    <p><Link to="#">Vendor Application</Link></p>
                </div>
                <div className={style.child3}>
                    <h2>MOST POPULAR</h2>
                    <p><Link to="#">Companion Animal</Link></p>
                    <p><Link to="#">Products</Link></p>
                    <p><Link to="#">New Products</Link></p>
                    <p><Link to="#">Sale Products</Link></p>
                    <p><Link to="#">Cheese Alternatives</Link></p>
                    <p><Link to="#">Meat Alternatives</Link></p>
                    <p><Link to="#">Candy & Sweets</Link></p>
                    <p><Link to="#">Gift Certificates</Link></p>
                    <p><Link to="#">Personal Care</Link></p>
                </div>
                <div className={style.child4}>
                    <h2>NEWS LETTER</h2>
                    <p>Join Our Good News Mailing List</p>
                    <div>
                        <input type="email" name="" id="" placeholder='Enter your email' />
                        <button>SUBSCRIBE</button>
                    </div>
                    <h2>SOCIAL</h2>
                    <p><Link to="#"><i class="fa-brands fa-facebook-f"></i> Facebook</Link></p>
                    <p><Link to="#"><i class="fa-brands fa-twitter"></i> Twitter</Link></p>
                    <p><Link to="#"><i class="fa-brands fa-instagram"></i> Instagram</Link></p>
                </div>
            </div>
            <div className={style.copyright}>
                <div>© 2023 Copyright <Link to="/" onClick={scrollTop}>Vegan Essentials</Link> Online Store</div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/t/8/assets/payment-methods.jpg" alt="credit-cards" />
                </div>
            </div>
        </div>
    )
}

export default Footer;