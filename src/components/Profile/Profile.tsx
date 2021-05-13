import React from 'react';
import {ActionType, PostsType, ProfilePageType, StoreType} from '../../redux/store';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type PropsType = {
    store: StoreType
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>

    )
}

export default Profile;