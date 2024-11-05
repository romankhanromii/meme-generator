import React from "react";

import image from "../assets/TrollFace.svg";
import { Flex } from "@radix-ui/themes";

const Header = () => {
  return (
    <header>
      <Flex
        justify="between"
        padding="2"
        style={{
          background: "linear-gradient(90deg, #672280, #A626D3)", // Example gradient
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          color: "#fff", // Text color for contrast (optional)
        }}
      >
        <Flex align="center" gap="2">
          <img src={image} alt="Troll face logo" width={40} height={40} />
          <h2>Meme Generator</h2>
        </Flex>
        <h2>My React App</h2>
      </Flex>
    </header>
  );
};

export default Header;
