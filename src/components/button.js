import React from "react";

const Button = ({myOnClick, title}) => {
    return(
        <button onClick={myOnClick}>{title}</button>


    )
}
export default Button