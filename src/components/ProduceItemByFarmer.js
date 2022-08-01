import React from 'react'
import { useEffect, useState } from "react";
import { Form, Row, Col } from 'react-bootstrap';
import {  produceItemByFarmer } from "../utils/interact.js";
export const ProduceItemByFarmer = (props) => {
    //State variables
    const [walletAddress, setWallet] = useState("");
    const [upc, setUpc] = useState("");
    const [farmName, setFarmName] = useState("");
    const [farmInformation, setFarmInformation] = useState("");
    const [farmLatitude, setFarmLatitude] = useState("");
    const [farmLongitude, setFarmLongitude] = useState("");
    const [notes, setNotes] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
  
    
  
    const ProduceItemByFarmer = async () => {
      const { status } = await produceItemByFarmer(upc, farmName, farmInformation, farmLatitude, farmLongitude, notes, price, props.value);
      setStatus(status);
    }
  
  
    return (
      <div className="supplychain">
       
  
  
        <h1 className='m-3 text-center'>Produce Item By Farmer</h1>
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
                Farm Name
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter farm name"
                onChange={(e) => setFarmName(e.target.value)}
                value={farmName}>
  
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>
                Farm Information
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter farm information"
                onChange={(e) => setFarmInformation(e.target.value)}
                value={farmInformation} />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Farm Longitude
              </Form.Label>
              <Form.Control type="number"
                placeholder="Enter farm latitude"
                onChange={(e) => setFarmLatitude(e.target.value)}
                value={farmLatitude} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>
                Farm Longitude
              </Form.Label>
              <Form.Control type="number"
                placeholder="Enter farm Longitude"
                onChange={(e) => setFarmLongitude(e.target.value)}
                value={farmLongitude} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>
                Notes
              </Form.Label>
              <Form.Control type="text"
                placeholder="Enter notes"
                onChange={(e) => setNotes(e.target.value)}
                value={notes} />
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
        <button className='m-3' onClick={ProduceItemByFarmer}>Produce Item By Farmer</button>
  
  
  
  
        <p className='m-3 text-center' id="status">
          {status}
        </p>
      </div>
    );
  }