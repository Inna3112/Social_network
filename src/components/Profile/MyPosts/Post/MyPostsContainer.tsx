import React from 'react';
import MyPosts from "../MyPosts";
import {StoreType} from "../../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";

type PropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<PropsType> = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (text:string) => {
         props.store.dispatch(updateNewPostTextAC(text))
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
                 updateNewPostText={onPostChange} addPost={addPost} />
    )
}

export default MyPostsContainer;