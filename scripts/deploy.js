const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);

  // Send transaction to join the whitelist
  const addToWhitelistTx =
    await deployedWhitelistContract.addAddressToWhitelist();

  // print add to whitelist transaction
  console.log("Add to whitelist transaction: \n", addToWhitelistTx);
}

// Call the main function and catch if there is any error
main()
  .then(() => {
    console.log("Completed runing deploy script");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
