import style from './ImageSliderComp.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';

const ImageSliderComp = () => {
    let img1 = 'https://cdn.shopify.com/s/files/1/0612/9260/9676/files/vegan-easter-gifts-d.webp';
    let img2 = 'https://cdn.shopify.com/s/files/1/0612/9260/9676/files/minor-figures-oat-milk-desktop.webp';
    let img3 = 'https://cdn.shopify.com/s/files/1/0612/9260/9676/files/vgb-free-pepperoni-d.webp';
    let img4 = 'https://cdn.shopify.com/s/files/1/0612/9260/9676/files/nowadays-plant-based-nuggets-d.webp';

    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 }
    ]
    return (
        <div className={style.slides}>
            <SimpleImageSlider
                width={'90%'}
                height={'50vh'}
                images={images}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
                slideDuration={3}
            />
        </div>
    )
}

export default ImageSliderComp;