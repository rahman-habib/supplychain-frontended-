import React from 'react'
import { Route, Routes ,Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import { connectWallet, getCurrentWalletConnected } from "./utils/interact.js";
import { ProduceItemByFarmer } from './components/ProduceItemByFarmer.js';
import { SellItemByFarmer } from './components/SellItemByFarmer.js';
import { Farmer } from './components/Farmer.js';
import { ShippedByFarmer } from './components/ShippedByFarmer.js';
import { Distributor } from './distributor/Distributor.js';
import { Retailer } from './retailer/Retailer.js';
import { Consumer } from './consumer/Consumer.js';
import { PurchasedDistributor } from './distributor/PurchasedDistributor.js';
import { PurchaseByConsumer } from './consumer/PurchaseByConsumer.js';
import { ReceivedbyDistributor } from './distributor/ReceivedbyDistributor.js';
import { ProcessedbyDistributor } from './distributor/ProcessedbyDistributor.js';
import { PackagedBydistrbutor } from './distributor/PackagedBydistrbutor.js';
import { SellbyDistributor } from './distributor/SellbyDistributor.js';
import { ShippedbyDistributor } from './distributor/ShippedbyDistributor.js';
import { History } from './history/History.js';
import { BufferOne } from './history/BufferOne.js';
import { BufferTwo } from './history/BufferTwo.js';
import { PurchasedbyRetailer } from './retailer/PurchasedbyRetailer.js';
import { ReceivedbyRetailer } from './retailer/ReceivedbyRetailer.js';
import { SellbyRetailer } from './retailer/SellbyRetailer.js';

export const SupplyChain = (props) => {
  const navigate = useNavigate();
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
      addWalletListener();
    }
    fetchdata();
  }, []);
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Wallet conected");
        }
        else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    }
    else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  return (
    <div className="supplychain">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Supply Chain</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Farmer" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/ProduceByFarmer")} >ProduceByFarmer</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ForSaleByFarmer")} >
                  ForSaleByFarmer
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ShippedByFarmer")} >ShippedByFarmer</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/farmer")} >Farmer</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Distributor" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/PurchasedByDistributor")} >PurchasedByDistributor</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ReceivedByDistributor")} >
                  ReceivedByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/processedByDistributor")} >ProcessedByDistributor</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/PackagedByDistributor")}>
                  PackagedByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ForSaleByDistributor")} >
                  ForSaleByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ShippedByDistributor")} >
                  ShippedByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate("/distributor")}>Distributor</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Retailer" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/PurchasedByRetailer")} >PurchasedByRetailer</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate("/ReceivedByRetailer")}>
                  ReceivedByRetailer
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/ForSaleByRetailer")}>ForSaleByRetailer</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/retailer")}>Retailer</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Consumer" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/PurchasedByConsumer")}>PurchasedByConsumer</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate("/consumer")}>Consumer</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate("/history")} >History</Nav.Link>
              <Nav.Link onClick={() => navigate("/buffer")} >BufferOne</Nav.Link>
              <Nav.Link onClick={() => navigate("/buffertwo")} >BufferTwo</Nav.Link>
              <Nav.Link className='display-flex justify-content-end'>
                <button id="walletButton" onClick={connectWalletPressed}>
                  {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
      <Route exect path="/ForSaleByRetailer" element={<SellbyRetailer value={walletAddress} />} />
      <Route exect path="/ReceivedByRetailer" element={<ReceivedbyRetailer value={walletAddress} />} />
      <Route exect path="/PurchasedByRetailer" element={<PurchasedbyRetailer value={walletAddress} />} />
      <Route exect path="/buffertwo" element={<BufferTwo value={walletAddress} />} />
      <Route exect path="/buffer" element={<BufferOne value={walletAddress} />} />
      <Route exect path="/history" element={<History value={walletAddress} />} />
      <Route exect path="/ShippedByDistributor" element={<ShippedbyDistributor value={walletAddress} />} />
      <Route exect path="/ForSaleByDistributor" element={<SellbyDistributor value={walletAddress} />} />
      <Route exect path="/PackagedByDistributor" element={<PackagedBydistrbutor value={walletAddress} />} />
      <Route exect path="/processedByDistributor" element={<ProcessedbyDistributor value={walletAddress} />} /> 
      <Route exect path="/ReceivedByDistributor" element={<ReceivedbyDistributor value={walletAddress} />} />
        <Route exect path="/PurchasedByConsumer" element={<PurchaseByConsumer value={walletAddress} />} />
        <Route exect path="/PurchasedByDistributor" element={<PurchasedDistributor value={walletAddress} />} />
        <Route exect path="/consumer" element={<Consumer value={walletAddress} />} />
        <Route exect path="/retailer" element={<Retailer value={walletAddress} />} />
        <Route exect path="/distributor" element={<Distributor value={walletAddress} />} />
        <Route exect path="/ShippedByFarmer" element={<ShippedByFarmer value={walletAddress} />} />
        <Route exect path="/ForSaleByFarmer" element={<SellItemByFarmer value={walletAddress} />} />
        <Route exect path="/ProduceByFarmer" element={<ProduceItemByFarmer value={walletAddress} />} />
        <Route exect path="/farmer" element={<Farmer value={walletAddress} />} />
      </Routes>
    </div>
  );
}
