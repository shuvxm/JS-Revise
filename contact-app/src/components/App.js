import React from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

const App = () => {

  // rendering List : (creating props) Creating List of contatct so use Array, // rendering list here, use props here: pass property name & pass prop which i want to pass (to render list), passed contact array
  // then access props in that component as argument "props" in (ContactList)
  const contatcts = [
    {
      id:"1",
      name: "Shubh",
      email: "shubh@gmail.com"
    },
    {
      id:"2",
      name: "Sim",
      email: "sim@gmail.com"
    }
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contatcts={ contatcts} />   {/*rendering list here, use props here: pass property name & pass prop which i want to pass (to render list), passed contact array */}
      
    </div>
      
  
  )
}

export default App