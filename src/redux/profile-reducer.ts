import {ActionType, PostsType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default: return state
    }
}

export let addPostAC = () => ({type: ADD_POST}) as const

export let updateNewPostTextAC = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const

export default profileReducer