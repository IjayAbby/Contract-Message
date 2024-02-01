// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");


async function main() {
  const MyMessage = await ethers.getContractFactory("MyMessage");

  // Start deployment, returning a promise that resolves to a contract object
  const mymessage = await MyMessage.deploy("Hello there");


  console.log(`My contract Address: ${mymessage.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });

