import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    followAC, followThunk,
    getUsersThunk,
    toggleIsFollowingProgress, unfollowThunk
} from "../../store/user-reducer/userReducer";
import {useEffect} from "react";
import {Spinner} from "../Spinner/Spinner";
import {NavLink} from "react-router-dom";

const urlImg = 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'

const Users = () => {
    const {users, totalUsers, pageSize, currentPage, isFetching,followingProgress
    } = useAppSelector(({userReducer}) => userReducer)
    const dispatch = useAppDispatch();
    const toggleFollow = (userId: number) => {
        // @ts-ignore
        dispatch(followThunk(userId))
    }
    const toggleUnfollow = (userId: number) => {
        // @ts-ignore
        dispatch(unfollowThunk(userId))
    }
    const getUsers = () => {
        // @ts-ignore
        dispatch(getUsersThunk(currentPage,pageSize))
    }
    useEffect(() => {
        getUsers()
    }, [currentPage])
    const changePage = (pageNumber: number) => {
        // @ts-ignore
        dispatch(getUsersThunk(pageNumber,pageSize))
    }
    const elements = users.map(({id, name, followed, status, photos}) => {
        const disableBtn = followingProgress.some(fId => fId === id)
        return (
            <UserItem key={id}>
                <div>
                    <img src={photos.small !== null ? photos.small : urlImg} alt={''}/>
                </div>
                <NavLink to={`/social-app/profile/${id}`}>
                    <div>{name}</div>
                </NavLink>
                <span>{status}</span>
                {
                    followed
                        ? <button disabled={disableBtn}
                                  onClick={() => toggleUnfollow(id)}>unfollow</button>
                        : <button disabled={disableBtn}
                                  onClick={() => toggleFollow(id)}>follow</button>
                }
            </UserItem>
        )
    })
    const pagesCount = Math.ceil(totalUsers / pageSize)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {isFetching ? <Spinner/> : null}
            <div>
                {pages.map(el => <span key={el} onClick={() => changePage(el)}>{el}</span>).slice(0, 50)}
            </div>
            <UsersWrapper>
                {elements}
            </UsersWrapper>
        </div>

    )
}
export default Users

const UsersWrapper = styled.div`
  width: 975px;
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
`

const UserItem = styled.div`
  width: 230px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  height: 180px;
  text-align: center;

  //button {
  //  margin-top: 7px;
  //  border: none;
  //  border-radius: 5px;
  //  color: white;
  //  background-color: #66a209;
  //  padding: 9px 20px;
  //}

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`