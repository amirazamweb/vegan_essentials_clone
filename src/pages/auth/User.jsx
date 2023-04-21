import { useParams } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";

const User = () => {

    let params = useParams();

    return (
        <>
            {params.id === 'login' && <Login />}
            {params.id === 'signup' && <Signup />}
            {params.id === 'profile' && <Profile />}
        </>
    )
}

export default User;