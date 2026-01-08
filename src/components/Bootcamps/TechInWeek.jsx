import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  HStack,
  VStack,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Center,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";
import GRPGSAP from "../../assets/images/GRPGSAP.png";
import GRPFigma from "../../assets/images/GRPFigma.png";
import GRPJava from "../../assets/images/GRPJava.png";
import GRPFlask from "../../assets/images/GRPFlask.png";
import GRPGenAI from "../../assets/images/GRPGenAI.png";
import GRPTailwind from "../../assets/images/GRPTailwind.png";
import GRPGit from "../../assets/images/GRPGit.png";

const PRIMARY = "#028EC4";

/* ---------- COURSE DATA ---------- */
const courses = [
  {
    title: "Figma for Real-World UI/UX",
    image: `${GRPFigma}`,
    instructor: "Sruthi Pasupuleti",
    originalPrice: 1999,
    rating: 4.7,
    reviews: 342,
    tags: ["Figma", "UI", "UX"],
    description:
      "Learn industry-ready UI/UX design workflows using Figma. Covers auto-layout, components, and real startup use-cases.",
    curriculum: [
      "Figma Basics",
      "Auto Layout",
      "Design Systems",
      "Real Project Walkthrough",
    ],
  },
  {
    title: "Core Java Foundations",
    image: `${GRPJava}`,
    instructor: "Eshwar Nagaraj",
    originalPrice: 2499,
    rating: 4.6,
    reviews: 410,
    tags: ["Java", "OOPS", "JVM"],
    description:
      "Build strong Java fundamentals with OOPS, JVM internals, and interview-oriented coding patterns.",
    curriculum: [
      "Java Syntax",
      "OOPS Concepts",
      "Collections",
      "Hands-on Coding",
    ],
  },
  {
    title: "GSAP: Advanced Web Animations",
    image: `${GRPGSAP}`,
    instructor: "Aruna Kumari",
    originalPrice: 1999,
    rating: 4.7,
    reviews: 219,
    tags: ["GSAP", "Animations", "Frontend", "UX"],
    description:
      "Create smooth, professional-grade animations using GSAP. Learn timelines, ScrollTrigger, and performance-friendly animation techniques.",
    curriculum: [
      "GSAP Core & Timelines",
      "ScrollTrigger & Page Animations",
      "Advanced Motion Techniques",
      "Real-World Animation Projects",
    ],
  },
  {
    title: "Git & GitHub for Real-World Teams",
    image: `${GRPGit}`,
    instructor: "Sowmya Ranjan",
    originalPrice: 1799,
    rating: 4.6,
    reviews: 364,
    tags: ["Git", "GitHub", "Version Control", "Collaboration"],
    description:
      "Master Git and GitHub the way real teams use it. Learn branching, pull requests, code reviews, and collaboration workflows used in startups and companies.",
    curriculum: [
      "Git Fundamentals & CLI",
      "Branching & Merging Strategies",
      "GitHub Workflows & Pull Requests",
      "Collaboration & Conflict Resolution",
    ],
  },
  {
    title: "Flask Backend APIs",
    image: `${GRPFlask}`,
    instructor: "Murali Kumar",
    originalPrice: 2299,
    rating: 4.6,
    reviews: 198,
    tags: ["Python", "Flask"],
    description:
      "Build REST APIs using Flask with database integration and deployment basics.",
    curriculum: [
      "Flask Fundamentals",
      "REST APIs",
      "Database Integration",
      "Mini Project",
    ],
  },
  {
    title: "GenAI Foundations",
    image: `${GRPGenAI}`,
    instructor: "Chaitanya Reddy",
    originalPrice: 2999,
    rating: 4.8,
    reviews: 356,
    tags: ["GenAI", "LLMs"],
    description:
      "Learn how generative AI works, prompt engineering, and real-world GenAI use cases.",
    curriculum: [
      "GenAI Basics",
      "Prompt Engineering",
      "LLMs",
      "Use-Case Exploration",
    ],
  },
  {
    title: "Tailwind CSS in Practice",
    image: `${GRPTailwind}`,
    instructor: "Sowmya Ranjan",
    originalPrice: 1499,
    rating: 4.5,
    reviews: 221,
    tags: ["Tailwind", "CSS"],
    description:
      "Rapidly build modern, responsive UIs using Tailwind CSS best practices.",
    curriculum: [
      "Utility-First CSS",
      "Responsive Layouts",
      "Dark Mode",
      "Landing Page Build",
    ],
  },
];

/* ---------- COURSE CARD ---------- */
const CourseCard = ({ course }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardBg = useColorModeValue("white", "gray.800");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-6px)", boxShadow: "2xl" }}
    >
      <Image src={course.image} alt={course.title} />

      <Box p={6}>
        <VStack align="start" spacing={3}>
          <Heading fontSize="lg" fontFamily="Bricolage Grotesque">
            {course.title}
          </Heading>

          <Text fontSize="sm" color={textMuted}>
            Instructor: <strong>{course.instructor}</strong>
          </Text>

          <HStack spacing={1}>
            <StarIcon color="#FFA900" />
            <Text fontWeight="600">
              {course.rating} ({course.reviews})
            </Text>
          </HStack>

          <Text fontSize="sm" color={textMuted}>
            {course.description}
          </Text>

          <HStack flexWrap="wrap">
            {course.tags.map((tag, i) => (
              <Tag key={i} size="sm" colorScheme="blue">
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>

          <HStack>
            <Text textDecoration="line-through" color="gray.500">
              ₹{course.originalPrice}
            </Text>
            <Text fontSize="xl" fontWeight="800" color={PRIMARY}>
              ₹499
            </Text>
          </HStack>

          <HStack pt={2}>
            <Button
              as="a"
              href="https://rzp.io/rzp/gX5g3FL"
              target="_blank"
              rel="noopener noreferrer"
              bg={PRIMARY}
              color="white"
              px={8}
              py={6}
              fontSize="md"
              borderRadius="full"
              _hover={{ bg: "#09537B", transform: "translateY(-2px)" }}
              _active={{ transform: "scale(0.98)" }}
            >
              Pay Now →
            </Button>

            <Button variant="outline" onClick={onOpen}>
              Curriculum
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* CURRICULUM MODAL */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{course.title} – Curriculum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start">
              {course.curriculum.map((item, i) => (
                <Text key={i}>• {item}</Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

/* ---------- PAGE ---------- */
const TechInWeek = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="7xl" py={4}>
      {/* HEADER */}
      <Center flexDirection="column">
        <Text
          fontSize={["4xl", "5xl", "7xl"]}
          fontWeight="800"
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          color={useColorModeValue("black", "white")}
        >
          Tech In Week
        </Text>
        <AnimatedUnderline1 />
        <Text mt={6} maxW="4xl" textAlign="center" color={textMuted}>
          Learn a complete tech skill in just 7 days. Designed for students,
          professionals, and builders who want fast, practical results.
        </Text>
      </Center>

      {/* COURSES */}
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </SimpleGrid>

      {/* FAQ */}
      <Box mt={24}>
        <Center flexDirection="column" mb={10}>
          <Heading fontFamily="Bricolage Grotesque">FAQs</Heading>
          <AnimatedUnderline1 />
        </Center>

        <Accordion allowToggle maxW="5xl" mx="auto">
          {[
            [
              "Is Tech In a Week beginner-friendly?",
              "Yes. Most courses start from basics.",
            ],
            [
              "Are sessions live or recorded?",
              "Live sessions with recordings provided.",
            ],
            [
              "Will I get a certificate?",
              "Yes, a GrapplTech completion certificate.",
            ],
            [
              "Can I attend after office hours?",
              "Yes, sessions are scheduled for evenings.",
            ],
            ["Is ₹499 the final price?", "Yes, no hidden charges."],
            ["Do I need prior experience?", "Not mandatory for most courses."],
            ["Will there be assignments?", "Yes, hands-on tasks included."],
            [
              "Is placement guaranteed?",
              "No guarantees, but strong skill exposure.",
            ],
            [
              "Can I access recordings later?",
              "Yes, limited-time access provided.",
            ],
            ["How do I get support?", "Dedicated WhatsApp & email support."],
          ].map(([q, a], i) => (
            <AccordionItem key={i}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={textMuted}>{a}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
};

export default TechInWeek;
