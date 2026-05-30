// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract DeviceRegistry {

    struct Device {
        string deviceId;
        address wallet;
        bool isRegistered;
    }

    mapping(string => Device) private devices;

    event DeviceRegistered(
        string deviceId,
        address wallet,
        uint256 timestamp
    );

    function registerDevice(string memory _deviceId) public {

        require(
            !devices[_deviceId].isRegistered,
            "Device already registered"
        );

        devices[_deviceId] = Device({
            deviceId: _deviceId,
            wallet: msg.sender,
            isRegistered: true
        });

        emit DeviceRegistered(
            _deviceId,
            msg.sender,
            block.timestamp
        );
    }

    function authenticateDevice(
        string memory _deviceId
    ) public view returns (bool) {

        return devices[_deviceId].isRegistered;
    }
}