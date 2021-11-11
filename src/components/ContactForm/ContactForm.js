import React, { Component } from 'react';
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
};

class ContactForm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {...INITIAL_STATE}
    
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.target.value })
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.reset();
    }
    
    reset = () => {
        console.log('aaa');
        this.setState({...INITIAL_STATE})
    }
    render() {
        const { name, number } = this.state;
        return <form className={s.contact_form} onSubmit={this.handleSubmit}>
            <label className={s.contact_form__label}> Name
                <input
                    type="text"                
                    className={s.contact_form__input}
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.contact_form__label}> Telephone number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    className={s.contact_form__input}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit" className={s.contact_form__button} >
            Add to contacts
            </button>
        </form> 
    }
    

}

export default  ContactForm