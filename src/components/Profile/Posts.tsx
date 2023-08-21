import React, {ChangeEvent, useRef} from 'react';
import {addPostMessage, PostType} from "../../store/state";
import {Button} from "../../StyledComponents/Button";
import styled from "styled-components";
import {Textarea} from "./Textarea";

const imgUrl = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'


interface PropsType {
    posts: PostType[]
    addPost: (newMessage: string) => void
    postMessage: string
    addPostMessage: (newMessage: string) => void
}

const Posts:React.FC<PropsType> = ({posts,addPost,postMessage,addPostMessage}) => {
    const addNewPost = () => {
        addPost(postMessage)
        postMessage = ''
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => addPostMessage(e.currentTarget.value)
    const postElement = posts.map(({message,id,likesCount}) => {
        return (
            <li key={id}>
                <PostHeader>
                    <img src={imgUrl} alt={'img'}/>
                    <h2>username</h2>
                </PostHeader>
                <PostDescr>{message}</PostDescr>
                <PostStatistic>
                    <span>&hearts;</span>
                    <span>{likesCount}</span>
                </PostStatistic>

            </li>
        )
    })
    return (
        <PostsWrapper>
            <TextareaAndButton>
                <textarea value={postMessage} onChange={handleChange}/>
                <Button onClick={addNewPost}>Отправить</Button>
            </TextareaAndButton>
            <ul>
                {postElement}
            </ul>
        </PostsWrapper>
    );
};

export default Posts;


const PostsWrapper = styled.section`
  li {
    margin: 20px 0;
  }
  textarea {
    display:block;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    width: 300px;
    height: 80px;
    overflow: auto;
    resize: none;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
    outline: none;
  }
`
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
  }
`

const PostDescr = styled.div`
  width: 500px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px;
`
const PostStatistic = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 18px;
    color: red;
  }
  span:last-child {
    font-size: 16px;
    color: black;
  }
`


const TextareaAndButton = styled.div`
  button {
    margin-top: 5px;
  }
`