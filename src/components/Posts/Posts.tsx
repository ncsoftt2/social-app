import React from 'react';
import Post from "./Post";

import styles from '../../styles/Posts.module.css';

const Posts = () => {
    return (
        <section>

            <ul className={styles.posts}>
                <Post message={'first post'} likeCount={0}/>
                <Post message={'second post'} likeCount={5}/>
                <Post message={'third post'} likeCount={2}/>
                <Post message={'fourth post'} likeCount={34}/>
            </ul>
        </section>
    );
};

export default Posts;