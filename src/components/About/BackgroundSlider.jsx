import { Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import teamImage from "../../assets/images/Grpteam1.png"; // update path if needed

const MotionBox = motion(Box);

const images = [
  teamImage,
  teamImage,
  teamImage,
  teamImage,
  teamImage,
  teamImage,
  teamImage,
];

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change slide every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="relative"
      w="100%"
      h={["300px", "420px", "520px"]}
      overflow="hidden"
      borderRadius="2xl"
    >
      {/* SLIDER */}
      <AnimatePresence>
        <MotionBox
          key={index}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgImage={`url(${images[index]})`}
          bgSize="cover"
          bgPosition="center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* BLACK OVERLAY */}
      

      {/* OPTIONAL CONTENT */}
      <Box
        position="relative"
        zIndex={2}
        h="100%"
        display="flex"
        alignItems="center"
        px={[6, 10, 20]}
      >
        <Text
          fontSize={["2xl", "3xl", "5xl"]}
          fontWeight="800"
          color="white"
          fontFamily="Bricolage Grotesque"
          maxW="700px"
        >
          lorem2
        </Text>
      </Box>
    </Box>
  );
};

export default BackgroundSlider;
