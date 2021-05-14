import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {ActionType, RootStateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: StoreType,
    state: RootStateType
    dispatch: (action: ActionType) => void
}

function App(props: PropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <DialogsContainer
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/profile' render={() => <Profile
                    store={props.store}
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    )
}

export default App;
