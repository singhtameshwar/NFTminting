// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract nfttoken is ERC721 {
                   
    uint256 private _nextTokenId;
    constructor()
        ERC721("nfttoken", "MTK")
    {}
    
    function safeMint(address to) public  {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

}


