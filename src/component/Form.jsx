import { BookmarkIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import memeData from "../memeData";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);
  const [showMeme, setShowMeme] = useState(false); // New state to control meme display
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    if (allMemeImages.length === 0) return; // Check if memes are available

    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    setShowMeme(true); // Show meme when button is clicked
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <Flex
        gap="5"
        style={{
          margin: "2rem 2rem",
          flexDirection: "row",
        }}
      >
        <Flex style={{ flexDirection: "column", width: "50%" }}>
          <label htmlFor="top-text">Top text</label>
          <TextField.Root
            id="top-text"
            placeholder="Enter the top text"
            style={{ marginBottom: "0.5rem", width: "100%" }}
            onChange={handleInputChange}
            value={meme.topText}
            name="topText"
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
        </Flex>

        <Flex style={{ flexDirection: "column", width: "50%" }}>
          <label htmlFor="bottom-text">Bottom text</label>
          <TextField.Root
            id="bottom-text"
            placeholder="Enter the bottom text"
            style={{ marginBottom: "0.5rem", width: "100%" }}
            onChange={handleInputChange}
            value={meme.bottomText}
            name="bottomText"
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
        </Flex>
      </Flex>

      <Flex style={{ margin: "2rem", flexDirection: "column" }}>
        <Button
          style={{
            width: "100%",
            margin: "0",
            color: "white",
            background: "linear-gradient(90deg, #672280, #A626D3)",
          }}
          onClick={getMemeImage}
        >
          Get new meme image
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Flex>

      {showMeme && ( // Only show the image and text when showMeme is true
        <Box style={{ margin: "2rem" }}>
          <img className="meme--image" src={meme.randomImage} alt="Meme" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </Box>
      )}
    </>
  );
};

export default Form;
