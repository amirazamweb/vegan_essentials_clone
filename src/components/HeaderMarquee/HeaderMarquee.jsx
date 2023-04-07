import style from './HeaderMarquee.module.css';

const HeaderMarquee = () => {
    return (
        <div className={style.main}>
            <div><i class="fa-solid fa-phone-volume"></i> &nbsp; 833-407-0747</div>
            <div><marquee behavior="" direction="">Vegan Burgers the Whole Family will Love</marquee></div>
            <div>Best Online Vegan Store/Grocery - 2005-2023</div>
        </div>
    )
}

export default HeaderMarquee