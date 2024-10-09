import React from "react";
function Footer(){
const d=new Date();
const year=d.getFullYear();
    return(
        <div className="footer mt-5">
        <h5 style={{color:"#6610f2"}}>Jetlin karkha.{year}</h5>
        </div>
    )
}

export default Footer;