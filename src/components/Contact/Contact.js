import PropTypes from 'prop-types'
import s from './Contact.module.css'

export default function Contact({deleteBtn, name, number}) {
        return <>
            <td className={s.contact_line}>{ name }</td>
            <td className={s.contact_line}>{number}</td>
            <td className={s.contact_line}><button className={s.contact_btn}onClick={ deleteBtn }>Delete</button></td>
            </>                    
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
