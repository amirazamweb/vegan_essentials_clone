import { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import BG from "./components/BG/BG";
import NotifyPopUp from "./components/NotifyPopUp/NotifyPopUp";
import OrderPopUp from "./components/OrderPopUp/OrderPopUp";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const AppContainer = () => {

    let { show_bg, show_notify_popup, show_order_popup } = useSelector((data) => {
        return {
            show_bg: data.show_bg,
            show_notify_popup: data.show_notify_popup,
            show_order_popup: data.show_order_popup,
        }
    })

    let appRef = useRef();

    let [bgHeight, setBgHeight] = useState(0);

    useEffect(() => {
        setBgHeight(appRef.current.offsetHeight);
    }, [bgHeight])

    return (
        <div ref={appRef}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            {show_bg && <BG bgHeight={bgHeight} />}
            {show_notify_popup && <NotifyPopUp />}
            {show_order_popup && <OrderPopUp />}
        </div>
    )
}
export default AppContainer