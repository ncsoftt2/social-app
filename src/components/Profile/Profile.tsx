import React from 'react';
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType} from "../../store/state";


const Profile:React.FC<ProfilePageType> = ({posts}) => {
    return (
        <section>
            <ProfileInfo />
            <Posts posts={posts}/>
        </section>
    )
}

export default Profile;
