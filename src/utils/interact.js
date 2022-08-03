
const alchemyKey = "https://eth-rinkeby.alchemyapi.io/v2/gslsa8usxf0yOBAsKHHZZ5rVSOiud-AB"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../SupplyChain.json');
const contractAddress = "0x4afDBd832a8F9C863eaf0b5feBd7AbBc45E7F594";
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
                        Produced item by Farmer, View the status of your transaction on Etherscan!
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
export const checkFarmer = async (walletAddress) => {
    const result = await smartContract.methods.isFarmer(walletAddress).call();

    return result;
}
export const addfarmer = async (walletAddress, owner) => {
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
                        Farmer adding, View the status of your transaction on Etherscan!
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

export const removeFarmer = async (owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.renounceFarmer().encodeABI(),
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
                        Farmer removing, View the status of your transaction on Etherscan!
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

export const SellByFarmer = async (upc, price, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.sellItemByFarmer(upc, price).encodeABI(),
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
                        Sell item by farmer, View the status of your transaction on Etherscan!
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

export const shipByFarmer = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.shippedItemByFarmer(upc).encodeABI(),
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
                        Shipping item by farmer, View the status of your transaction on Etherscan!
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
export const checkDist = async (walletAddress) => {
    const result = await smartContract.methods.isDistributor(walletAddress).call();

    return result;
}
export const addDist = async (walletAddress, owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.addDistributor(walletAddress).encodeABI(),
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
                        Distributor adding, View the status of your transaction on Etherscan!
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
export const removeDist = async (owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.renounceDistributor().encodeABI(),
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
                        Distributor removing, View the status of your transaction on Etherscan!
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
export const checkRet = async (walletAddress) => {
    const result = await smartContract.methods.isRetailer(walletAddress).call();

    return result;
}
export const addRet = async (walletAddress, owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.addRetailer(walletAddress).encodeABI(),
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
                        Retailer adding, View the status of your transaction on Etherscan!
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
export const removeRet = async (owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.renounceRetailer().encodeABI(),
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
                        Retailer removing, View the status of your transaction on Etherscan!
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
export const checkCon = async (walletAddress) => {
    const result = await smartContract.methods.isConsumer(walletAddress).call();

    return result;
}
export const addCon = async (walletAddress, owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.addConsumer(walletAddress).encodeABI(),
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
                        Consumer adding, View the status of your transaction on Etherscan!
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
export const removeCon = async (address, owner) => {
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: owner, // must match user's active address.
        data: await smartContract.methods.renounceConsumer(address).encodeABI(),
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
                        Consumer removing, View the status of your transaction on Etherscan!
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
export const purchasedbyDistributor = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.purchaseItemByDistributor(upc).encodeABI(),
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
                        Purchased item by Distributor, View the status of your transaction on Etherscan!
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
export const receivedDistributor = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.receivedItemByDistributor(upc).encodeABI(),
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
                        Received item by Distributor, View the status of your transaction on Etherscan!
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
export const ProcessedDistributor = async (upc, slices, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.sellItemByFarmer(upc, slices).encodeABI(),
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
                        Process item by Distributor, View the status of your transaction on Etherscan!
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

export const PackagedByDistributor = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.packageItemByDistributor(upc).encodeABI(),
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
                        Packaged item by Distributor, View the status of your transaction on Etherscan!
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
export const SellByDistributor = async (upc, price, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.sellItemByDistributor(upc, price).encodeABI(),
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
                        Sell item by Distributor, View the status of your transaction on Etherscan!
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
export const shipByDistributor = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.shippedItemByDistributor(upc).encodeABI(),
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
                        Shipping item by Distributor, View the status of your transaction on Etherscan!
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
export const purchasedbyRetailer = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.purchaseItemByRetailer(upc).encodeABI(),
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
                        Purchased item by Retailer, View the status of your transaction on Etherscan!
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
export const receivedRetailer = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.receivedItemByRetailer(upc).encodeABI(),
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
                        Received item by Retailer, View the status of your transaction on Etherscan!
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
export const SellByRetailer = async (upc, price, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.sellItemByRetailer(upc, price).encodeABI(),
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
                        Sell item by Retailer, View the status of your transaction on Etherscan!
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
export const Hist = async (upc) => {


    try {
        const { FTD, DTR, RTC } = await smartContract.methods.fetchitemHistory(upc).call();

        return {
            status: (
                <span>
                    ✅{" "}
                    <p>Farmer to Distributor transaction at Block : {FTD}</p>
                    <p>Distributor to Retailer transaction at Block : {DTR}</p>
                    <p>Retailer to Consumer transaction at Block : {RTC}</p>
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }

}
export const BuffOne = async (_upc) => {


    try {
        const { sku, upc, ownerID, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productDate, productSliced } = await smartContract.methods.fetchItemBufferOne(_upc).call();

        return {
            status: (
                <span>
                    ✅{" "}
                    <p>sku : {sku}</p>
                    <p>upc : {upc}</p>
                    <p>owner id : {ownerID}</p>
                    <p>farm id : {originFarmerID}</p>
                    <p>farm name : {originFarmName}</p>
                    <p>farm information : {originFarmInformation}</p>
                    <p>farm Latitude : {originFarmLatitude}</p>
                    <p>farm Longitude : {originFarmLongitude}</p>
                    <p>product Date : {productDate}</p>
                    <p>Product slices : {productSliced}</p>
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }

}
export const Bufftwo = async (_upc) => {


    try {
        const { sku, upc, productID, productNotes, productPrice, productDate, itemState, distributorID, retailerID, consumerID } = await smartContract.methods.fetchItemBufferTwo(_upc).call();

        return {
            status: (
                <span>
                    ✅{" "}
                    <p>sku : {sku}</p>
                    <p>upc : {upc}</p>
                    <p>product id : {productID}</p>
                    <p>productNotes : {productNotes}</p>
                    <p>product price : {productPrice}</p>
                    <p>product date : {productDate}</p>
                    <p>item state : {itemState}</p>
                    <p>distributor id : {distributorID}</p>
                    <p>retailer id : {retailerID}</p>
                    <p>consumer id : {consumerID}</p>
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }

}
export const purchasedbyConsumer = async (upc, walletAddress) => {
    const transactionParameters = {
        to: contractAddress,
        from: walletAddress,
        data: await smartContract.methods.purchaseItemByConsumer(upc).encodeABI(),
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
                        Purchased item by Consumer, View the status of your transaction on Etherscan!
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