import React, { useState, useEffect } from "react";
import { Image, Stack } from "@chakra-ui/react";


const memes = [
  {
    id: 1,
    url: "../assets/meme1.png",
  },
  {
    id: 2,
    url: "../assets/meme2.jpg",
  },
  {
    id: 3,
    url: "../assets/meme3.jpg",
  }
];

const meme = () => {


  return (
    <div className="flex flex-row  transition duration-500 ease-in-out flex-wrap w-full justify-center gap-4 md:gap-8 my-10">
        {
          memes.map((meme) => (
            <Image
              key={meme.id}
              boxSize="250px"
              objectFit="cover"
              src={meme.url}
              alt="Web3 and Crypto Memes"
              className="rounded-3xl shadow-sm shadow-gray-600 hover:grayscale-5"
            />
          ))
        }

    </div>
  );
};

export default meme;

//@Smilewithkhushi on github
