import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";


let initialVal = {
    show_bg: false,
    show_notify_popup: false,
    show_order_popup: false,
    show_shopping_bag: false,
}

export let store = createStore(reducer, initialVal);