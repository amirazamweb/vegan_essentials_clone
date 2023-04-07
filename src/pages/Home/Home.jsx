import ImageSliderComp from "../../components/ImageSliderComp/ImageSliderComp";
import style from './Home.module.css';
import { Link } from "react-router-dom";
import img1 from './Images/img1.PNG';
import img2 from './Images/img2.PNG';
import img3 from './Images/img3.PNG';
import ImageCarosal from "../../components/ImageCarosal/ImageCarosal";
import CardContainer from "../../components/CardContainer/CardContainer";
import veganEasterGifts from './../../data/vegan_easter_gifts.json'

const Home = () => {
    return (
        <>
            <ImageSliderComp />
            <div style={
                {
                    display: 'flex',
                    padding: '0 4rem',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '-1rem',
                }
            }>
                <div><Link to="#"><img src={img1} alt="image" /></Link></div>
                <div><Link to="#"><img src={img2} alt="image" /></Link></div>
                <div><Link to="#"><img src={img3} alt="image" /></Link></div>
            </div>

            <ImageCarosal />

            <CardContainer data={veganEasterGifts} />

        </>
    )
}

export default Home;