import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import logo from './../../images/logo.png'
import { useEffect, useRef } from 'react';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import { showShoppingBag } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    let compRef = useRef();
    let dispatch = useDispatch();
    let show_shopping_bag = useSelector((data) => data.show_shopping_bag);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 33) {
                compRef.current.classList.add(style.scroll);
            }

            else {
                compRef.current.classList.remove(style.scroll);
            }
        })
    })

    const scrollTop = () => {
        dispatch(showShoppingBag());
    }

    return (
        <div className={style.main} ref={compRef}>
            <div><NavLink to="/"><img src={logo} alt="logo" /></NavLink></div>
            <div>
                <div><NavLink to="#">Home</NavLink></div>
                <div><NavLink to="#">Shop By Category</NavLink></div>
                <div><NavLink to="#">About Us</NavLink></div>
                <div><NavLink to="#">Contact Us</NavLink></div>
                <div><NavLink to="#">Rewards</NavLink></div>
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Search products, brands, etc....' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
                <i class="fa-regular fa-user"></i>
                <i class="fa-solid fa-cart-shopping" onClick={scrollTop}></i>
            </div>
            {/* calling shapping bag */}

            {show_shopping_bag && <ShoppingBag />}
        </div>
    )
}

export default Navbar;