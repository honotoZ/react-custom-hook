import { useCallback, useEffect, useState } from "react";

export default function UseFetch(url){
    const [data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

//  FUNCTION FETCHDATA WITH USECALLBACK HOOK
    const fetchData=useCallback(async()=>{
        setLoading(true)
        try{    
            const response=await fetch(url)
            const res=await response.json()
            console.log(res);
            setData(res)
            setError(null)
        }catch(e){
            setError(e.message)
            setData(null)
        }finally{
            setLoading(false)
        }
    },[url])
    

// USEEFFECT HOOK
    useEffect(()=>{
        fetchData()
    },[fetchData])
    
// RETURN
    return{data,loading,error}
}
