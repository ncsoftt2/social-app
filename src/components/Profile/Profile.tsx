import React from 'react';
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
import {IPropsType} from "../../index";

const Profile:React.FC<IPropsType> = ({posts}) => {
    console.log(posts)
    return (
        <section>
            <ProfileInfo />
            <Posts posts={posts}/>
        </section>
    )
}

export default Profile;
