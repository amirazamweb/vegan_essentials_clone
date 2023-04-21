import { useDispatch, useSelector } from 'react-redux';
import style from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../../redux/action';
import icon from './user_icon.png';

const Profile = () => {

    let orders = JSON.parse(localStorage.getItem('hs$1_gga78!')) || [];

    let userDetails = useSelector((data) => data.userDetails);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const login = () => {
        window.scrollTo(0, 0);
        navigate('/user/login')
    }

    const logout = () => {
        dispatch(removeUser());
        navigate('/user/login');
    }

    return (
        !userDetails.fullName ?
            <h2 className={style.notlogin}>You are not login. Kindly <span onClick={login}>login</span> to see your profile.</h2> :
            <div className={style.login}>
                <div>
                    <table>
                        <tr>
                            <th>Order Id</th>
                            <th>Total order Count</th>
                            <th>Total Order Amount</th>
                        </tr>
                        {/* <tr>
                            <td>123</td>
                            <td>1231</td>
                            <td>12366</td>
                        </tr> */}
                        {orders.map((e) => {
                            return <tr>
                                <td>{e.orderId}</td>
                                <td>{e.itemCount}</td>
                                <td>${e.totalAmount}</td>
                            </tr>
                        })}
                    </table>
                </div>
                <div>
                    <img src={icon} alt="icon" />
                    <h3>{userDetails.fullName}</h3>
                    <h4>{userDetails.email}</h4>
                    <button onClick={logout}>logout</button>
                </div>
            </div>
    )
}

export default Profile;