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

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function App() {
  const { ethers, JsonRpcProvider } = require("ethers");
  const { utils } = require("ethers");

  //State variables
  const [tokens, setTokens] = useState([]);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

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
        setError(true);
        console.log("throwing:: Error fetching tokens: ", err);
      });
  };

  //Function to fetch tokens
  const fetchTokens = async () => {
    if (!utils.isAddress(address)) {
      alert("Please enter a valid Ethereum wallet address");
      return;
    }

    //provider created for etherjs version 5.4
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.QUICKNODE_RPC_URL
    );

    console.log("provider created");

    const tokens = await provider.send("qn_getWalletTokenBalance", {
      wallet: address,
      contracts: [
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
        "0xdAC17F958D2ee523a2206206994597C13D831ec7", //USDT
        "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", //MATIC
        "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72", //ENS
      ],
    });
    console.log("tokens = ", tokens);
    return tokens;
  };

  return (
    <div className="w-full flex flex-col max-h-full p-4  transition duration-500 ease-in-out items-center align-middle text-white bg-black ">
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
      {error && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}
    
 
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
