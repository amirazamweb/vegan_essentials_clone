import style from './AlreadyAddedItemNotify.module.css';
import { closeItemAlreadyAddedNotify } from '../../redux/action';
import { useDispatch } from 'react-redux';

const AlreadyAddedItemNotify = () => {
    let dispatch = useDispatch();

    const close_popup_handler = () => {
        dispatch(closeItemAlreadyAddedNotify());
    }

    return (
        <div className={style.main}>
            <p><i class="fa-solid fa-bullhorn"></i></p>
            <p>Item already added to cart!</p>
            <div className={style.close_popup} onClick={close_popup_handler}><i class="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default AlreadyAddedItemNotify;