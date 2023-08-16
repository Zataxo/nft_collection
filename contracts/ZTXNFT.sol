// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ZataxNFT is ERC721URIStorage,Ownable {
    constructor() ERC721("ZataxNFT","ZTXNFT"){
        //
    }
    function mint(address _to,uint _tokenId,string calldata _uri) external onlyOwner{
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _uri);
    }
    // 
    // simple nft contract allow the owmer to mint nft and upload it yo ipfs
}