import { useSelector } from "react-redux";
import CardContainer from "../../components/CardContainer/CardContainer";

const DisplayAllProduct = () => {
    let data = useSelector((data) => data.allCardData);

    return (
        <CardContainer data={data} cardDisplayCount={data.data.length} />
    )
}

export default DisplayAllProduct;