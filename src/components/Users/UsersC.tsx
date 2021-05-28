import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import avaPost from "./../../assets/images/avaPost.png"
import axios from "axios";


type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

class Users extends React.Component<PropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return <div>
            { this.props.users.map(u => {
                    const onClickFollowHandler = () => this.props.follow(u.id)
                    const onClickUnFollowHandler = () => this.props.unFollow(u.id)
                    return <div key={u.id} className={s.user}>
                        <div className={s.followingBlock}>
                            <div>
                                <img src={u.photos.small ? u.photos.small : avaPost}
                                     className={s.img}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={onClickUnFollowHandler} className={s.button}>Unfollow</button>
                                    : <button onClick={onClickFollowHandler} className={s.button}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.content}>
                            <div className={s.nameAndStatus}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.country}>{'u.location.country'}</div>
                                <div className={s.city}>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default Users