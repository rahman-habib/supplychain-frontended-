import React from 'react'
import { Button } from 'bootstrap';
import  { useState } from 'react'
import { Form } from 'react-bootstrap';
import { addCon,checkCon,removeCon } from '../utils/interact'
export const Consumer = (props) => {
 
    const [status, setStatus] = useState("");
    const [address, setAddress] = useState("");
    const [addressCon, setAddressCon] = useState("");
    const [status1, setStatus1] = useState("");
    const[result,setResult]=useState(null);
    const check=async()=>{
       const data= await checkCon(props.value);
       setResult(data);
       console.log(data);
       
    }
    const addcon=async()=>{
        const {status}= await addCon(address,props.value);
      
        setStatus(status);
        
     }
     const removecon=async()=>{
      const {status}= await removeCon(addressCon,props.value);
    
      setStatus1(status);
      
   }


  return (
    <>
    <div>
        <h1 className='text-center mt-3'>Consumer</h1>
        
        <button  onClick={check} >Is Consumer?</button>
        <p>{result!=null ? result ? "True": "False":""}</p>
    </div>
<div>
    <h1 className='text-center mb-3'>Add Consumer</h1>
    <Form.Group>
              <Form.Label className='mb-3'>
                Address
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter new Consumer address"
                onChange={(e) => setAddress(e.target.value)}
                value={address} />
            </Form.Group>
            <button className='m-3' onClick={addcon}>Add Consumer</button>
            <p>{status}</p>
</div>

<div>
    <h1 className='text-center mb-3'>Remove Consumer</h1>
    <Form.Group>
              <Form.Label className='mb-3'>
                Address
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter Consumer address"
                onChange={(e) => setAddressCon(e.target.value)}
                value={addressCon} />
            </Form.Group>
            <button className='m-3' onClick={removecon}>Remove Consumer</button>
            <p>{status1}</p>
</div>


    </>

  )
}
