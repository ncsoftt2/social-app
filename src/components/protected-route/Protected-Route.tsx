import {useAppSelector} from "../../store/hooks";
import React, {ReactComponentElement} from "react";
import {Navigate} from "react-router-dom";

type PropsType = {
    children: ReactComponentElement<any>;
};
export const ProtectedRoute:React.FC<PropsType> = ({ children }) => {
    const {data: {isAuth}} = useAppSelector(({authReducer}) => authReducer)
    return isAuth ? children : <Navigate to="/social-app/login" />;
}