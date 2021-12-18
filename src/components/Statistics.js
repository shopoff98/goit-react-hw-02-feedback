import { ListStatistics } from "./styled/Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h2>Statisctics</h2>
            <ListStatistics>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: { positivePercentage}%</li>
            </ListStatistics>
        </>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
        neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
        total:PropTypes.number.isRequired,
     positivePercentage:PropTypes.number.isRequired
}


export default Statistics;