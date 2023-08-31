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
import {Box, Button, Grid, ImageListItem} from "@mui/material";

const urlImg = 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'

const Users = () => {
    const {
        users, totalUsers, pageSize, currentPage, isFetching, followingProgress
    } = useAppSelector(({userReducer}) => userReducer)
    const dispatch = useAppDispatch();
    const toggleFollow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const toggleUnfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
    const getUsers = () => {
        dispatch(getUsersThunk(currentPage, pageSize))
    }
    useEffect(() => {
        getUsers()
    }, [currentPage])
    const changePage = (pageNumber: number) => {
        dispatch(getUsersThunk(pageNumber, pageSize))
    }
    const elements = users.map(({id, name, followed, status, photos}) => {
        const disableBtn = followingProgress.some(fId => fId === id)
        return (
            <Grid item key={id} xs={3} sx={{textAlign: 'center', p: 2}}>
                <ImageListItem key={id} sx={{width: '100px', height: '100px', margin: '0 auto'}}>
                    <img
                        src={photos.small !== null ? photos.small : urlImg}
                        alt={name ? name : ''}
                        loading="lazy"
                    />
                </ImageListItem>
                <NavLink to={`/social-app/profile/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Box>{name}</Box>
                </NavLink>
                {
                    followed
                        ? <Button disabled={disableBtn}
                                  onClick={() => toggleUnfollow(id)}
                                  variant="contained"
                                  disableElevation
                                  color="error"
                                  sx={{color:'white',fontSize:'10px',p:'5px 10px'}}
                        >unfollow</Button>
                        : <Button disabled={disableBtn}
                                  disableElevation
                                  color="success"
                                  variant="contained"
                                  sx={{color:'white',fontSize:'10px',p:'5px 10px'}}
                                  onClick={() => toggleFollow(id)}
                        >follow</Button>
                }
            </Grid>
        )
    })
    const pagesCount = Math.ceil(totalUsers / pageSize)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            {isFetching ? <Spinner/> : null}
            <Box>
                {pages.map(el => <span key={el} onClick={() => changePage(el)}>{el}</span>).slice(0, 50)}
            </Box>
            <Grid container sx={{mt:'10px'}}>
                {elements}
            </Grid>
        </>

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