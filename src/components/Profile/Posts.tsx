import React from 'react';
import Post from "./Post";
import styles from '../../styles/Posts.module.css'
import {IPropsType} from "../../index";

const Posts:React.FC<IPropsType> = ({posts}) => {
    return (
        <section>
            <div className={styles.textarea}>
                <div><textarea /></div>
                <div><button>отправить</button></div>
            </div>
            <ul className={styles.posts}>
                {posts && posts.map(({message,id,likeCount}) => <Post key={id} message={message} likeCount={likeCount}/>)}
            </ul>
        </section>
    );
};

export default Posts;