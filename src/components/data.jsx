import { useState,useEffect } from "react";

const Data = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/bots')
        .then((res)=>res.json())
        .then((data)=>setData(data))

    },[])
    console.log(data)
    

}

export default Data;