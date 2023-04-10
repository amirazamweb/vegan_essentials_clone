
export let reducer = (val, action) => {

    if (action.type === 'show_notify_popup') {
        return { ...val, show_notify_popup: true, show_bg: true, notify_data: action.payload }
    }

    if (action.type === 'close_notify_popup') {
        return { ...val, show_notify_popup: false, show_bg: false, notify_data: "" }
    }

    if (action.type === 'show_order_popup') {
        return { ...val, show_bg: true, show_order_popup: true, order_popup_data: action.payload }
    }

    if (action.type === 'close_order_popup') {
        return { ...val, show_order_popup: false, show_bg: false, order_popup_data: {} }
    }

    if (action.type === 'show_shopping_bag') {
        return { ...val, show_bg: true, show_shopping_bag: true }
    }

    if (action.type === 'close_shopping_bag') {
        return { ...val, show_bg: false, show_shopping_bag: false }
    }

    return val;
} 