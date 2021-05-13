import React from 'react';
import {ActionType, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}
const DialogsContainer: React.FC<PropsType> = (props) => {
    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    const updateNewMessageText = (body: string) => {
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs dialogsPage={props.dialogsPage}
                    addMessage={addMessage}
                    updateNewMessageBody={updateNewMessageText}/>
}

export default DialogsContainer;