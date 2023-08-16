const {expect} = require("chai");
const hre = require("hardhat"); //  hre stand for hard hat run time
describe("Minting Checker",function(){
    let nft;
    let owner;
    let addressOne;
    let addressTwo;
    beforeEach(async function(){
        nft = await hre.ethers.deployContract("ZataxNFT");
        [owner,addressOne,addressTwo] =await hre.ethers.getSigners(); 
    });
    it("Should assign owner ship to depoloyer",async function(){
      
        const nftOwner = await nft.owner();
        console.log(nftOwner);
        console.log("--------");
        console.log(owner.address);
        expect(nftOwner).to.equal(owner.address);
    });
    it("Only owner should min NFT's",async function(){
        await expect(nft.connect(addressOne).mint("0x68C568D47f5Bd21Ae8F6ec7f87E10223031f61d2",0,"some url")).to.be.revertedWith("Ownable: caller is not the owner");
    });
    it("Should update owner balance after any nft minting",async function(){
        console.log(await nft.balanceOf("0x68C568D47f5Bd21Ae8F6ec7f87E10223031f61d2"));
        await nft.mint("0x68C568D47f5Bd21Ae8F6ec7f87E10223031f61d2",0,"ipfs://bafkreib6uzkh7u2z72w6ehemwpm6yt5ke6gpbb352jqzp2n72oceghtzvy");
        const newBalane = await nft.balanceOf("0x68C568D47f5Bd21Ae8F6ec7f87E10223031f61d2");
        expect(newBalane).to.equal(1);
    });
})