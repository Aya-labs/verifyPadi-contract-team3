// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// import "@openzeppelin/contracts/access/Ownable.sol"; // for remix
// import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol"; // for remix
import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";

contract PadiRegistry is Ownable {
    enum UserTag { USER, PADI, VERIFIER }

    struct UserData {
        string passportNumber;
        address userAddress;
        bool hasHexID;
    }

    mapping(bytes32 => UserData) public userData;
    mapping(address => address[]) public userVerifiers;
    mapping(address => uint256) public verificationCharges;
    mapping(address => UserTag) public addressTags;
    mapping(address => bytes32) public userHexIDs;
    address public padiAddress;

    event VerifierAdded(address indexed user, address indexed verifier);
    event VerificationChargesUpdated(address indexed verifier, uint256 charges);

    modifier onlyUser() {
        require(addressTags[msg.sender] == UserTag.USER, "Sender is not a user");
        _;
    }

    modifier onlyVerifier() {
        require(addressTags[msg.sender] == UserTag.VERIFIER, "Sender is not a verifier");
        _;
    }

    modifier onlyPadi() {
        require(addressTags[msg.sender] == UserTag.PADI, "Sender is not a padi");
        _;
    }

    modifier onlyContractOwner() {
        require(owner() == msg.sender, "Caller is not the owner");
        _;
    }

    constructor(address _padiAddress) Ownable(_padiAddress) {
        padiAddress = _padiAddress;
    }

    function createUser() external {
        addressTags[msg.sender] = UserTag.USER;
    }

    function addVerifier(address _verifier) external onlyUser {
        require(!isVerifierAdded(msg.sender, _verifier), "Verifier is already added by this user");
        userVerifiers[msg.sender].push(_verifier);
        addressTags[_verifier] = UserTag.VERIFIER;
        emit VerifierAdded(msg.sender, _verifier);
    }

    function updateVerificationCharges() external onlyOwner {
        verificationCharges[msg.sender] = 0.005e18; // Service charge of 0.005 ether
        emit VerificationChargesUpdated(msg.sender, verificationCharges[msg.sender]);
    }

    function generateUniqueHexID(string memory _passportNumber) external onlyUser returns (bytes32) {
        require(!userData[keccak256(abi.encodePacked(msg.sender))].hasHexID, "User already has a hex ID");
        bytes32 uniqueId = keccak256(abi.encodePacked(msg.sender, _passportNumber));
        userData[uniqueId] = UserData({
            passportNumber: _passportNumber,
            userAddress: msg.sender,
            hasHexID: true
        });
        userHexIDs[msg.sender] = uniqueId;
        return uniqueId;
    }

    function getUserHexID() external onlyUser view returns (bytes32) {
        return userHexIDs[msg.sender];
    }

    function verifyUniqueHexID(bytes32 _uniqueId) external onlyVerifier payable returns (string memory) {
        require(isVerifierAdded(userData[_uniqueId].userAddress, msg.sender), "Verifier is not added by this user");

        // Collect verification charges from the verifier
        require(msg.value >= verificationCharges[msg.sender], "Insufficient verification fee");

        // Transfer verification charges to Padi address
        payable(padiAddress).transfer(msg.value);

        return userData[_uniqueId].passportNumber;
    }

    function getAllUserAddresses() public view returns (address[] memory) {
        return userVerifiers[msg.sender];
    }

    function viewAllAddresses() external view onlyPadi returns (address[] memory, address[] memory) {
        return (getAllUserAddresses(), getAllUserAddresses());
    }

    function isVerifierAdded(address _user, address _verifier) internal view returns (bool) {
        address[] memory verifiers = userVerifiers[_user];
        for (uint256 i = 0; i < verifiers.length; i++) {
            if (verifiers[i] == _verifier) {
                return true;
            }
        }
        return false;
    }

    // Function to get the balance in the Padi address
    function getPadiAddressBalance() external view onlyContractOwner returns (uint256) {
        return address(padiAddress).balance;
    }
}
