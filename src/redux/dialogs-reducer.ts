import {ActionType, DialogsPageType, MessagesType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ruslan'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I am happy'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
                id: 4,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state;
        default:  return state
    }
}
export let addMessageAC = () => ({type: ADD_MESSAGE}) as const

export let updateNewMessageBodyAC = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body}) as const

export default dialogsReducer