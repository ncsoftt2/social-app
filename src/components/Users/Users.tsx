import {Box, Button, Grid} from '@mui/material';
import React, {FC, useEffect} from 'react'
import {followThunk, getUsersThunk, unfollowThunk, UserType} from "../../store/reducers/users-reducer/users-reducer";
import {useAppDispatch} from "../../store/hooks";
import {Link} from 'react-router-dom';
import {Paginator} from "./Paginator";

type PropsType = {
    users: UserType[]
    totalUsers: number
    currentPage: number
    pageSize: number
    followingProgress: number[]
    getUsers: () => void
    isFetching: boolean
}

export const userImg = 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'

export const Users: FC<PropsType> = (props) => {
    const {followingProgress, totalUsers, users, pageSize, getUsers, isFetching, currentPage} = props
    const dispatch = useAppDispatch();
    const toggleFollow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const toggleUnfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
    useEffect(() => {
        getUsers()
    }, [currentPage,totalUsers])
    const changePage = (pageNumber: number) => {
        dispatch(getUsersThunk(pageNumber, pageSize))
    }
    if (isFetching) return <div>loading...</div>
    return (
        <>
            <Grid container>
                {
                    users.map(({id, name, followed, photos}) => {
                        const disableBtn = followingProgress.some(fId => fId === id)
                        return <Grid item key={id} xs={3} sx={{textAlign: 'center'}}>
                            <Box sx={{borderRadius: '10px', padding: '10px'}}>
                                <Link to={`/profile/${id}`}>
                                    <img
                                        style={{height: '100px', borderRadius: '50%'}}
                                        src={photos.small !== null ? photos.small : userImg}
                                        alt={name ? name : ''}/>
                                    <Box sx={{margin: '0 auto 10px', width: '150px'}}>{name}</Box>
                                </Link>
                                {
                                    followed
                                        ? <Button disabled={disableBtn}
                                                  onClick={() => toggleUnfollow(id)}
                                                  variant="contained"
                                                  disableElevation
                                                  color="error"
                                                  sx={{color: 'white', fontSize: '10px', p: '5px 10px'}}
                                        >unfollow</Button>
                                        : <Button disabled={disableBtn}
                                                  disableElevation
                                                  color="success"
                                                  variant="contained"
                                                  sx={{color: 'white', fontSize: '10px', p: '5px 10px'}}
                                                  onClick={() => toggleFollow(id)}
                                        >follow</Button>
                                }
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
            <Paginator
                    totalUsers={totalUsers}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    changePage={(page: number) => changePage(page)}
            />
        </>
    )
}
