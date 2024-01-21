import './App.css'
import {Description} from "./Description/Description.jsx";
import {Options} from "./Option/Options.jsx";
import {Feedback} from "./Feedback/Feedback.jsx";
import {useState} from "react";
import {Notification} from "./Notification/Notification.jsx";

function App() {


    const [stats, setStats] = useState(JSON.parse(localStorage.getItem("review")) || {
        good: 0,
        neutral: 0,
        bad: 0,
    })




    let totalFeedback = stats.good + stats.neutral + stats.bad

    return (
        <>
            <Description/>
            <Options stats={stats} setStats={setStats} total={totalFeedback}/>

            {totalFeedback > 0 ? <Feedback stats={stats} total={totalFeedback}/> : <Notification/>}
        </>
    )
}

export default App
