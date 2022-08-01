
const alchemyKey = "https://eth-rinkeby.alchemyapi.io/v2/gslsa8usxf0yOBAsKHHZZ5rVSOiud-AB"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../SupplyChain.json');
const contractAddress = "0x4afDBd832a8F9C863eaf0b5feBd7AbBc45E7F594";
const owner = "0x02918D224FAAf0917867e4D27E679246E9Eaa6dD";

export const smartContract = new web3.eth.Contract(contractABI.abi, contractAddress);

//1
export const produceItemByFarmer = async (upc, farmName, farmInformation, farmLatitude, farmLongitude, notes, price, walletAddress) => {
    //set up transaction parameters
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: walletAddress, // must match user's active address.
        data: await smartContract.methods.produceItemByFarmer(upc, farmName, farmInformation, farmLatitude, farmLongitude, notes, price).encodeABI(),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });

        return {
            status: (
                <span>
                    ✅{" "}
                    <a target="_blank" rel="noreferrer" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
                        View the status of your transaction on Etherscan!
                    </a>
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }

}
export const checkFarmer=async (walletAddress)=>{
  const result=  await smartContract.methods.isFarmer(walletAddress).call();

return result;
}
export const addfarmer=async (walletAddress,owner)=>{
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.addFarmer(walletAddress).encodeABI(),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });

        return {
            status: (
                <span>
                    ✅{" "}
                    <a target="_blank" rel="noreferrer" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
                        View the status of your transaction on Etherscan!
                    </a>
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }
  }

export const SellByFarmer= async (upc,price,walletAddress)=>{
const transactionParameters={
    to: smartContract,
    from: walletAddress,
    data:await smartContract.methods.sellItemByFarmer(upc,price).encodeABI(),
};
//sign the transaction
   //sign the transaction
   try {
    const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
    });

    return {
        status: (
            <span>
                ✅{" "}
                <a target="_blank" rel="noreferrer" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
                    View the status of your transaction on Etherscan!
                </a>
            </span>
        ),
    };
} catch (error) {
    return {
        status: "😥 " + error.message,
    };
}

}



export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Write a message in the text-field above",
                address: addressArray[0],
            };
            return obj;
        }
        catch (error) {
            return {
                address: "",
                status: error.messsage,
            };
        }
    }
    else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            )
        }
    }
};
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Wallet conected",
                };
            }
            else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        }
        catch (error) {
            return {
                address: "",
                status: error.messsage,
            };
        }
    }
    else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};