import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, result }) => (
    <tr>
        <td>{text}</td> 
        <td>{result}</td>
    </tr>
)

const Statistics = ({ good, neutral, bad}) => {

    const sum = good + neutral + bad

    let result = (good*1 + neutral*0 + bad*-1) / sum
    const average = isNaN(result) ? 0 : result

    result = (good / sum).toFixed(1)
    const positive = isNaN(result) ? 0 : (result * 100).toFixed(1)

    if (!good && !neutral && !bad) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Statistics</th>
                </tr>
                <StatisticLine text="good" result={good} />
                <StatisticLine text="neutral" result={neutral} />
                <StatisticLine text="bad" result={bad} />
                <StatisticLine text="all" result={good + neutral + bad} />
                <StatisticLine text="average" result={average} />
                <StatisticLine text="positive" result={positive + '%'} />
            </tbody>
        </table>
    )
}
const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>

            <Button text="good" handleClick={() => setGood(good+1)} />
            <Button text="neutral" handleClick={() => setNeutral(neutral+1)} />
            <Button text="bad" handleClick={() => setBad(bad+1)} />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App