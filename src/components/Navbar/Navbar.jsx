import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css'
import logo from './../../images/logo.png'
import { useEffect, useRef } from 'react';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import { showShoppingBag } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    let orderdList = JSON.parse(localStorage.getItem('__vegan_order')) || [];

    let compRef = useRef();
    let dispatch = useDispatch();
    let navigate = useNavigate();
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

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const profile = () => {
        window.scrollTo(0, 0);
        navigate('/user/profile');
    }

    const showShoppingBagHandler = () => {
        dispatch(showShoppingBag());
    }

    return (
        <div className={style.main} ref={compRef}>
            <div onClick={scrollToTop}><NavLink to="/"><img src={logo} alt="logo" /></NavLink></div>
            <div>
                <div onClick={scrollToTop}><NavLink to="/">Home</NavLink></div>
                <div onClick={scrollToTop}><NavLink to="/collections">Shop By Category</NavLink></div>
                <div onClick={scrollToTop}><NavLink to="/about-us">About Us</NavLink></div>
                <div onClick={scrollToTop}><NavLink to="/contact-us">Contact Us</NavLink></div>
                <div onClick={scrollToTop}><NavLink to="/rewards">Rewards</NavLink></div>
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Search products, brands, etc....' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
                <i class="fa-regular fa-user" onClick={profile}></i>
                <i class="fa-solid fa-cart-shopping" onClick={showShoppingBagHandler}>
                    {orderdList.length > 0 && <span className={style.shopping_bag_count}>{orderdList.length}</span>}
                </i>
            </div>
            {/* calling shapping bag */}

            {show_shopping_bag && <ShoppingBag />}
        </div>
    )
}

export default Navbar;