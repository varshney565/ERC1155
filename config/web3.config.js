module.exports = (Web3)=>{
    const web3 = new Web3(new Web3.providers.HttpProvider(
        `https://${process.env.ETHEREUM_NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`,
        ),
    );
    const signer = web3.eth.accounts.privateKeyToAccount(
        process.env.SIGNER_PRIVATE_KEY
    );
    
    web3.eth.accounts.wallet.add(signer);
    return web3;
}