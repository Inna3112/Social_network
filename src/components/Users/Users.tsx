import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import avaPost from "./../../assets/images/avaPost.png"


type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: PropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: avaPost,
                followed: true,
                name: 'Anna',
                status: 'I am happy',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: avaPost,
                followed: false,
                name: 'Inna',
                status: 'I am sed',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: avaPost,
                followed: true,
                name: 'Max',
                status: 'I am  too happy',
                location: {city: 'Kyiv', country: 'Ukraine'}
            }])
    }
    return <div>
        {
            props.users.map(u => {
                const onClickFollowHandler = () => props.follow(u.id)
                const onClickUnFollowHandler = () => props.unFollow(u.id)
                return <div key={u.id} className={s.user}>
                    <div className={s.followingBlock}>
                        <div>
                            <img src={u.photoUrl} className={s.img}/>
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
                            <div className={s.country}>{u.location.country}</div>
                            <div className={s.city}>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}

export default Users