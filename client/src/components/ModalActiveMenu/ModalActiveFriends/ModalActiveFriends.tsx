import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import classes from './ModalActiveFriends.module.css';
import avatar from '../../../img/avatar.jpg';
import { addContact, findAUser } from "../../../http/user_api";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import MyButton from "../../UI/button/MyButton";
import { createRoom } from "../../../http/roomApi";
import { useNavigate } from "react-router-dom";

const ModalActiveFriends = () => {
    const [chatSearch, setChatSearch] = useState('');
    const router = useNavigate()
    const {contacts, phoneNumber} = useTypedSelector(state => state.userReducer);
    const [optionalMenu, setOptionalMenu] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const [searchResult, setSearchResult] = useState({
        avatar: '',
        firstName: '',
        secondName: '',
        phoneNumber: ''
    })
    const findOne = async () => {
        await findAUser(chatSearch).then((data) => {
            setSearchResult({...searchResult, 
                avatar: data.avatar[0],
                firstName: data.firstName,
                secondName: data.secondName,
                phoneNumber: data.phoneNumber 
            })
        })
        setActiveSearch(true)
    }
    const addToContact = async () => {
        await addContact(phoneNumber, searchResult.phoneNumber).then(() => {
            alert('Контакт добавлен')
        })
    }
    const createChat = async (number: string) => {
        await createRoom(phoneNumber, number).then((data) => {
            router(`/chat/${data._id}`)
        })
    }
    return(
        <div className={classes.Chats}>
            <div className={classes.Chats_SearchBlock}>
                <div className={classes.Chats_Search}>
                    <MyInput
                    value={chatSearch}
                    placeholder='Search...'
                    onChange={(e) => setChatSearch(e.target.value)}
                    />
                    <button onClick={findOne}>sfesef</button>
                </div>
            </div>
            <div className={classes.Chats_ChatsBlock}>
                {activeSearch 
                ?   <div onMouseEnter={() => setOptionalMenu(true)} onMouseLeave={() => setOptionalMenu(false)} className={classes.Chats_ChatBlock}>
                        <div>
                        <div style={{display: 'flex'}}>
                            <div className={classes.Chats_ChatImg}>
                                <img className={classes.avatar} src={`http://localhost:4000/` + searchResult.avatar}/>
                            </div>
                            <div className={classes.Chats_ChatInfo}>
                                <h2>{searchResult.firstName}{searchResult.secondName}</h2>
                                <div>
                                    <span className={classes.Chats_ChatInfo_name}>{searchResult.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                        {optionalMenu && 
                        <div className={classes.optionalMenu}>
                            <MyButton onClick={addToContact}>Add</MyButton>
                            <MyButton onClick={() => console.log('2')}>Write</MyButton>
                        </div>
                        }
                        </div>
                    </div>
                : contacts?.length 
                ? contacts.map(contact => 
                    <div key={contact.userNumber} className={classes.Chats_ChatBlock}>
                        <div className={classes.Chats_ChatImg}>
                            <img className={classes.avatar} src={`http://localhost:4000/` + contact.avatar}/>
                        </div>
                        <div className={classes.Chats_ChatInfo}>
                            <h2>{contact.firstName}{contact.secondName}</h2>
                            <div>
                                <span className={classes.Chats_ChatInfo_name}>{contact.phoneNumber}</span>
                            </div>
                            <button onClick={() => createChat(contact.phoneNumber)}>Click</button>
                        </div>
                    </div>
                    ) 
                : <h1>Контакты отсутствуют</h1>
                }
            </div>
        </div>
    )
}

export default ModalActiveFriends;