import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
            Positive feedbacks:{' '}
            {positivePercentage ? positivePercentage + '%' : '0%'}
      </li>
      </ul>
  )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}
