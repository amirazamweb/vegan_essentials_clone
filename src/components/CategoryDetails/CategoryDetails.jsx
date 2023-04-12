import style from './CategoryDetails.module.css';

const CategoryDetails = ({ heading, desc, img }) => {
    return (
        <div className={style.main}>
            <div>
                <h2>{heading}</h2>
                <p>{desc}</p>
            </div>
            <div>
                <img src={img} alt="image" />
            </div>
        </div>
    )
}

export default CategoryDetails;