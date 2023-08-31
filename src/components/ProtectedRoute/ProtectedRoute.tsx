import {useAppSelector} from "../../store/hooks";
import {Navigate, useNavigate} from "react-router-dom";
import React, {ReactComponentElement} from "react";

type PropsType = {
    children: ReactComponentElement<any>;
};
export const ProtectedRoute:React.FC<PropsType> = ({ children }) => {
    const {data: {isAuth}} = useAppSelector(({authReducer}) => authReducer)
    return isAuth ? children : <Navigate to="/social-app/login" />;
}