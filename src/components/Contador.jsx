import React, {useState} from "react";

const Contador = () => {

    //I created this (const) variable to convert the counter = 0
    const reset = 0;

    //Hook -> useState.
    const [number, setNumber] = useState(0);

    //Arrow function to decrease the counter.
    const decrease = () => {
        setNumber(number - 1);
    }

    return(
        <div className="container text-center">
            <p>You clicked {number} times</p>
            <hr/>
            <button onClick={()=> setNumber(number + 1)} className="btn btn-primary mr-2">Increase</button>
            <button onClick={decrease} className="btn btn-danger mr-2">Decrease</button>
            <button onClick={()=> setNumber(reset)} className="btn btn-info">Reset</button>
            <hr/>
            <input 
            type="number" 
            value={number}
            onChange={ (e) =>setNumber(e.target.value)} 
            />
        </div>
    )


}

export default Contador