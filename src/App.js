//@smilewithkhushi
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Meme from "./components/meme";

import { useState } from "react";
import { ethers, utils } from "ethers";

import {
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function App() {
  const { ethers, JsonRpcProvider } = require("ethers");

  //State variables
  const [tokens, setTokens] = useState([]);
  const [address, setAddress] = useState("");

  //Function to execute fetch tokens upon submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("address = ", address);
    setAddress(address);
    fetchTokens()
      .then((data) => {
        setTokens(data.assets);
        console.log("Tokens: ", data.assets);
      })
      .catch((err) => {
        setTokens([]);
        console.log("Error fetching tokens: ", err);
      });
  };

  //Function to fetch tokens
  const fetchTokens = async () => {
    // if (!ethers.isAddress(address)) {
    //   alert("Please enter a valid Ethereum wallet address");
    //   return;
    // }

    const provider = new JsonRpcProvider(
     process.env.QUICKNODE_RPC_URL
      );

    const response = await provider.send("qn_getWalletTokenBalance", [
      {
        wallet: address,
        // contracts: []

        contracts: [
          "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
          "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
          "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", // MATIC
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
          "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
          "0xb24cd494faE4C180A89975F1328Eab2a7D5d8f11", // CODE
          "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72", // ENS
          "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", // BNB
          "0x4Fabb145d64652a948d72533023f6E7A623C7C53", // BUSD
          "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", // stETH
          "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", // SHIB
          "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI
          "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39", // HEX
          "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK
          "0x4d224452801ACEd8B2F0aebE155379bb5D594381", // APE
          "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32", // LDO
          "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", // AAVE
          "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", // MKR
        ],
      },
    ]);
    // console.log(response.result);
    return response.result;
  };

  return (
    <div className="w-full flex flex-col max-h-full p-4 items-center align-middle text-white bg-black ">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 p-8 my-16 flex flex-col gap-2 align-middle items-center justify-around
        shadow-2xl rounded-lg border-2 border-gray-400
        focus-within:ring-1
        focus-within:ring-blue-300
        "
      >
        <Input
          size="lg"
          text="text"
          placeholder="Enter your address here"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 m-2"
        />
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          className="p-4 mx-4 my-2"
          variant="outline"
        >
          Show me the Tokens
        </Button>
      </form>
      {tokens.length > 0 && (
        <div className="w-full p-4">
          <TableContainer>
            <Table variant="simple">
              <TableCaption>The Results</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Symbol</Th>
                  <Th isNumeric>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tokens.map((token, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{token.name}</Td>
                      <Td>{token.symbol}</Td>
                      <Td isNumeric>
                        {ethers.utils.formatUnits(token.amount, token.decimals)}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      <Meme />
      <Footer />
    </div>
  );
}

export default App;

//@smilewithkhushi on github
