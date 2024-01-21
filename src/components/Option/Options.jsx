import {useEffect} from "react";
import css from "./Option.module.css"
import {RiEmotionHappyLine} from "react-icons/ri";
import {BsEmojiNeutral} from "react-icons/bs";
import {FaRegAngry} from "react-icons/fa";
import {Button} from "@mui/material";
import {green} from "@mui/material/colors";


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
            <Button onClick={goodReview} color="success" variant="outlined">Good </Button>
            <Button onClick={neutralReview} color="warning" variant="outlined">Neutral </Button>
            <Button onClick={badReview} color="error" variant="outlined">Bad </Button>

            {total > 0 && <Button onClick={dropReview}>Reset</Button>}
        </div>
    )
}

