import React from "react";
import { useRouteError } from "react-router-dom";

const Error =()=>{
    const error =useRouteError();


    return (
        <>
        <h1>
        Oppps! Something Went WRONG
        </h1>
        <h2>{error.status}:{error.text}</h2>
        </>
    )
}