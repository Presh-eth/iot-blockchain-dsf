# IoT Blockchain DSF

Blockchain-Based Decentralized Security Framework for IoT Device Authentication.

## Overview

This repository contains the Solidity smart contract and Hardhat scripts used to implement and evaluate a blockchain-based device registration and authentication framework for IoT environments. The project serves as a proof-of-concept implementation accompanying the associated research study on blockchain-enabled IoT security.

## Components

### Smart Contract

* DeviceRegistry.sol

### Deployment Scripts

* deploy.js

### Experimental Scripts

* testDevice.js (Sequential Registration Evaluation)
* concurrentTest.js (Concurrent Registration Evaluation)

### Configuration

* hardhat.config.js

## Experimental Setup

* Solidity v0.8.28
* Hardhat Ethereum development framework
* Local Hardhat Ethereum test network
* 100 simulated IoT devices

## Sequential Registration Evaluation

The sequential experiment evaluates device registration and authentication performance across 100 simulated IoT devices.

Metrics collected include:

* Registration latency
* Authentication success rate
* Gas consumption

Run:

```bash
npx hardhat run scripts/testDevice.js --network localhost
```

## Concurrent Registration Evaluation

The concurrent experiment evaluates scalability by submitting 100 device registration requests simultaneously.

Metrics collected include:

* Successful registrations
* Total execution time
* Throughput (transactions per second)
* Gas consumption

Run:

```bash
npx hardhat run scripts/concurrentTest.js --network localhost
```

## Experimental Results

### Sequential Evaluation

* 100 simulated IoT devices
* 100 successful registrations
* 100 successful authentications
* Authentication success rate: 100%
* Average registration latency: 44.03 ms
* Minimum registration latency: 18 ms
* Maximum registration latency: 66 ms
* Registration latency standard deviation: 5.92 ms
* Average registration gas consumption: 71,856.04 gas

### Concurrent Evaluation

* 100 concurrent registration requests
* 100 successful registrations
* Registration success rate: 100%
* Total execution time: 2.03 seconds
* Throughput: 49.26 transactions per second
* Average registration gas consumption: 71,940.04 gas

## Reproducibility

The repository contains the smart contract implementation, deployment scripts, sequential evaluation scripts, and concurrent evaluation scripts used to generate the reported experimental results in the associated research paper.

## Purpose

Proof-of-concept implementation demonstrating blockchain-based IoT device registration, authentication, event logging, performance evaluation, gas-cost analysis, and concurrent scalability testing.
