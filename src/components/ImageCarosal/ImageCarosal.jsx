import style from './ImageCarosal.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const ImageCarosal = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={style.main}>
            <h2>Shop By Category</h2>
            <Carousel responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                arrows={false}
            >
                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/chocolate-candy-sweets_e12f7658-713e-4baf-a511-1ac0ab89ab68.webp" alt="image" /></div>
                        <p>Chocolate, Candy & Sweets</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/pet-products.webp" alt="image" /></div>
                        <p>Pet Products</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/meat-and-seafood.webp" alt="image" /></div>
                        <p>Cheese, Eggs & Dairy</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/pantry-essentials.webp" alt="image" /></div>
                        <p>Pantry Essentials</p>
                    </div>
                </Link>
                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/snacks.webp" alt="image" /></div>
                        <p>Snacks</p>
                    </div>
                </Link>

                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/baked-goods.webp" alt="image" /></div>
                        <p>Baked Goods</p>
                    </div>
                </Link>

                <Link to="#">
                    <div className={style.item}>
                        <div><img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/meat-and-seafood.webp" alt="image" /></div>
                        <p>Meat & Seafood</p>
                    </div>
                </Link>

            </Carousel>
        </div>
    )
}

export default ImageCarosal;