import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";
import {useAppSelector} from "../../store/hooks";

export const Sidebar = () => {
    const {data} = useAppSelector(({authReducer}) => authReducer)
    return (
        <>
            <Box sx={{mb:'6px'}}>
                <NavLink to={`/social-app/profile/${data.id}`}>Профиль</NavLink>
            </Box>
            <Box>
                <NavLink to='/social-app/users'>Пользователи</NavLink>
            </Box>
        </>
    )
}