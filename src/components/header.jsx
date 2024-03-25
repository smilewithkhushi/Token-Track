import React from "react";
import { Image, Stack } from "@chakra-ui/react";


const Header = () => {
  //header section for a token generator website, where user adds it wallet address and all the tokens with transaction history as displayed to the user

  return (
    <div className="w-full flex flex-row flex-wrap justify-between items-center p-2">
   
      <div className="p-8 py-10">
        <h1 className="text-5xl font-bold text-white bg-black ">
          Token Generator
        </h1>
        <p className="text-lg font-bold text-white bg-black my-8">Add your wallet address to view all the tokens and their transaction
          history
        </p>
      </div>
      <div className="w-full md:w-1/3 flex flex-row justify-around">
        <Image
        width={300}
        height={400}
          src="../assets/tokens1.jpg"
          alt="Web3 and Tokens"
          className="shadow-sm rounded-3xl shadow-gray-600 
          hover:shadow-lg hover:shadow-gray-400
          transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Header;

//@smilewithkhushi on github
