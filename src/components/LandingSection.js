import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Dulmini!";
const bio1 = "A Software Developer";
const bio2 = "Passionate about writing clean code";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
    <VStack spacing={4}>
      <Avatar
        borderRadius='full'
        boxSize='150px'
        
        alt='Profile pic'z
      />
      <Heading as='h5' size='sm'>{greeting}</Heading>
      <Heading as='h2' size='2xl'>{bio1}</Heading>
      <Heading as='h2' size='2xl'>{bio2}</Heading>
      </VStack>
    

  </FullScreenSection>
);

export default LandingSection;
