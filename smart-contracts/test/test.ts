import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("mintingnft", function () {
  
  async function deploynfttokenFixture() {

    const [bob,alice] = await hre.ethers.getSigners();

    const Token = await hre.ethers.getContractFactory("nfttoken");
    const token = await Token.deploy();

    return {token,bob,alice};
  }
  it("should balance",async function(){
    const { token, bob,alice } = await loadFixture(deploynfttokenFixture);
    await token.safeMint(bob.address);
    const nfttoken= await token.balanceOf(bob.address);
    expect (nfttoken).to.equal(1);
  })
  });

