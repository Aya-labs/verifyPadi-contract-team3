// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {PadiRegistry} from "../src/PadiRegistry.sol";

contract DeployPadiRegistry is Script {

    function setUp() public {}

    function run() public {
        // Replace this with your desired Padi Address
        // address padiAddress = 0x...;

        // PadiRegistry registry = new PadiRegistry(padiAddress);
        // console2.log("Deployed PadiRegistry to:", address(registry));

        // Uncomment and modify these lines to perform post-deployment actions
        // registry.createUser();
        // registry.addVerifier(address(0x...));
        // ...

        uint privateKey = vm.envUint("PRIVATE_KEY");
        address padiAddress = vm.addr(privateKey);

        console2.log("Deployed PadiRegistry to: ", padiAddress);

        vm.startBroadcast(privateKey);
        new PadiRegistry(padiAddress);
        vm.stopBroadcast();
    }
}
