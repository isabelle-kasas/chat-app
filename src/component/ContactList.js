import React from 'react'
import Contact from './Contact';

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false,
        status: 'status-offline',
        text: 'status-text'
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true,
        status: 'status-online',
        text: 'status-text'
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true,
        status: 'status-online',
        text: 'status-text'
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false,
        status: 'status-offline',
        text: 'status-text'
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true,
        status: 'status-online',
        text: 'status-text'
    }
];

const ContactList = () => (
    <div>
        {users.map(contact => (
            <Contact key={contact.name} name={contact.name} avatar={contact.avatar} status={contact.status} text={contact.text} online={contact.online} />
        ))} 
    </div>
);


export default ContactList;

