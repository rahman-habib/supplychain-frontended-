import React from 'react'
import { Form} from 'react-bootstrap';
import {  useState } from "react";
import {  SellByRetailer } from "../utils/interact.js";
export const SellbyRetailer = (props) => {
    const [upc, setUpc] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const sellitem = async () => {
        const { status } = await SellByRetailer(upc, price, props.value);
        setStatus(status);
      }



  return (
    <div>
        <h1 className='m-3 text-center'>Sell Item By Retailer</h1>
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
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
                value={price} />
            </Form.Group>
  
          </Form>
          </div>
          <button className='m-3' onClick={sellitem}>Sell Item By Retailer</button>
          <p className='m-3 text-center' id="status">
          {status}
        </p>
          
    </div>
  )
}
