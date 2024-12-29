const ethers = require("ethers");
require("dotenv").config();
const abi = require("./abi.json");
const {Wallet} = require("ethers");
const writeDataInContract = async () =>{
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
    const contractAddress = "0x6bD89B18F9273ca3e51a4D59de19d8Fd56B78227";
    const privatekey = process.env.PRIVATE_KEY;
    const wallet = new Wallet(privatekey,provider);
    const contractInstance = new ethers.Contract(contractAddress,abi,wallet);
    const writeValue = await contractInstance.setNumber(100);
    console.log("transaction Successful", JSON.stringify(writeValue, null, 2));
}

writeDataInContract();
