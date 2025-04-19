import React, { useState, useEffect } from 'react'; 
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './assets/Contacts.json'




const App = () => { 

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('saved-contact');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contact', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (  
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox  search={search} setSearch={setSearch}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>  
  );  
};  

export default App; 
