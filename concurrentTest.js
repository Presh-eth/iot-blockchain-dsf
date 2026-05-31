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
        devices.push(`CONCURRENT_DEVICE_${i}`);
    }

    console.log(
        "\nStarting concurrent registration experiment...\n"
    );

    const startTime = Date.now();

    const txPromises = devices.map(
        async (deviceId) => {

            const tx =
                await deviceRegistry.registerDevice(
                    deviceId
                );

            return tx.wait();
        }
    );

    const receipts =
        await Promise.all(txPromises);

    const endTime = Date.now();

    const totalTimeSeconds =
        (endTime - startTime) / 1000;

    const throughput =
        devices.length /
        totalTimeSeconds;

    let totalGas = 0;

    receipts.forEach(receipt => {
        totalGas +=
            receipt.gasUsed.toNumber();
    });

    const averageGas =
        totalGas / receipts.length;

    console.log(
        "Successful Registrations:",
        receipts.length
    );

    console.log(
        "Total Execution Time:",
        totalTimeSeconds.toFixed(2),
        "seconds"
    );

    console.log(
        "Throughput:",
        throughput.toFixed(2),
        "transactions/sec"
    );

    console.log(
        "Average Gas:",
        averageGas.toFixed(2),
        "gas"
    );
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});