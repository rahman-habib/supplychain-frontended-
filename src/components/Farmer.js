import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { addfarmer,checkFarmer } from '../utils/interact'


export const Farmer = (props) => {
    const [status, setStatus] = useState("");
    const [address, setAddress] = useState("");
    const[result,setResult]=useState(null);
    const check=async()=>{
       const data= await checkFarmer(props.value);
       setResult(data);
       console.log(data);
       
    }
    const add=async()=>{
        const {status}= await addfarmer(address,props.value);
      
        setStatus(status);
        
     }


  return (
    <>
    <div>
        <h1 className='text-center mt-3'>Farmer</h1>
        
        <button  onClick={check} >Is Farmer?</button>
        <p>{result!=null ? result ? "True": "False":""}</p>
    </div>
<div>
    <h1 className='text-center mb-3'>Add Farmer</h1>
    <Form.Group>
              <Form.Label className='mb-3'>
                Notes
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter notes"
                onChange={(e) => setAddress(e.target.value)}
                value={address} />
            </Form.Group>
            <button className='m-3' onClick={add}>Add Farmer</button>
            <p>{status}</p>
</div>


    </>

  )
}
