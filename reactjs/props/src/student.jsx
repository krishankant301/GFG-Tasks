import React from "react";
import Child from "./Child";

const stud = (props) =>{
    return(
        <div>
            {/* <p>{Myname}</p>
            <p>{age}</p>
            <p>{salary}</p>
            <p>{address}</p> */}
            <Child Myname={props.Myname} age={props.age} salary={props.salary} address={props.address} />
        </div>
    );
};
export default stud;