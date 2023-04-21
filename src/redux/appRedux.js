import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";


let initialVal = {
    show_bg: false,
    show_notify_popup: false,
    show_order_popup: false,
    show_shopping_bag: false,
    show_item_already_added_notify: false,
    show_checkout_popup: false,
    detect_count: 0,
    userDetails: {}
}

export let store = createStore(reducer, initialVal);