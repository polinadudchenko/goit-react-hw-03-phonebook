import PropTypes from 'prop-types'
import s from './Filter.module.css'

export default function Filter({ onHandleFilter }) {
    
    return <label className={s.filter_form__label}> Find a contact
                <input
                    type="text"                
                    className={s.filter_form__input}
                    name="filter"
                    onChange={onHandleFilter}
                />
            </label>
}

Filter.propTypes = {
       onHandleFilter: PropTypes.func.isRequired,
    }