import ImageSliderComp from "../../components/ImageSliderComp/ImageSliderComp";
import style from './Home.module.css';
import { Link } from "react-router-dom";
import img1 from './Images/img1.PNG';
import img2 from './Images/img2.PNG';
import img3 from './Images/img3.PNG';
import asSeenIn from './Images/as_seen_in.PNG';
import ImageCarosal from "../../components/ImageCarosal/ImageCarosal";
import CardContainer from "../../components/CardContainer/CardContainer";
import veganEasterGifts from './../../data/vegan_easter_gifts.json';
import veganCheese from './../../data/vegan_cheese.json';

const Home = () => {
    return (
        <>
            <ImageSliderComp />
            <div className={style.static_child1}>
                <div><Link to="#"><img src={img1} alt="image" /></Link></div>
                <div><Link to="#"><img src={img2} alt="image" /></Link></div>
                <div><Link to="#"><img src={img3} alt="image" /></Link></div>
            </div>

            <ImageCarosal />

            <CardContainer data={veganEasterGifts} cardDisplayCount={4} />
            <CardContainer data={veganCheese} cardDisplayCount={4} />

            <div className={style.static_child2}>
                <h2>As Seen In</h2>
                <img src={asSeenIn} alt="as-seen-in" />
            </div>

            <div className={style.static_child3}>
                <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/go-vegan.jpg" alt="image" /></div>
                <div>
                    <h2>Why Go Vegan</h2>
                    <p>Yes, everything we sell is vegan! We don't wish to offer anything that contains any animal-based ingredients or that has been tested on animals. Period. We're vegans ourselves, and we have never had any plans to sell anything that is not conforming to vegan standards. You may read an ingredient in a product that sounds like it is not vegan, but trust us, there are many different ways something can be derived or created, so even if something looks like it might not be vegan or you read that the ingredient is from an animal, you can be sure that the derivitive in the product we're carrying is not from an animal source. It is extremely rare that a company ever changes ingredients to make a vegan product non-vegan, but if this were to happen with something we were carrying, we would immediately discontinue the product and no longer offer it in our store.</p>
                </div>
            </div>

            <div className={style.static_child4}>
                <h2>Favorite Brands</h2>
                <div>
                    <div>
                        <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/good-planet-brand-logo.webp" alt="image" /></Link>
                    </div>

                    <div>
                        <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/daring-brand-logo.webp" alt="image" /></Link>
                    </div>

                    <div>
                        <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/violife-brand-logo.webp" alt="image" /></Link>
                    </div>

                    <div>
                        <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/field-roast-brand-logo.webp" alt="image" /></Link>
                    </div>

                    <div>
                        <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/gardein-brand-logo.webp" alt="image" /></Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;