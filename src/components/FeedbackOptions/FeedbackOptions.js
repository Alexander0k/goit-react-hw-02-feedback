import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={css.buttonList}>
            {options.map(option => (
                <li
                    key={option}
                    className={css.buttonListItems}>
                    <button
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                        className={css.buttonListBtn}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )
  
}

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,),
    onLeaveFeedback: PropTypes.func.isRequired,
}