import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const bg = "black";
  const textMuted = "gray.400";

  return (
    <Box bg={bg} color="white" px={[1, 10, 20]} pt={20} pb={10} position="relative">
      {/* ================= TOP CONTENT ================= */}
      <Stack
        direction={["column", "row"]}
        justify="space-between"
        align={["flex-start", "flex-start"]}
        spacing={16}
        zIndex={2}
        position="relative"
      >
        {/* LEFT BLOCK */}
        <VStack align="flex-start" spacing={6} p={6} maxW="520px">
          <Heading
            fontFamily="Bricolage Grotesque"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="900"
            lineHeight="1.2"
            color={"white"}
          >
            Grapple First. <br />
            Execute Better.
          </Heading>

          <Button
  as="a"
  href="https://tally.so/r/obeQab"
  target="_blank"
  rel="noopener noreferrer"
  size="lg"
  bg="white"
  color="black"
  borderRadius="none"
  px={10}
  _hover={{ bg: "gray.200" }}
  rightIcon={<span>→</span>}
>
  Let’s Talk
</Button>


          <Box p={6}>
            <Text fontSize="sm" color={textMuted}>
              Reach out us via:
            </Text>
            <Text fontSize="md" fontWeight="600">
              support@grappltech.in
            </Text>
          </Box>
        </VStack>

        {/* RIGHT BLOCK */}
        <Stack direction={["column", "row"]} p={6} spacing={20}>
          {/* NAV LINKS */}
          <VStack align="flex-start" spacing={2}>
            {["Bootcamps", "About", "Proofolio", "Careers", "Contact", "Partner with us"].map(
              (item) => (
                <ChakraLink
                  key={item}
                  as={Link}
                  to={`/${item.toLowerCase()}`}
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  {item}
                </ChakraLink>
              )
            )}
          </VStack>

          {/* SOCIAL + LEGAL */}
          <VStack align="flex-start" spacing={3}>
            <ChakraLink href="https://www.linkedin.com/company/grappltech/" isExternal>
              LinkedIn ↗
            </ChakraLink>
            <ChakraLink href="https://twitter.com/GrapplTech" isExternal>
              Twitter ↗
            </ChakraLink>
            <ChakraLink
              href="https://www.youtube.com/@GrapplTech%E0%B0%A4%E0%B1%86%E0%B0%B2%E0%B1%81%E0%B0%97%E0%B1%81"
              isExternal
            >
              YouTube ↗
            </ChakraLink>

            <Box pt={6}>
              <Text fontSize="sm">India, USA</Text>
              <Text fontSize="sm">Remote-first</Text>
            </Box>

            <Box pt={4}>
              <Text fontSize="sm">Terms & Conditions</Text>
              <Text fontSize="sm">Privacy Policy</Text>
            </Box>
          </VStack>
        </Stack>
      </Stack>

      {/* ================= HUGE BACKGROUND TEXT ================= */}
      {/* ================= HUGE BACKGROUND TEXT ================= */}



      {/* ================= BOTTOM LINE ================= */}
      <Box p={6}>
        <Text fontSize="xs" color={textMuted}>
          © {new Date().getFullYear()} GrapplTech. Built with intent.
        </Text>
      </Box>

      <Box
  mt={4}
  position="relative"
  overflow="hidden"
  zIndex={1}
  textAlign="center"
>
  <Text
    fontFamily="Bricolage Grotesque"
    fontSize="clamp(4rem, 18vw, 32rem)"
    fontWeight="800"
    lineHeight="0.9"
    letterSpacing="-0.02em"
    color={"white"}
    userSelect="none"
    whiteSpace={["normal", "nowrap"]}
    wordBreak="break-word"
  >
    grappltech
  </Text>
</Box>
    </Box>

    
  );
};

export default Footer;
