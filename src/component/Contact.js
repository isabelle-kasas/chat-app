import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types'

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online : props.online
        }
    }
    render(){
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div className="name">
                    <span> {this.props.name} </span>
                    <div className="status"
                        onClick={event =>{
                            const newStatus =  !this.state.online;
                            this.setState({ online : newStatus});
                            }
                        }>
                        <span className={this.state.online ? 'status-online' : 'status-offline' }></span>
                        <span className={this.props.text}>
                            {this.state.online ? 'Online' : 'Offline'}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


// Contact.prototype = {
//     name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     online: PropTypes.bool.isRequired
// }

export default Contact;
    
