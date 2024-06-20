import { useState } from "react";

const [count, setCount] = useState(0);
function Main() {
    return (
        <>
            <button onClick={useState}></button>
            <p>{count}</p>
        </>
    );
}
export default Main;