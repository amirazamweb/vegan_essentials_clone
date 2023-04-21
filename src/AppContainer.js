import { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import CollectionsWithId from "./pages/CollectionsWithId/CollectionsWithId";
import DisplayAllProduct from "./pages/DisplayAllProduct/DisplayAllProduct";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Rewards from "./pages/Rewards/Rewards";
import Cart from "./pages/Cart/Cart";
import User from "./pages/auth/User";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import BG from "./components/BG/BG";
import NotifyPopUp from "./components/NotifyPopUp/NotifyPopUp";
import OrderPopUp from "./components/OrderPopUp/OrderPopUp";
import AlreadyAddedItemNotify from "./components/AlreadyAddedItemNotify/AlreadyAddedItemNotify";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const AppContainer = () => {

    let { show_bg, show_notify_popup, show_order_popup, show_item_already_added_notify } = useSelector((data) => {
        return {
            show_bg: data.show_bg,
            show_notify_popup: data.show_notify_popup,
            show_order_popup: data.show_order_popup,
            show_item_already_added_notify: data.show_item_already_added_notify
        }
    })

    let appRef = useRef();

    let [bgHeight, setBgHeight] = useState(0);

    useEffect(() => {
        setBgHeight(appRef.current.offsetHeight);
    }, [show_bg])

    return (
        <div ref={appRef}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collections/:id" element={<CollectionsWithId />} />
                <Route path="/collection/:id" element={<DisplayAllProduct />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            {show_bg && <BG bgHeight={bgHeight} />}
            {show_notify_popup && <NotifyPopUp />}
            {show_order_popup && <OrderPopUp />}
            {show_item_already_added_notify && <AlreadyAddedItemNotify />}
        </div>
    )
}
export default AppContainer;