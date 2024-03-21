import React from "react";

const Header = () => {
  //header section for a token generator website, where user adds it wallet address and all the tokens with transaction history as displayed to the user

  return (
    <div className="w-full flex flex-row justify-between items-center p-2">
      <div>
        <h1 className="text-3xl font-bold text-white bg-black p-4">
          Token Generator
        </h1>
        <p className="text-lg font-bold text-white bg-black p-4">
          Add your wallet address to view all the tokens and their transaction
          history
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Header;

//@smilewithkhushi on github
