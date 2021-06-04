import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    addPost,
    PostsType,
    ProfilePageType,
    ProfileType, setUserProfile,
    updateNewPostText
} from '../../redux/profile-reducer';
import axios from 'axios';
import {RouteComponentProps, withRouter } from 'react-router-dom';


type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    setUserProfile: (profile: ProfileType) => void
}
type OwnProps ={}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {

            this.props.setUserProfile(response.data)
        })
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps, {
    addPost, updateNewPostText, setUserProfile,
})(WithUrlDataProfileContainer);