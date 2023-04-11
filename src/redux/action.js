
export const showNotifyPoup = (data) => {
    return {
        type: 'show_notify_popup',
        payload: data
    }
}

export const closeNotifyPoup = () => {
    return {
        type: 'close_notify_popup'
    }
}

export const showOrderPoup = (data) => {
    return {
        type: 'show_order_popup',
        payload: data
    }
}

export const closeOrderPoup = () => {
    return {
        type: 'close_order_popup'
    }
}

export const showShoppingBag = () => {
    return {
        type: 'show_shopping_bag'
    }
}

export const closeShoppingBag = () => {
    return {
        type: 'close_shopping_bag'
    }
}

export const detectCount = () => {
    return {
        type: 'detect_count'
    }
}

export const showItemAlreadyAddedNotify = () => {
    return {
        type: 'show_item_already_added_notify'
    }
}

export const closeItemAlreadyAddedNotify = () => {
    return {
        type: 'close_item_already_added_notify'
    }
}