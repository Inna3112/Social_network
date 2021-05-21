import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import avaPost from "./../../assets/images/avaPost.png"


type PropsType = {
    users: Array<UsersType>
}

let Users = (props: PropsType) => {
    return <div>
        {
          props.users.map(u => <div key={u.id} className={s.user}>
              <div className={s.followingBlock}>
                  <div>
                      <img src={avaPost} className={s.img}/>
                  </div>
                  <div>
                      <button className={s.button}>Follow</button>
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

          </div>)
        }
    </div>
}

export default Users