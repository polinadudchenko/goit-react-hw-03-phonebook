import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'

class App extends Component {
  
  state = {
  contacts: [{id: 'ba9f1e30-400f-11ec-ac3d-5f326bb2dcb7', name: 'Harry Potter', number: '459-12-56'},
    {id: 'b7fcfc20-400f-11ec-ac3d-5f326bb2dcb7', name: 'Hermine Granger', number: '443-89-12'},
    {id: 'ba9f1e40-400f-11ec-ac3d-5f326bb2dcb7', name: 'Ron Weasley', number: '645-17-79'},
    {id: 'c907a010-400f-11ec-ac3d-5f326bb2dcb7', name: 'Albus Dumbledore', number: '227-91-26'},],
    filter: '',
  }

  onHandlerSubmit = data => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert('This contact already in the addressbook')
    }
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, { id: uuidv1(), name: data.name, number: data.number }]
        }))
  }

  handleFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  filterContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return filteredContacts;
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  handleAlert = () => {
    alert('No matches is found')
  }

  render() {
    return (
      <div className={s.App}>
        <h1 className={s.App_title}>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm onSubmit={this.onHandlerSubmit} />
        </Section>
       
        <Section title="Your contacts">
            <Filter onHandleFilter={this.handleFilter} />
            {!(this.filterContacts().length === 0)
            && <ContactList contacts={this.state.filter ? this.filterContacts() : this.state.contacts} onDeleteContact={ this.deleteContact}/>
            }
          </Section>
        </div>
    </div>
  )
  }
  
}

export default App;
