import { Box, Flex, Text, Image, VStack, Badge, Center, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimatedUnderline from "../Underlines/AnimatedUnderline";
import newLaunchImg from "../../assets/images/NewLaunchImage.png";

const SomethingBigIsComingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-15");

    const calculateTime = () => {
      const now = new Date();
      const diff = targetDate - now;
      const secondsLeft = Math.floor(diff / 1000);

      const days = Math.floor(secondsLeft / (24 * 60 * 60));
      const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 16 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Image */}
      <Image
        src={newLaunchImg}
        alt="New Launch"
        w={{ base: "80%", md: "40%" }}
        h="auto"
      />

      {/* Content */}
      <Box w={{ base: "100%", md: "50%" }} p={8} borderRadius="md">
        <VStack align="center">
          <Center mb={2}>
            <Badge
              colorScheme="yellow"
              px={4}
              py={2}
              rounded="full"
              fontSize="md"
              fontWeight="bold"
              shadow="md"
            >
              🌟 New Launch · Trial Phase
            </Badge>
          </Center>

          <Text
            fontSize={["4xl", "4xl", "7xl"]}
            fontWeight="800"
            lineHeight="1.1"
            color={useColorModeValue("black", "white")}
            fontFamily="Bricolage Grotesque"
            textAlign="center"
            position="relative"
            zIndex={2}
            mb={4}
          >
            Tech In Week by GrapplTech
          </Text>

          <AnimatedUnderline width="80%" />

          <Text
            fontSize="lg"
            color="gray.700"
            fontWeight="semibold"
            textAlign="center"
            lineHeight="1.8"
            px={[2, 6]}
          >
            ⚡ <b>Tech In Week</b> is GrapplTech’s brand-new learning initiative —  
            short, powerful <b>7-day tech bootcamps</b> designed to help you grasp
            a technology fast, build confidence, and actually <b>start building</b>.
            <br /><br />
            🧪 This is our <b>trial phase launch</b>, which means you get access to
            <b> premium-quality workshops at the lowest prices we’ll ever offer</b>.
            These introductory prices are valid only <b>till the end of March</b>.
            <br /><br />
            🎯 Each Tech In Week program is instructor-led, practical, and focused
            on real-world use cases — perfect for students, freshers, and working
            professionals who want to upskill without long commitments.
            <br /><br />
            👉 Explore all Tech In Week programs here:{" "}
            <a
              href="/techinweek"
              style={{
                color: "#F59E0B",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              View Tech In Week
            </a>
          </Text>

          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            color={"gray.600"}
            fontWeight="bold"
          >
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SomethingBigIsComingSection;
