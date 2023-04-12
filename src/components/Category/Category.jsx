import style from './Category.module.css';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div className={style.category}>
            <div><NavLink to="#">Chocolate, Candy & Sweets</NavLink></div>
            <div><NavLink to="#">Pet Products</NavLink></div>
            <div><NavLink to="#">Cheese, Eggs & Dairy</NavLink></div>
            <div><NavLink to="#">Pantry Essentials</NavLink></div>
            <div><NavLink to="#">Snacks</NavLink></div>
            <div><NavLink to="#">Baked Goods</NavLink></div>
            <div><NavLink to="#">Meat & Seafood</NavLink></div>
        </div>
    )
}

export default Category;