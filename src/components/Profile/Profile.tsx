import React from 'react';
import {ActionType, PostsType, ProfilePageType} from '../../redux/state';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
            />
        </div>

    )
}

export default Profile;