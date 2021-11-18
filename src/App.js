import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import { getDataFromLocalStorage } from './utils/helpers-local-storage'
import { writeDataToLocalStorage } from './utils/helpers-local-storage'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'

class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const parsedContacts = getDataFromLocalStorage('contacts');
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      writeDataToLocalStorage('contacts', this.state.contacts);
    }
    
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
