import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  // rendering List : (creating props) Creating List of contatct so use Array, // rendering list here, use props here: pass property name & pass prop which i want to pass (to render list), passed contact array
  // then access props in that component as argument "props" in (ContactList)
  //we are setting the data in this array as statically
  // const contacts = [
  //   {
  //     id:"1",
  //     name: "Shubh",
  //     email: "shubh@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name: "Sim",
  //     email: "sim@gmail.com"
  //   }
  // ];
  console.log();
  // to use dyanically data , we hv to use react hook as UseState
  const [contacts, setContacts] = useState([]);

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />{" "}
      {/*rendering list here, use props here: pass property name & pass prop which i want to pass (to render list), passed contact array */}
    </div>
  );
};

export default App;
