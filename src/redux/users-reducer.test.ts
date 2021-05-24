import avaPost from "../assets/images/avaPost.png";
import usersReducer, {followAC, unFollowAC, UsersStateType} from "./users-reducer";

test('followed should be true', () => {
    const startState: UsersStateType = {
        users: [
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
        }]}
    const action = followAC(0)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(true)

})

test('followed should be false', () => {
    const startState: UsersStateType = {
        users: [
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
            }]}
    const action = unFollowAC(0)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(false)

})