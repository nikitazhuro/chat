import React, { FC, useState } from "react";
import classes from '../styles/ChatWindow.module.css'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import avatar from '../img/avatar.jpg'

const ChatWindow:FC = () => {
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([
        {message: 'Hello', name: 'Nikita'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
        {message: 'Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.', name: 'Tanya'},
    ])
    const sendAMessage = () => {
        setText('')
    }
    return (
        <div className={classes.ChatWindow}>
            <div className={classes.ChatWindow_ContentBlock}>
                <div className={classes.ChatWindow_Nav}>
                    <div>
                        
                    </div>
                </div>
                <div className={classes.ChatWindow_ChatBlock}>
                    <div className={classes.ChatWindow_Messages}>
                        <div className={classes.ChatWindow_MessagesWrapper}>
                            <div className={classes.ChatWindow_MessageList}>
                                {messageList.map(elem => 
                                <div className={classes.ChatWindow_MessageList_Content}>
                                    <div className={classes.ChatWindow_MessageList_avatarBlock}>
                                        <img className={classes.avatar} src={avatar} />
                                    </div>
                                    <div className={classes.ChatWindow_MessageBlock}>
                                        <div className={classes.ChatWindow_MessageBlock_title}>
                                            <h2 
                                            style={{color: `rgb(${Math.floor(Math.random()* 200)},${Math.floor(Math.random()* 200)},${Math.floor(Math.random()* 200)})`}}>{elem.name}</h2>
                                        </div>
                                        <div className={classes.ChatWindow_MessageBlock_text}>
                                            <p>{elem.message}</p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className={classes.ChatWindow_textareaBlock}>
                        <div className={classes.ChatWindow_textareaWrapper}>
                            <div className={classes.ChatWindow_textarea_input}>
                                <MyInput
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Put a message"/>     
                            </div>
                            <div className={classes.ChatWindow_textarea_button}>
                                <MyButton onClick={sendAMessage}><span>hi</span></MyButton>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ChatWindow