import React from 'react';
import Post from "./Post";
import styles from '../../styles/Posts.module.css'
import {ProfilePageType} from "../../store/state";

const Posts:React.FC<ProfilePageType> = ({posts}) => {
    return (
        <section>
            <div className={styles.textarea}>
                <div><textarea /></div>
                <div><button>отправить</button></div>
            </div>
            <ul className={styles.posts}>
                {posts && posts.map(({message,id,likesCount}) => <Post key={id} message={message} likesCount={likesCount}/>)}
            </ul>
        </section>
    );
};

export default Posts;