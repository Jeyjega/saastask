import React from 'react';
import bgimg from "../images/bg.jpg.jpg"
import { useForm } from "react-hook-form";

export default function Form(){
    
  const{register, handleSubmit,formState:{errors}}=useForm();

  const onSubmit = (data)=>{
    console.log(data)
  }
  return(

    
   <div className="back-image" style={{backgroundImage:`url(${bgimg} )`, backgroundSize: 'auto'}}>
 
    <h3>Lorem Ipsum
   
    </h3>
   
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-row-1'>
       <label>Name</label> <br/>
      <input type="text"{...register("username")} placeholder="Name" name="Name"   /><br/>
      <label>Email</label><br/>
      <input type="text" {...register("email")} placeholder="Email" name="email"     /><br/>
      </div>

      <div className='form-row-2'>
      <label>Designation</label><br/>
      <input type="text" {...register("Designation")} placeholder="Designation" name="Designation"     /><br/>
      <label>Contact</label><br/>
      <input type="number" {...register("contact",{required:true,maxLength:10})} placeholder="Mobile No" name="contact"    /><br/>
      {errors.contact?.type==="required"&&"Mobile Number is required"}
      {errors.contact?.type==="maxLength"&&"Maximum length exceed"}
      </div>
      <button>Submit</button>
      
    </form>
    </div>
   
    
  )
}
