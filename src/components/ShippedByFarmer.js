import React from 'react';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import {  shipByFarmer } from "../utils/interact.js";

export const ShippedByFarmer = (props) => {
    const [upc, setUpc] = useState("");
    const [status, setStatus] = useState("");
    const shipbyfarmer = async () => {
        const { status } = await shipByFarmer(upc, props.value);
        setStatus(status);
      }
  return (
    <div>
        <h1 className='m-3 text-center'>Shipped Item By Farmer</h1>
        <div className='w-100'>
     <Form >
            <Form.Group>
              <Form.Label className='mb-3'>Universal Product Code</Form.Label>
              <Form.Control type="number"
                placeholder="Enter universal product code"
                onChange={(e) => setUpc(e.target.value)}
                value={upc}></Form.Control>
            </Form.Group>
          </Form>
          </div>
          <button className='m-3' onClick={shipbyfarmer}>Shipped Item By Farmer</button>
          <p className='m-3 text-center' id="status">
          {status}
        </p>
          
    </div>
  )
}
