import { useState } from 'react';
export default function Square() {

    const [value, setValue] = useState(null);

    function onSquareClick() {
        setValue('X');
    }

    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );

}