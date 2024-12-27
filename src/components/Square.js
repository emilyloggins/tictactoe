import { useState } from 'react';

export default function Square({ value }) {

    constt[value, setValue] = useState(null);
    
    function handleClick() {
        console.log("click");
    }

    return <button
        className="square"
        onClick={handleClick}
    >{value}</button>

}