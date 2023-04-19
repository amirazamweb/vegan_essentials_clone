import { useSelector } from "react-redux";

const BG = ({ bgHeight }) => {
    let { show_order_popup, show_notify_popup, show_item_already_added_notify, show_checkout_popup } = useSelector((data) => {
        return {
            show_order_popup: data.show_order_popup,
            show_notify_popup: data.show_notify_popup,
            show_item_already_added_notify: data.show_item_already_added_notify,
            show_checkout_popup: data.show_checkout_popup
        }
    });
    let compStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: bgHeight,
        backgroundColor: "#000000",
        zIndex: show_notify_popup || show_order_popup || show_item_already_added_notify || show_checkout_popup ? 2 : 1,
        opacity: 0.8
    }
    return (
        <div style={compStyle}></div>
    )
}

export default BG;