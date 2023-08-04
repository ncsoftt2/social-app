import React from 'react';
import Post from "./Post";
import styles from '../../styles/Posts.module.css'
import {ProfilePageType} from "../../store/state";
import {Button} from "../../StyledComponents/Button";

const Posts:React.FC<ProfilePageType> = ({posts}) => {
    return (
        <section>
            <div className={styles.textarea}>
                <div><textarea /></div>
                <Button btnType={'primary'} borderRadius={'5px'} fontSize={'16px'}>Отправить</Button>
            </div>
            <ul className={styles.posts}>
                {posts && posts.map(({message,id,likesCount}) => <Post key={id} message={message} likesCount={likesCount}/>)}
            </ul>
        </section>
    );
};

export default Posts;