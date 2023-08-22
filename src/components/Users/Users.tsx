import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    followAC,
    getUsersAC,
    setCurrentPageAC,
    setTotalUsersAC,
    unfollowAC
} from "../../store/user-reducer/userReducer";
import {useEffect} from "react";
import axios from "axios";


const urlImg = 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'

const Users = () => {
    const {users, totalUsers, pageSize,currentPage} = useAppSelector(({userReducer}) => userReducer)
    const dispatch = useAppDispatch();
    const toggleFollow = (userId: string) => {
        dispatch(followAC(userId))
    }
    const toggleUnfollow = (userId: string) => {
        dispatch(unfollowAC(userId))
    }
    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                dispatch(getUsersAC(res.data.items))
                dispatch(setTotalUsersAC(res.data.totalCount))
            })
    }
    useEffect(() => {
        getUsers()
    }, [currentPage])

    const changePage = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(res => dispatch(getUsersAC(res.data.items)))
    }
    const elements = users.map(({id, name, followed, status, photos}) => {
        return (
            <UserItem key={id}>
                <div>
                    <img src={photos.small !== null ? photos.small : urlImg} alt={''}/>
                </div>
                <span>{status}</span>
                <div>{name}</div>
                {
                    followed
                        ? <button onClick={() => toggleFollow(id)}>follow</button>
                        : <button onClick={() => toggleUnfollow(id)}>unfollow</button>
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
            <div>
                {pages.map(el => <span key={el} onClick={() => changePage(el)}>{el}</span>).slice(0,50)}
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
  border: 2px solid #8d2222;
  display: flex;
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

  button {
    margin-top: 7px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #66a209;
    padding: 9px 20px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`