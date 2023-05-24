import useDispatch from "../../hooks/useDispatch";
import {useState} from "react";


const Test = () => {

    const [state, setState] = useState(0);



    return (
        <>
            <button
                onClick={() => {
                }}
            >
                더함
            </button>
            <button
                onClick={() => {}}
            >
                빼기
            </button>
            <span>{state}</span>
        </>
    )
}

export default Test;