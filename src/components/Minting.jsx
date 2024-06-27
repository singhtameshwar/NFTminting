import { Button } from "antd";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ABI from "../ABI.json"
import "../App.css"
export function Minting() {

    const contractAddress = "0xF8288cC486672477afF0a9133D9881356741b412";

    const [signer, setSigner] = useState(null)
    const [provider, setProvider] = useState()

    async function connectAccount() {
        let initProvider;
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
            initProvider = ethers.getDefaultProvider()
            setProvider(initProvider)
        } else {
            initProvider = new ethers.BrowserProvider(window.ethereum)
            const initSigner = await initProvider.getSigner();
            setSigner(initSigner);
            setProvider(initProvider)
        }
    }
    async function mintNft() {
        const contract = new ethers.Contract(contractAddress, ABI, signer)
        const tx = await contract.safeMint("0x1C87B29DAcEae35025E814DD78E385EF2f8918A8");
        await tx.wait()
    }
    async function nftBalance() {
        const contract = new ethers.Contract(contractAddress, ABI, provider)
        const nfbalance = await contract.balanceOf("0x1C87B29DAcEae35025E814DD78E385EF2f8918A8");
       console.log(nfbalance);
    }
  
    useEffect(() => {
        connectAccount();
    }, [])
    
    return (
        <>
            {signer ? signer.address : <Button className="address" onClick={connectAccount}>Connect Account</Button>}
            <br/>
            <Button className="butons" onClick={mintNft}>Mint</Button>
            <Button className="butons" onClick={nftBalance}>CheckBalance</Button>
        </>

    )
}
