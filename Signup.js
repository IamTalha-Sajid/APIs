const Web3 = require('web3');
const Validation = require('./build/contracts/Validation.json');
const init = async () => {
    try {
        const web3 = new Web3('http://localhost:9545');
        const id = await web3.eth.net.getId();
        const deployedNetwork = Validation.networks[id];
        const contract = new web3.eth.Contract(Validation.abi, deployedNetwork.address);
        const addresses = await web3.eth.getAccounts();

        const result = await contract.methods
            .Signup('Talha', '123', 'talha.sajid@amcoitsystems.com')
            .send({
                from: addresses[1],
            });
        console.log('Account Created Successfully');
    } catch (error) {
        console.log(error);
    }
};
init();
