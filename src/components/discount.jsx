import React,{useState} from "react";

function Discount(props){
const [data,setdata]=useState({
mp: '',
d: '',

}
)

function handlechange(e){
  
    const {name,value}=e.target;
    

    setdata({
      ...data,
      [name]:value
    });
  
}


function handlesubmit(e){
  e.preventDefault();
  props.getdata(data);
 // props.getresult();
}



    return(
        <div style={props.style} className="form mb-3">
   
   <div id="result" className="mb-3" style={{ display: props.showresult !== "0" ? "block" : "none" }} >
<h3 >You have to pay {props.showresult} Rs </h3>
   
</div> 
 <form action=""  onSubmit={handlesubmit} > 


<div className="mb-3">
  
  <input type="number" onChange={handlechange} name="mp" value={data.mp} className="form-control border-success"  placeholder="Enter Market Price" required/>
</div>
<div className="mb-3">
  
  <input type="number" onChange={handlechange} name="d" value={data.d} className="form-control border-success"  placeholder="Enter Discount %" required/>
</div>
<div className="mb-3">
    <button   className="btn btn-primary">Submit</button>
</div>
</form>
        </div>
    )
}
export default Discount;