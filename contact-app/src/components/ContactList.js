import React from "react";

// then access props in that component as argument "props" here in (ContactList)
const ContactList = (props) =>{
    console.log(props);
    return (
        <div className="ui celled list">
            Contact List
        </div>
    );
}

export default ContactList;