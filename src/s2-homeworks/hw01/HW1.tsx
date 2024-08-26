import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import lebron from './LeBron_James.jpg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserMessageType
    message: MessageDoubleType
}

export type UserMessageType = {
    avatar: string
    name: string
}

export type MessageDoubleType = {
    text: string
    time: string
}

// Функция для получения текущего времени в формате HH:MM
const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hi, how was yesterday\'s match against Boston Celtics?', // можно менять
        time: getCurrentTime(), // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: lebron, // можно менять
        name: 'Lebron James', // можно менять
    },
    message: {
        text: 'Hi, Boston was on a roll, both offensively and defensively, but I still scored a double-double.', // можно менять
        time: getCurrentTime(), // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework № 1</div>
            <div className={s2.line}></div> {/* Первая линия */}
            <div className={s2.hw1}>
                {/*проверка отображения (не менять)*/}
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
            <div className={s2.line}></div> {/* Вторая линия */}
        </div>
    )
}

export default HW1
