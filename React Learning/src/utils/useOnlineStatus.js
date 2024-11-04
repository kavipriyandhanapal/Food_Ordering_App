import {useState,useEffect} from 'react';

const useOnlineStatus =()=>{

    const [online, setOnline]=useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            console.log('offline');
            setOnline(true);
        })
        window.addEventListener("offline",()=>{
            console.log('offline');
            setOnline(false);
        })
    },[])


    return online;
}

export default useOnlineStatus;