import React from 'react';
import { Form } from 'react-bootstrap';
import { useState } from "react";
import {  PackagedByDistributor } from "../utils/interact.js";
export const PackagedBydistrbutor = (props) => {
    const [upc, setUpc] = useState("");
    const [status, setStatus] = useState("");
    const packaged = async () => {
        const { status } = await PackagedByDistributor(upc, props.value);
        setStatus(status);
      }
  return (
    <div>
        <h1 className='m-3 text-center'>Packaged Item By Distributor</h1>
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
          <button className='m-3' onClick={packaged}>Packaged Item By Distributor</button>
          <p className='m-3 text-center' id="status">
          {status}
        </p>
          
    </div>
  )
}
