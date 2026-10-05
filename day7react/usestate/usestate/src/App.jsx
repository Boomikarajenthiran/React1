import { useState } from "react";

function App() {

  const [name, setName] = useState("Arun");

  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);

  return (
    <div>

      <h2>Name: {name}</h2>

      <button onClick={() => setName("Kumar")}>
        Change Name
      </button>


      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>


      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && <h2>Welcome to React</h2>}

    </div>
  );
}

export default App;