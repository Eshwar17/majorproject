import {
  Container,
  Text,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";

const Contact = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const iframeBg = useColorModeValue("white", "transparent");

  // Load Tally embed script safely
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <Container maxW="7xl" py={[4, 4]}>
      {/* ===== PAGE HEADING ===== */}
      <Center flexDirection="column" mb={12}>
        <Text
          fontSize={["4xl", "5xl", "7xl"]}
          fontWeight="800"
          lineHeight="1.1"
          color={useColorModeValue("black", "white")}
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          mt={4}
        >
          Let’s Talk
        </Text>
        <AnimatedUnderline1 />
        <Text
          mt={6}
          maxW="3xl"
          textAlign="center"
          fontSize="lg"
          color={textMuted}
        >
          Whether you’re a startup looking to hire intern talent, a partner
          exploring collaboration, or a learner seeking opportunities —
          we’re happy to connect.
        </Text>
      </Center>

      {/* ===== TALLY EMBED ===== */}
      <Center>
        <Box
          w="100%"
          maxW="900px"
          bg={iframeBg}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="xl"
        >
          <iframe
            data-tally-src="https://tally.so/embed/obeQab?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="520"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Let’s Talk – GrapplTech"
            style={{
              border: "none",
            }}
          />
        </Box>
      </Center>

      {/* ===== FOOTNOTE ===== */}
      <Center mt={10}>
        <Text fontSize="sm" color={textMuted} textAlign="center">
          Prefer email? Reach us at{" "}
          <strong>partners-operations@grappltech.in</strong> or{" "}
          <strong>hiring@grappltech.in</strong>
        </Text>
      </Center>
    </Container>
  );
};

export default Contact;
