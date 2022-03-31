import React, { useState } from "react";
import Web3 from "web3";

export default function App() {
  const [account, setAccount] = useState("");

  async function loadBlockChain() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
    const network = await web3.eth.net.getNetworkType();
    console.log(network); 
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  return (
    <div>
      <button onClick={() => loadBlockChain()} >Get public key</button>
      {{account} ? <span>Connected with <b>{account}</b></span> : <span>MetaMask is locked - please login</span>}
  </div>
  );
}
