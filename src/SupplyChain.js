import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { connectWallet, getCurrentWalletConnected, produceItemByFarmer } from "./utils/interact.js";
import { ProduceItemByFarmer } from './components/ProduceItemByFarmer.js';
import { SellItemByFarmer } from './components/SellItemByFarmer.js';
import { Farmer } from './components/Farmer.js';

export const SupplyChain = (props) => {
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
                <NavDropdown.Item href="ProduceByFarmer">ProduceByFarmer</NavDropdown.Item>
                <NavDropdown.Item href="ForSaleByFarmer">
                  ForSaleByFarmer
                </NavDropdown.Item>
                <NavDropdown.Item href="ShippedByFarmer">ShippedByFarmer</NavDropdown.Item>
                <NavDropdown.Item href="farmer">Farmer</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Distributor" id="basic-nav-dropdown">
                <NavDropdown.Item href="#PurchasedByDistributor">PurchasedByDistributor</NavDropdown.Item>
                <NavDropdown.Item href="#ReceivedByDistributor">
                  ReceivedByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item href="#ProcessedByDistributor">ProcessedByDistributor</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#PackagedByDistributor">
                  PackagedByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item href="#ForSaleByDistributor">
                  ForSaleByDistributor
                </NavDropdown.Item>
                <NavDropdown.Item href="#ShippedByDistributor">
                  ShippedByDistributor
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Retailer" id="basic-nav-dropdown">
                <NavDropdown.Item href="#PurchasedByRetailer">PurchasedByRetailer</NavDropdown.Item>
                <NavDropdown.Item href="#ReceivedByRetailer">
                  ReceivedByRetailer
                </NavDropdown.Item>
                <NavDropdown.Item href="#ForSaleByRetailer">ForSaleByRetailer</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Consumer" id="basic-nav-dropdown">
                <NavDropdown.Item href="#PurchasedByConsumer">PurchasedByConsumer</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Item className='display-flex justify-content-end'>
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
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exect path="/ForSaleByFarmer" element={<SellItemByFarmer value={walletAddress} />} />
        <Route exect path="/ProduceByFarmer" element={<ProduceItemByFarmer value={walletAddress} />} />
        <Route exect path="/farmer" element={<Farmer value={walletAddress} />} />
      </Routes>








    </div>
  );
}
