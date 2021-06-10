import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import axios from "axios";
import Header from "./Header";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    userId: number | undefined
    email: string
    login: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number | undefined, email: string, login: string) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a585aace-28a5-48d9-b1ef-e81ab36cf848"
    }
})


class AuthContainer extends React.Component<PropsType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        //     withCredentials: true,
        //     headers:{
        //         "API-KEY": "a585aace-28a5-48d9-b1ef-e81ab36cf848"
        //     }
        // })
        const me = {
            getMe () {
                return instance.get('auth/me')
            }
        }
            me.getMe().then(response => {
            debugger
                if(response.data.resultCode === 0){
                    let {id, email, login}  = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
        })
    }

    render() {
        return <>
            {/*{this.props.isFetching ? <Preloader /> : null}*/}
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): AuthStateType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    setAuthUserData
})(AuthContainer)

