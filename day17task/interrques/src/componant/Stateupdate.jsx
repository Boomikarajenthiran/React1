import { useState } from "react";

function Stateupdate() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </>
    );
}

export default Stateupdate;