import css from "./Feedback.module.css"

export const Feedback = ( { stats, total }) => {

    return (
        <div className={css.container}>
            <span>Good: {stats.good} </span>
            <span>Neutral: {stats.neutral} </span>
            <span>Bad: {stats.bad} </span>
            <span>Total: {total}</span>
            {total > 0 && <span>Positive: {Math.round(((stats.good + stats.neutral) / total) * 100)}%</span>}
        </div>
    )
}