// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {PadiRegistry} from "../src/PadiRegistry.sol";

contract DeployPadiRegistry is Script {

    function setUp() public {}

    function run() public {

        bytes memory privateKeyBytes = bytes(vm.envString("PRIVATE_KEY"));
        bytes32 privateKey = bytes32(uint256(keccak256(privateKeyBytes)));
        address padiAddress = address(uint160(uint256(privateKey)));

        console2.log("Deployed PadiRegistry to: ", padiAddress);
        
        vm.startBroadcast();
        new PadiRegistry(padiAddress);
        vm.stopBroadcast();

    }
}
