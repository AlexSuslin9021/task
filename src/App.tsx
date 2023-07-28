import React from 'react';
import s from './app.module.css'
import {Flex} from "./flex/flex";
import {Header} from "./chat/header/header";
import {Chat} from "./chat/chat";


function App() {

    return (
        <div className={s.app1}>
            <div className={s.app}>
                <Header/>
                <Chat/>
            </div>
        </div>
    );
}

export default App;


