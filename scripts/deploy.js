const hre = require("hardhat");

async function main() {

    const DeviceRegistry =
        await hre.ethers.getContractFactory(
            "DeviceRegistry"
        );

    const deviceRegistry =
        await DeviceRegistry.deploy();

    await deviceRegistry.deployed();

    console.log(
        "DeviceRegistry deployed to:",
        deviceRegistry.address
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
