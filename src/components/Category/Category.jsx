import style from './Category.module.css';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div className={style.category}>
            <div><NavLink to="/collections/chocolate-candy-sweets">Chocolate, Candy & Sweets</NavLink></div>
            <div><NavLink to="/collections/companion-animal-products">Pet Products</NavLink></div>
            <div><NavLink to="/collections/cheese-eggs-dairy">Cheese, Eggs & Dairy</NavLink></div>
            <div><NavLink to="/collections/pantry-essentials">Pantry Essentials</NavLink></div>
            <div><NavLink to="/collections/snacks">Snacks</NavLink></div>
            <div><NavLink to="/collections/baked-goods">Baked Goods</NavLink></div>
            <div><NavLink to="/collections/meat-seafood">Meat & Seafood</NavLink></div>
        </div>
    )
}

export default Category;