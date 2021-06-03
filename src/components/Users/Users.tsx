import React from 'react';
import {UsersType} from '../../redux/users-reducer';
import s from './Users.module.css'
import avaPost from './../../assets/images/avaPost.png'



type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
}

let Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
        return <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index}
                                 className={props.currentPage === p ? `${s.selectedPage} ${s.page}` : s.page}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {props.users.map(u => {
                const onClickFollowHandler = () => props.follow(u.id)
                const onClickUnFollowHandler = () => props.unFollow(u.id)
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

export default Users