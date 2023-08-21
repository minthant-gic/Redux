import React, { useContext } from "react";
import { ThemeContext } from './contexts';

export default function Page(){
    const theme = useContext(ThemeContext);
    return(
        <>
        <div className={`bg-${theme} text-white`}>Hello</div>
        </>
    )
}