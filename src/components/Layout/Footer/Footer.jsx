import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.800" minH={"10vh"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading
            class="mainHeading1"
            children="All Rights Reserved"
            color={"white"}
          />
          {/* <h1 className="mainHeading1">GrapplTech</h1> */}
          <Heading
            size="sm"
            textAlign={"center"}
            fontWeight={"200"}
            children="Copyright © 2025 | GrapplTech"
            color={"white"}
          />
        </VStack>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Text>Mail : support@grappltech.in</Text>
          <Text>careers@grappltech.in</Text>
          <Text>Phone : +91 8099523442</Text>
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color={"white"}
          fontSize="50"
        >
          <a
            href="https://www.linkedin.com/company/internpixel/"
            target={"blank"}
          >
            {/* <TiSocialYoutubeCircular /> */}
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://twitter.com/GrapplTech" target={"blank"}>
            {/* <TiSocialInstagramCircular /> */}
            <TiSocialTwitter />
          </a>
          <a href="https://telegram.dog/internpixel" target={"blank"}>
            <FaTelegram />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
