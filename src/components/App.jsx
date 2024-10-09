import React,{useState} from 'react';
import Header from "./header.jsx";
import Button from "./button.jsx";
import Discount from "./discount.jsx";
import Speed from "./speed.jsx";
import Footer from "./footer.jsx";

function App() {
const[disp,setdisplay]=useState("none");
const[diss,setdis]=useState("none");

//store discount value when user place value
const[result,setresult]=useState("");

//for discount
  function dis(){
    
      //alert('dis')
      //if display none hoi then block hobo but jodi block tahke then none hobo
      setdisplay(disp === 'none' ? 'block' : 'none');
    
   
  }


  //for speed
  function speed(){
    setdis(diss=='none'?'block':'none')
    }



//collect discount data
function getdata(data){
  
 const all=data;
 const MP=all.mp;
 const D=all.d;
 
 const result=MP-D/100*MP;
 //alert(result);
// document.getElementById("result").innerHTML={result}
 //console.log(result);
setresult(
  
  result
)

}

//speed cvalue direct extract we can just collect calculation value here or do calculation like i did with discount look above
function getspeed(data){
 // const result=speed;
  const distance=data.distance;
  const time=data.time;
 // console.log(time);
 // const timeinsecond=time*0.001;
 // console.log(timeinsecond)
  const speedresult=distance/time*18/5;
 // console.log(speedresult);
 // setspeed(speedresult);

  setresult(speedresult);
}




return (
  <div>
    <Header /><br />
    
    <Button getdis={dis} 
    getspeed={speed} />

<div className="place mt-1">
<Discount
style={{display:disp}}
getdata={getdata}

showresult={result !== "" ? result : "0"} // Display result or 0 for conditional rendering


/>

<Speed style={{display:diss}}
//value
getspeeddata={getspeed}
showresult={result !== "" ? result : "0"}

/>
</div>

<Footer />


  </div>
)
  
}

export default App
