import React,{useState,useEffect} from "react";

function Speed(props){
    
    const [isRunning, setIsRunning] = useState(false); // Track stopwatch state
    const [count, setCount] = useState(0);
   // const[speed,setspeed]=useState("");
    const[data,setdata]=useState({
        distance:"",
        time:""
    }) // Store elapsed time
  
    // Use useEffect to manage timer logic when isRunning changes
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setCount((prevCount) => prevCount + 0.1);
        }, 100); // Update 100 milisecond=0.1sec
      } else {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
    }, [isRunning]);
  
    const start = () => {
      setIsRunning(true);
    };
  
    const stop = () => {
      setIsRunning(false);
    };
    
    function resume(){
    setIsRunning(false);
    setCount(0);
        
    }

function handlechange(e){
//e.preventDefault();
const{name,value}=e.target;
setdata({
    ...data,
    [name]:value,
})
}

// //messege
// function mesgone(event){
//   const inputField = event.target;

//   if (inputField.dataset.alertShown) {
//     return; // If the alert has already been shown for this input field, return immediately
//   }

//   inputField.dataset.alertShown = true; // Mark the alert as shown for this input field
//   alert("Ideal pitch lentgh is 20 meter however you can change based on your preference")
  
// }

// function mesgtwo(event){
//   const inputField = event.target;

//   if (inputField.dataset.alertShown) {
//     return; // If the alert has already been shown for this input field, return immediately
//   }

//   inputField.dataset.alertShown = true; // Mark the alert as shown for this input field
//   alert("Start the stopwatch when the bowler crosses the pitch line and stop it when the ball hits the pitch.")
// }





function handlesubmit(e){
    e.preventDefault();// if i calculate here it take two time to place value so better i do calculation in app.jsx 
  //   const distance=data.distance;
  //   const time=data.time;
  //   console.log(time);
  //  // const timeinsecond=time*0.001;
  //  // console.log(timeinsecond)
  //   const speedresult=distance/time*18/5;
  //   console.log(speedresult);
  //   setspeed(speedresult);
    props.getspeeddata(data);
}






    return(
        <div style={props.style}  className="">
            
      <div className="stopwatch mb-3">
        <h2>{count} sec</h2>

        <div id="result" className="mt-2   mb-1 " style={{ display: props.showresult !== "0" ? "block" : "none" }} >
<h3 >Your speed is {props.showresult} Km/h </h3>

</div> 



        <div>
 <div className="note mb-1">
<h6>Start: Pitch Cross</h6>
<h6>Stop: Ball hit on pitch</h6>
</div>
        <button className="btn btn-info " onClick={start}>Start</button>
        <button className="btn btn-danger ms-5" onClick={stop}>Stop</button>
        <button className="btn btn-warning ms-5" onClick={resume}>Resume</button>
        </div>

      </div>
 

<form action=""  onSubmit={handlesubmit} > 


<div className="mb-3">

<input type="number"  onChange={handlechange} name="distance" value={data.distance} className="form-control border-success"  placeholder="Pitch distance:20 meter" required/>
</div>
<div className="mb-3">

<input type="number" onChange={handlechange} name="time" value={data.time} className="form-control border-success"  placeholder="Enter time when ball hit on the pitch" required/>
</div>
<div className="mb-3">
 <button   className="btn btn-primary">Submit</button>
</div>
</form>
     </div>
    )
}

export default Speed;