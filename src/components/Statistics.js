import { ListStatistics } from "./styled/Statistics.styled";

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

export default Statistics;