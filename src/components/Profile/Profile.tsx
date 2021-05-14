import React from 'react';
import {ActionType, ProfilePageType, StoreType} from '../../redux/store';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type PropsType = {
    store: StoreType
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void

}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>

    )
}

export default Profile;