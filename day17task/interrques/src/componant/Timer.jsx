import { useState, useEffect } from "react";

function Timer() {

    const [message, setMessage] = useState("Please wait...");

    useEffect(() => {

        const timer = setTimeout(() => {
            setMessage("Welcome to React!");
        }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    return (
        <>
          
          

            <h2 >{message}</h2>
        </>
    );
}

export default Timer;