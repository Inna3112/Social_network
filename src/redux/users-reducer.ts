

export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    },
    status: string | null,
    followed: boolean
    location: LocationType
}
export type UsersStateType = {
    users: Array<UsersType>
}
export type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

let initialState: UsersStateType = {
    users: []
}

const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}
export let followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export let unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export let setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users}) as const


export default usersReducer