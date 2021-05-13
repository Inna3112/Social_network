import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageBody: (body:string) => void
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
}
const Dialogs: React.FC<PropsType> = (props) => {
    const addMessage = () => {
        props.addMessage()
    }
    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.dialogsPage.newMessageBody}
                              onChange={updateNewMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;