import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<VStack backgroundColor={"white"} borderRadius='lg' >
                <Image src={imageSrc} borderRadius='lg'>
                </Image>
                <VStack align="left" spacing={3} mt={2} p={5}>
                   <Heading size='md' color={"blackAlpha.800"}>{title}</Heading>
                  <Text color={"blackAlpha.800"}>{description}</Text>
                  <HStack>
                    <Text color={"blackAlpha.800"}>See more</Text>
                  <a ><FontAwesomeIcon icon={faArrowRight} size="1x" style={{ color: "black" }} /></a>
                  </HStack>
                  </VStack>
                 </VStack>
                 );
                };

export default Card;
