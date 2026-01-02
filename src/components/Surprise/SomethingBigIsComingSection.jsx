import { Box, Flex, Text, Image, VStack, Badge, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
  className="headerddd"
  fontSize={{ base: "5xl", md: "5xl" }}
  color={"blue.600"}
  textAlign={"center"}
  fontWeight="bold"
>
  Full Stack Developer in 100 days
</Text>

          <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg>
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
