import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <Box bg="blackAlpha.900" color="white" py={10} px={6}>
      <Stack
        direction={["column", "row"]}
        spacing={10}
        justify="space-between"
        align={["flex-start", "center"]}
      >
        {/* Column 1: Branding */}
        <VStack align="flex-start" spacing={4} maxW="400px">
  <Heading
  as="h1"
  fontSize={["3xl", "4xl", "5xl"]}
  fontWeight="extrabold"
  lineHeight="short"
  fontFamily='"Bricolage Grotesque", sans-serif'
  bgGradient="linear(to-r, teal.100, blue.400)"
  bgClip="text"
>
  GrapplTech
</Heading>


  <Text fontSize={["md", "lg"]} color="gray.300" fontWeight="medium">
    Empowering innovation, internships, and careers for the next-gen workforce.
  </Text>

  <Text fontSize="sm" color="gray.500">
    © {new Date().getFullYear()} GrapplTech. All rights reserved.
  </Text>
</VStack>


        {/* Column 2: Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Heading class="mainHeading1" size="sm" mb={2} textTransform="uppercase" color="teal.300">
            Quick Links
          </Heading>
          <ChakraLink as={Link} to="/bootcamps">Bootcamps</ChakraLink>
          <ChakraLink as={Link} to="/workshops">Workshops</ChakraLink>
          <ChakraLink as={Link} to="/portfolio-services">Portfolio Services</ChakraLink>
          <ChakraLink as={Link} to="/resumemaker">Resume Maker</ChakraLink>
          <ChakraLink as={Link} to="/partnerregistration">Partner Registration</ChakraLink>
          <ChakraLink as={Link} to="/about">About Us</ChakraLink>
          <ChakraLink as={Link} to="/contact">Contact</ChakraLink>
          <ChakraLink as={Link} to="/request">Request</ChakraLink>
        </VStack>

        {/* Column 3: Contact + Socials */}
        <VStack align="flex-start" spacing={2}>
          <Heading class="mainHeading1" size="sm" mb={2} textTransform="uppercase" color="teal.300">
            Contact Us
          </Heading>
          <Text fontSize="sm">📩 careers@grappltech.in</Text>
          <Text fontSize="sm">📩 partners-operations@grappltech.in</Text>
          <Text fontSize="sm">📩 hiring@grappltech.in</Text>
          <Text fontSize="sm">📩 support@grappltech.in</Text>
          <Text fontSize="sm">📞 +91 8099523442</Text>

          <HStack spacing={5} pt={3} fontSize="2xl">
            <a
              href="https://www.linkedin.com/company/grappltech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialLinkedinCircular />
            </a>
            <a
              href="https://twitter.com/GrapplTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialTwitter />
            </a>
            <a
    href="https://www.youtube.com/@GrapplTech%E0%B0%A4%E0%B1%86%E0%B0%B2%E0%B1%81%E0%B0%97%E0%B1%81"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube color="red" />
  </a>
          </HStack>
        </VStack>
      </Stack>

      <Divider my={6} borderColor="gray.700" />

      {/* Bottom Bar */}
      <Text fontSize="xs" textAlign="center" color="gray.500">
        Built with ❤️ by GrapplTech
      </Text>
    </Box>
  );
};

export default Footer;
