import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log(isLoggedIn)
    return isLoggedIn ? children : <Navigate to='/login'/>
}