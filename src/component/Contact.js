import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types'


function Contact(props){
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div className="name"> 
                <span> {props.name} </span>
                <div className="status">
                    <span className={props.status}>
                    </span>
                    <span className={props.text}>
                        {props.online ? "Online" : 'Offline'}
                    </span>
                </div>
            </div>
             
        </div>
    );
}

Contact.prototype = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default Contact;
    
