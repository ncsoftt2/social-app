import React from 'react';
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
import {addPost, addPostMessage, PostType, ProfilePageType} from "../../store/state";

interface PropsType {
    posts: PostType[]
    addPost: (newMessage: string) => void
    postMessage: string
    addPostMessage: (postMessage: string) => void
}

const Profile: React.FC<PropsType> = ({posts,addPost,postMessage,addPostMessage}) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts
                posts={posts}
                addPost={addPost}
                postMessage={postMessage}
                addPostMessage={addPostMessage}
            />
        </div>
    )
}

export default Profile;
