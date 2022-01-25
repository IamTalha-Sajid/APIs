const Web3 = require('web3');
const Validation = require('./build/contracts/Validation.json');
const init = async () => {
    try {
        const web3 = new Web3('http://localhost:9545');
        const id = await web3.eth.net.getId();
        const deployedNetwork = Validation.networks[id];
        const contract = new web3.eth.Contract(Validation.abi, deployedNetwork.address);
        const addresses = await web3.eth.getAccounts();
        contract.methods.Logout().call();
        console.log('Logout Successfully');
    } catch (error) {
        console.log(error);
    }
};
init();
