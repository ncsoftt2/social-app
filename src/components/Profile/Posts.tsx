import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Button} from "../../StyledComponents/Button";
import styled from "styled-components";
import {Textarea} from "./Textarea";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addPostAC, updatePostMessageAC} from "../../store/profile-reducer/profile-reducer";
import {Box, Container, Grid, ImageListItem, List, ListItem, TextareaAutosize, TextField} from "@mui/material";

const imgUrl = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'

const Posts = () => {
    const {posts, postMessage} = useAppSelector(({profileReducer}) => profileReducer)
    const dispatch = useAppDispatch()
    const addNewPost = () => {
        if (postMessage.trim().length !== 0) {
            dispatch(addPostAC(postMessage))
        }
    }
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updatePostMessageAC(e.currentTarget.value))
    }
    const postElement = posts.map(({message, id, likesCount}) => {
        return (
            <ListItem key={id} disablePadding sx={{display: 'block', width: '100%'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <ImageListItem sx={{width: '50px', height: '50px', borderRadius: '50'}}>
                        <img
                            src={imgUrl}
                            alt={'img'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <h2>username</h2>
                </Box>
                <Box>{message}</Box>
                <Box>
                    <span>&hearts;</span>
                    <span>{likesCount}</span>
                </Box>

            </ListItem>
        )
    })
    return (
        <Container>
            <Box sx={{m:3}}>
                <TextField
                    id="outlined-multiline-flexible"
                    sx={{width: "600px"}}
                    value={postMessage}
                    onChange={handleChange}
                    multiline
                />
                <Button onClick={addNewPost}>Отправить</Button>
            </Box>

            <List sx={{p: 0}}>
                {postElement}
            </List>
        </Container>
    );
};

export default Posts;
