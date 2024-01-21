import css from "./Description.module.css"



export const Description = () => {

    return (
        <div >
            <h1 className={css.text}>Sip Happens Café </h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <img src={'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZSUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D'}
                 alt={"cafe"}
            width={600}/>
        </div>
    )
}