import style from './CategoryWithImg.module.css';
import { Link } from 'react-router-dom';

const CategoryWithImg = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.category_with_img}>
            <Link to="/collections/chocolate-candy-sweets">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/chocolate-candy-sweets_e12f7658-713e-4baf-a511-1ac0ab89ab68.webp" alt="imge" />
                    <p>Chocolate, Candy & Sweets</p>
                </div>
            </Link>
            <Link to="/collections/companion-animal-products">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/pet-products.webp" alt="imge" />
                    <p>Pet Products</p>
                </div>
            </Link>
            <Link to="/collections/cheese-eggs-dairy">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/meat-and-seafood.webp" alt="imge" />
                    <p>Cheese, Eggs & Dairy</p>
                </div>
            </Link>
            <Link to="/collections/pantry-essentials">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/pantry-essentials.webp" alt="imge" />
                    <p>Pantry Essentials</p>
                </div>
            </Link>
            <Link to="/collections/snacks">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/snacks.webp" alt="imge" />
                    <p>Snacks</p>
                </div>
            </Link>
            <Link to="/collections/baked-goods">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/baked-goods.webp" alt="imge" />
                    <p>Baked Goods</p>
                </div>
            </Link>
            <Link to="/collections/meat-seafood">
                <div onClick={scrollToTop}>
                    <img src="https://cdn.shopify.com/s/files/1/0612/9260/9676/files/meat-and-seafood.webp" alt="imge" />
                    <p>Meat & Seafood</p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryWithImg;