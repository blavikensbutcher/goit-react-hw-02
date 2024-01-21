import {useEffect} from "react";
import css from "./Option.module.css"
import {RiEmotionHappyLine} from "react-icons/ri";
import {BsEmojiNeutral} from "react-icons/bs";
import {FaRegAngry} from "react-icons/fa";

export const Options = ({stats, stats: {good, neutral, bad}, setStats, total}) => {

    function goodReview() {
        setStats({
            ...stats,
            good: good + 1,
        })
    }

    function neutralReview() {
        setStats({
            ...stats,
            neutral: neutral + 1,
        })
    }

    function badReview() {
        setStats({
            ...stats,
            bad: bad + 1,
        })
    }

    function dropReview() {
        setStats({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    }

    useEffect(() => {
        localStorage.setItem("review", JSON.stringify(stats))
    }, [goodReview, neutralReview, dropReview]);

    return (
        <div className={css.container}>
            <button onClick={goodReview}>Good <RiEmotionHappyLine color={"green"} size={15}/></button>
            <button onClick={neutralReview}>Neutral <BsEmojiNeutral color={"darkgoldenrod"} size={15}/></button>
            <button onClick={badReview}>Bad <FaRegAngry color={"red"} size={15}/></button>
            {total > 0 && <button onClick={dropReview}>Reset</button>}
        </div>
    )
}

