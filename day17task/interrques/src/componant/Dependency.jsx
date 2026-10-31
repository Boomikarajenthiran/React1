import { useState, useEffect } from "react";

function Dependency() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setCount(prev => prev + 1);

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (
        <>
            <h2>Count: {count}</h2>
        </>
    );
}

export default Dependency;