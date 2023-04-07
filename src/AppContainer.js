import { Fragment } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
const AppContainer = () => {
    return (
        <Fragment>
            <Header />
            <Home />
        </Fragment>

    )
}
export default AppContainer