import React from 'react';
import s from './chat.module.css'
import {ChatItemList} from "./chatItemList/ChatItemList";

export const Chat = () => {
    return (
        <div className={s.chat}>
            <ChatItemList/>
        </div>
    );
};

