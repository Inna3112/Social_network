import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersStateType, UsersType} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UsersType>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow:(userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
}
type OwnPropsType = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType): UsersStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users))
    }
}


const UsersContainer = connect<MapStatePropsType,MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer