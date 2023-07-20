import React from 'react';

import styles from './../../styles/Post.module.css';

const imgUrl = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'

interface PropsType {
    message?: string
    likeCount: number
}

const Post:React.FC<PropsType> = ({message,likeCount}) => {
    return (
        <li className={styles.post}>
           <div>
               <div className={styles.post_header}>
                   <div className={styles.post_avatar}>
                       <img src={imgUrl} alt={'img'}/>
                   </div>
                   <div>username</div>
               </div>
               <div className={styles.post_descr}>{message}</div>
               <div className={styles.post_info}>
                   <div className={styles.post_like}>&hearts;</div>
                   <div>{likeCount}</div>
               </div>
           </div>
        </li>
    );
};

export default Post;