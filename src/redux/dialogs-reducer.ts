import {ActionType, DialogsPageType, MessagesType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
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