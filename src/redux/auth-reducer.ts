
export type AuthStateType = {
    userId: number | undefined
    email: string
    login: string
    isAuth: boolean
}
export type ActionType = ReturnType<typeof setAuthUserData>

let initialState: AuthStateType = {
    userId: undefined,
    email: '',
    login: '',
    isAuth: false,
}

const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            // debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export let setAuthUserData= (userId: number | undefined, email: string, login: string) => ({
    type: 'SET-AUTH-USER-DATA',
    data: {
        userId: userId,
        email: email,
        login: login,
    },
}) as const


export default authReducer