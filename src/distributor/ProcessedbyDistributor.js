import React from 'react'
import { Form } from 'react-bootstrap';
import {  useState } from "react";
import {  ProcessedDistributor, SellByFarmer } from "../utils/interact.js";
export const ProcessedbyDistributor = (props) => {
    const [upc, setUpc] = useState("");
    const [slices, setSlices] = useState("");
    const [status, setStatus] = useState("");
    const processs = async () => {
        const { status } = await ProcessedDistributor(upc, slices, props.value);
        setStatus(status);
      }



  return (
    <div>
        <h1 className='m-3 text-center'>Process Item By Distributor</h1>
        <div className='w-100'>
     <Form >
            <Form.Group>
              <Form.Label className='mb-3'>Universal Product Code</Form.Label>
              <Form.Control type="number"
                placeholder="Enter universal product code"
                onChange={(e) => setUpc(e.target.value)}
                value={upc}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>
                Price
              </Form.Label>
              <Form.Control type="number"
                placeholder="Enter slices"
                onChange={(e) => setSlices(e.target.value)}
                value={slices} />
            </Form.Group>
  
          </Form>
          </div>
          <button className='m-3' onClick={processs}>Process Item By Distributor</button>
          <p className='m-3 text-center' id="status">
          {status}
        </p>
          
    </div>
  )
}
