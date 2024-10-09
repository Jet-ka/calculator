import React from "react";

function Button(props){
    return(
        <div className="options">

    <button className="btn btn-primary" onClick={props.getdis}  >Pay after discount</button>
    <button className="btn btn-warning"onClick={props.getspeed}  >Bowler's Speed</button>

        </div>
    )
}

export default Button;