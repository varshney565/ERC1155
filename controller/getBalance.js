exports.getBalance = async (req,res) => {
    const myContract = require('./../contract/index').myContract;
    const accountAddress = req.body.address;
    let id = req.body.id;
    try {
        let balance = await myContract.methods.balanceOf(accountAddress,id).call({ gas: 30000000 });
        console.log(`Balance of ${accountAddress}: ${balance} token`);
        res.status(200).send({
            message : `Balance of ${accountAddress}: ${balance} token`
        });
    }catch(error) {
        console.error('Error fetching balance:', error);
        res.status(500).send({
            message : error.message || "Internal Server Error"
        })
    };
}