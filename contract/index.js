const fs = require("fs");
const Web3 = require('web3');

const web3 = require('./../config/web3.config')(Web3);

const contractABI = JSON.parse(fs.readFileSync('./contract/abi.json'));
const contractAddress = process.env.CONTRACT_ADDRESS; 
exports.myContract = new web3.eth.Contract(contractABI, contractAddress);