import React from 'react'
import { useState, useEffect } from 'react';

const Custom = (url) => {
    const [data, setData] = useState();
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{setData(data)
            const stringData = JSON.stringify(data);
            localStorage.setItem("apidata", stringData)
        })
        // .then((data_string)=>{JSON.stringify(data_string)})
    },[URL]);
    // localStorage.setItem("apidata", data);
    return [data];
  
}

export default Custom