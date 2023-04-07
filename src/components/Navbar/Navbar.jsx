import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import logo from './../../images/logo.png'
import { useEffect, useRef } from 'react';

const Navbar = () => {

    let compRef = useRef();

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
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Navbar;