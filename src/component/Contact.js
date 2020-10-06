import React from 'react'
import './Contact.css'

const name = "Bobbie Russell";
const status = false;
function Contact(){
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/3.jpg" />
            <div className="name"> 
                {name} 
                <div className="status">
                    <span className="status-offline">
                    </span>
                    <span className="status-text">
                        {status ? "Online" : 'Offline'}
                    </span>
                </div>
            </div>
             
        </div>
    );
}



export default Contact;
    
