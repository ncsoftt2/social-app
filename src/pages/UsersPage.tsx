import {Users} from "../components/users/Users"
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getUsersThunk} from "../store/reducers/users-reducer/users-reducer";

export const UsersPage = () => {
    const {
        users, totalUsers, currentPage, pageSize, isFetching, followingProgress,filter
    } = useAppSelector(({usersReducer}) => usersReducer)
    const dispatch = useAppDispatch()
    const getUsers = () => {
        dispatch(getUsersThunk(currentPage, pageSize,filter))
    }
    return <Users
        users={users}
        totalUsers={totalUsers}
        currentPage={currentPage}
        pageSize={pageSize}
        followingProgress={followingProgress}
        getUsers={getUsers}
        isFetching={isFetching}
        filter={filter}
    />
}
