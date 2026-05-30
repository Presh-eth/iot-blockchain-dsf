const hre = require("hardhat");

async function main() {

    const contractAddress =
        "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    const DeviceRegistry =
        await hre.ethers.getContractFactory(
            "DeviceRegistry"
        );

    const deviceRegistry =
        await DeviceRegistry.attach(contractAddress);

    const devices = [];

    for (let i = 1; i <= 100; i++) {
    devices.push(`DEVICE_${i}`);
   }

    let totalTime = 0;

    console.log("\nStarting blockchain authentication experiments...\n");

    for (let i = 0; i < devices.length; i++) {

        const startTime = Date.now();

        const tx =
            await deviceRegistry.registerDevice(
                devices[i]
            );

        await tx.wait();

        const endTime = Date.now();

        const executionTime =
            endTime - startTime;

        totalTime += executionTime;

        const isAuthenticated =
            await deviceRegistry.authenticateDevice(
                devices[i]
            );

        console.log(
            `Device: ${devices[i]}`
        );

        console.log(
            `Registration Time: ${executionTime} ms`
        );

        console.log(
            `Authentication Status: ${isAuthenticated}\n`
        );
    }

    const averageLatency =
        totalTime / devices.length;

    console.log(
        "Average Registration Latency:",
        averageLatency,
        "ms"
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
