import {
  Container,
  Center,
  Text,
  Box,
  VStack,
  Heading,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";

const Careers = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="6xl" py={[4, 4]}>
      {/* ===== PAGE HEADING ===== */}
      <Center flexDirection="column" mb={14}>
        <Text
          fontSize={["4xl", "5xl", "7xl"]}
          fontWeight="800"
          lineHeight="1.1"
          color={useColorModeValue("black", "white")}
          fontFamily="Bricolage Grotesque"
          textAlign="center"
        >
          Careers at GrapplTech
        </Text>
        <AnimatedUnderline1 />

        <Text
          mt={6}
          maxW="4xl"
          textAlign="center"
          fontSize="lg"
          color={textMuted}
        >
          We’re building an execution-first tech ecosystem — and while we don’t
          have open roles right now, we’re always excited to meet people who
          want to build, learn, and grow with us.
        </Text>
      </Center>

      {/* ===== STATUS CARD ===== */}
      <Center>
        <Box
          bg={cardBg}
          p={[8, 10]}
          borderRadius="2xl"
          boxShadow="xl"
          maxW="4xl"
          w="100%"
          textAlign="center"
        >
          <Badge
            mb={4}
            px={4}
            py={2}
            fontSize="sm"
            colorScheme="yellow"
            borderRadius="full"
          >
            No Open Positions Right Now
          </Badge>

          <Heading
            fontFamily="Bricolage Grotesque"
            fontSize={["2xl", "3xl"]}
            mb={4}
          >
            But we’d still love to hear from you
          </Heading>

          <Text fontSize="md" color={textMuted} mb={6}>
            GrapplTech is growing steadily, and new opportunities open up as we
            expand our products, programs, and partnerships. If you believe
            your skills align with what we’re building, we encourage you to
            join our talent pool.
          </Text>

          <VStack spacing={4}>
            <Text fontSize="md" color={textMuted}>
              📩 Send your resume and a short introduction to
            </Text>

            <Text
              fontSize="lg"
              fontWeight="700"
              color={useColorModeValue("blue.600", "blue.300")}
            >
              careers@grappltech.in
            </Text>

            <Text fontSize="sm" color={textMuted}>
              We’ll reach out when a role matching your profile opens up.
            </Text>
          </VStack>
        </Box>
      </Center>

      {/* ===== WHY WORK WITH US ===== */}
      <Center mt={20}>
        <Box maxW="5xl" textAlign="center">
          <Heading
            fontFamily="Bricolage Grotesque"
            fontSize={["2xl", "3xl"]}
            mb={4}
          >
            Why GrapplTech?
          </Heading>

          <Text fontSize="md" color={textMuted}>
            At GrapplTech, we value ownership, execution, and continuous
            learning. We work closely with startups, educators, and learners to
            solve real-world problems — not just ship features.
            <br />
            <br />
            When you join us, you don’t just take up a role — you help shape the
            ecosystem we’re building.
          </Text>
        </Box>
      </Center>
    </Container>
  );
};

export default Careers;
