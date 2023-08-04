import React from 'react';
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType} from "../../store/state";
import {SectionWrapper} from "../../StyledComponents/SectionWrapper";


const Profile:React.FC<ProfilePageType> = ({posts}) => {
    return (
        <SectionWrapper display={'block'}>
            <ProfileInfo />
            <Posts posts={posts}/>
        </SectionWrapper>
    )
}

export default Profile;
