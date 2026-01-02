import { Box, Flex, Text, Image, VStack, Badge, Center, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimatedUnderline from "../Underlines/AnimatedUnderline";

const SomethingBigIsComingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate the time left
    const today = new Date();
    const targetDate = new Date("2026-03-15"); // Replace with your target date
    const timeDifference = targetDate - today;
    const secondsLeft = Math.floor(timeDifference / 1000);

    const days = Math.floor(secondsLeft / (24 * 60 * 60));
    const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    setTimeLeft({ days, hours, minutes, seconds });

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const today = new Date();
      const timeDifference = targetDate - today;
      const secondsLeft = Math.floor(timeDifference / 1000);

      const days = Math.floor(secondsLeft / (24 * 60 * 60));
      const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 16 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Blurred Image on the left */}
      <Image
        src={
          "https://img.freepik.com/free-vector/flat-girl-headphones-table-talking-with-friends-online-young-woman-working-from-home-using-computer-group-video-conference-collective-virtual-team-building-with-clients-colleagues_88138-528.jpg?t=st=1717145564~exp=1717149164~hmac=3a51f3e1bf9e0c5f7c7a22dd8e531f4dda3a2db0d926ee54051b89bc73b9ab02&w=996"
        }
        alt="Remote work"
        w={{ base: "80%", md: "40%" }}
        h="auto"
      />

      {/* Text and Countdown on the right */}
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
    🌟 Premiere
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
          GrapplTech's Trailbazing Path
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
  🎓 At <b>GrapplTech</b>, we’re thrilled to bring you our flagship course —  
  <b>Full Stack Developer in 100 days</b>.  
  This is a <span style={{ color: "#2563eb" }}>LIVE course</span> where you’ll
  master full stack development with hands-on projects, expert mentorship, and
  real-world case studies. Whether you’re just starting your coding journey or
  aiming to level up your development skills, this program is designed to take you
  to the next level. 🚀
  <br /><br />
  👉 Seats are limited, so don’t miss out!  
  <br />
  <a
    href="/fullstack-supremacy"
    style={{
      color: "#F59E0B",
      fontWeight: "bold",
      textDecoration: "underline",
    }}
  >
    Next Batch Starts From October 15th 2025
  </a>
</Text>

          <Text fontSize={{ base: "3xl", md: "5xl" }} color={"gray.600"} fontWeight="bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SomethingBigIsComingSection;
