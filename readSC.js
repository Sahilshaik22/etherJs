const ethers =  require("ethers");
const abi = require("./abi")
const getDataFromTheContract = async () =>{
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
    const contractAddress ="0x6bD89B18F9273ca3e51a4D59de19d8Fd56B78227"
    const contractInstance = new ethers.Contract(contractAddress,abi,provider);
    const value = await contractInstance.retrive();
    console.log(value);
}

getDataFromTheContract();
