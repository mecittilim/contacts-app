import './style.css'

import {useState, useEffect} from 'react'
import List from './List/index'
import Form from './Form/index'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Mecit",
            phone_number:123123
        },
        {
            fullname:"Eda",
            phone_number:456456
        },
        {
            fullname:"Tilim",
            phone_number:212121
        }
]);

    

    useEffect(() => {
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts