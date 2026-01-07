import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Images
import ArunaImg from "../../assets/images/private/ArunaKumari.png";
import EshwarImg from "../../assets/images/private/EshwarNagaraj.png";
import SruthiImg from "../../assets/images/private/SruthiPasupuletiGrpTeam.png";
import ChaitanyaImg from "../../assets/images/private/ChaitanyaReddy.png";
import ArunImg from "../../assets/images/private/ArunPatil.png";
import MuraliImg from "../../assets/images/private/MuraliKumar.png";
import SowmyaImg from "../../assets/images/private/SowmyaRanjan.png";

const MotionBox = motion(Box);

const teamMembers = [
  {
    name: "Eshwar Nagaraj",
    role:
      "Founder at GrapplTech • OneDayCoder • DigiGlobe Solutions",
    location: "Chennai, Tamil Nadu",
    quote:
      "GrapplTech started with a simple but powerful belief — education should move as fast as ambition. I wanted to build a platform where learners don’t just consume content, but transform into confident professionals. Every initiative we take is rooted in real-world impact, clarity of purpose, and relentless execution.",
    image: EshwarImg,
  },
  {
    name: "Aruna Kumari",
    role: "Software Engineer at Capgemini • CSM at GrapplTech",
    location: "Salem, Tamil Nadu",
    quote:
      "What excited me about GrapplTech was the chance to shape something meaningful from the ground up. This isn’t just another ed-tech platform — it’s a movement that empowers learners to believe in their potential and build careers with confidence, clarity, and courage.",
    image: ArunaImg,
  },
  {
    name: "Sruthi Pasupuleti",
    role: "Product Design at GrapplTech",
    location: "Anantapur, India",
    quote:
      "Design at GrapplTech goes far beyond aesthetics. Every interaction, layout, and visual decision is crafted to reduce friction and amplify learning. My goal is to ensure that every learner feels guided, inspired, and confident the moment they land on our platform.",
    image: SruthiImg,
  },
  {
    name: "Chaitanya Reddy",
    role: "Senior Data Engineer at Expedia Group • Engineering at GrapplTech",
    location: "Bangalore, India",
    quote:
      "I joined GrapplTech because it brings structure and direction to aspiring engineers. With real datasets, real challenges, and real expectations, we’re preparing learners for what the industry actually demands — not just what textbooks describe.",
    image: ChaitanyaImg,
  },
  {
    name: "Arun Patil",
    role: "Automation Test Analyst at Cognizant • CRM at GrapplTech",
    location: "Ontorio, Canada",
    quote:
      "Technology becomes powerful when it solves real-world problems. At GrapplTech, we ensure learners understand how their skills apply beyond theory — whether it’s maps, data, or systems that influence decisions at scale.",
    image: ArunImg,
  },
  {
    name: "Murali Kumar",
    role: "GenAI Engineer at Cognizant • Engineering at GrapplTech",
    location: "Chennai, India",
    quote:
      "AI is reshaping how we work and think. Through GrapplTech, my focus is to demystify GenAI and help learners build intuition, ethics, and confidence while working with intelligent systems that define the future.",
    image: MuraliImg,
  },
  {
    name: "Sowmya Ranjan",
    role: "Senior .Net Developer at Cognizant • Founding Engineer at GrapplTech",
    location: "Toronto, Canada",
    quote:
      "As a founding engineer, my responsibility goes beyond code. It’s about building scalable systems, strong foundations, and a culture where learning, experimentation, and ownership drive everything forward.",
    image: SowmyaImg,
  },
];

const TeamSlider = () => {
  const [index, setIndex] = useState(0);

  const bg = useColorModeValue("white", "gray.800");
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const roleColor = useColorModeValue("#028EC4", "#63B3ED");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5500); // smooth, readable pace

    return () => clearInterval(timer);
  }, []);

  const member = teamMembers[index];

  return (
    <Box
      w="100%"
      maxW="7xl"
      mx="auto"
      py={[12, 16]}
      px={[4, 8]}
      overflow="hidden"
    >
      <MotionBox
        key={index}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Flex
          direction={["column", "row"]}
          align="center"
          gap={[8, 12]}
          bg={bg}
          borderRadius="3xl"
          boxShadow="2xl"
          p={[6, 10]}
        >
          {/* IMAGE */}
          <Box flexShrink={0}>
            <Image
              src={member.image}
              alt={member.name}
              boxSize={["220px", "280px"]}
              objectFit="contain"
              borderRadius="2xl"
            />
          </Box>

          {/* CONTENT */}
          <VStack align="flex-start" spacing={4}>
            <Heading
              fontFamily="Bricolage Grotesque"
              fontSize={["2xl", "3xl"]}
            >
              {member.name}
            </Heading>

            <Text fontWeight="600" color={roleColor}>
              {member.role}
            </Text>

            <Text fontSize="sm" color={textMuted}>
              📍 {member.location}
            </Text>

            <Text
              fontSize="md"
              color={textMuted}
              lineHeight="1.8"
              fontStyle="italic"
            >
              “{member.quote}”
            </Text>
          </VStack>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default TeamSlider;