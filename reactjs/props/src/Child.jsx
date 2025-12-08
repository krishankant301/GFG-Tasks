import React from "react";

const Child = (props)=>{
    return (
        <div>
            {/* <input
                value={props.Myname} 
                type="text"
                placeholder="Enter your name."
                onChange={(e)=>setName(e.target.value)}
                ></input>
            <p>value inside Child: {props.name}</p> */}

            <p>Name is : {props.Myname}</p>
            <p>Age is: {props.age}</p>
            <p>salary is: {props.salary}</p>
            <p>Address is: {props.address}</p>

        </div>
    );
}

export default Child;