import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaCrown,
} from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdVoiceChat } from "react-icons/md";
import TeamSlider from "./TeamSlider";
import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";

const About = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="7xl" py={[4, 4]}>
      {/* ================= PAGE HEADING ================= */}
      <Center>
              <Text
                fontSize={["4xl", "4xl", "7xl"]}
                fontWeight="800"
                lineHeight="1.1"
                color={useColorModeValue("black", "white")}
                fontFamily="Bricolage Grotesque"
                textAlign="center"
                position="relative"
                zIndex={2}
                mt={6}
              >
                Our Fantastic Seven Team
              </Text>
            </Center>
<AnimatedUnderline1 />
      {/* ================= INTRO ================= */}
      <Center mt={10}>
        <Text
          maxW="4xl"
          textAlign="center"
          fontSize="lg"
          color={textMuted}
        >
          GrapplTech is a career-focused technology learning platform built to
          bridge the gap between education and real-world industry expectations.
          We help learners move from confusion to clarity — and from learning
          to meaningful tech careers.
        </Text>
      </Center>

      {/* ================= TEAM ================= */}
      <Box mt={20}>
        <Heading
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          mb={8}
        >
          Meet the Team Behind GrapplTech
        </Heading>
        <TeamSlider />
      </Box>

      {/* ================= OUR STORY ================= */}
      <Box mt={24}>
        <Center flexDirection="column">
          <Heading
            fontFamily="Bricolage Grotesque"
            textAlign="center"
          >
            Our Story
          </Heading>
          <AnimatedUnderline1 />
        </Center>

        <Center mt={8}>
          <Text maxW="4xl" textAlign="center" color={textMuted}>
            GrapplTech started with a simple observation — traditional education
            often fails to prepare learners for real industry demands.
            Certifications alone were not enough. Skills without direction
            lacked impact.
          </Text>
        </Center>

        <Center mt={6}>
          <Text maxW="4xl" textAlign="center" color={textMuted}>
            Since 2022, we’ve trained thousands of learners through structured
            bootcamps, hands-on projects, and mentor-led programs. Our learners
            have transitioned into internships, entry-level roles, and career
            pivots across multiple tech domains.
          </Text>
        </Center>

        <Center mt={6}>
          <Text maxW="4xl" textAlign="center" color={textMuted}>
            Today, GrapplTech partners with companies, mentors, and institutions
            to ensure learners are not just employable — but confident,
            industry-ready, and future-proof.
          </Text>
        </Center>
      </Box>

      {/* ================= VALUES ================= */}
      <Box mt={28}>
        <Center flexDirection="column" mb={14}>
          <Heading fontFamily="Bricolage Grotesque">
            Our Values
          </Heading>
          <AnimatedUnderline1 />
        </Center>

        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {[
            {
              icon: FaGraduationCap,
              title: "Education First",
              desc: "We prioritize learning outcomes over hype. Every program is built for real skill acquisition.",
            },
            {
              icon: FaUsers,
              title: "Community Driven",
              desc: "We believe growth accelerates when learners, mentors, and peers collaborate.",
            },
            {
              icon: FaLightbulb,
              title: "Innovation Mindset",
              desc: "We continuously adapt our programs to stay aligned with evolving industry needs.",
            },
            {
              icon: RiCustomerService2Line,
              title: "Learner-Centric",
              desc: "Every decision is evaluated based on how it improves the learner experience.",
            },
            {
              icon: FaCrown,
              title: "Ownership & Accountability",
              desc: "We take responsibility for outcomes, quality, and continuous improvement.",
            },
            {
              icon: MdVoiceChat,
              title: "Diversity & Inclusion",
              desc: "We value diverse perspectives and foster an environment where every voice matters.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              textAlign="center"
            >
              <Icon
                as={item.icon}
                boxSize={10}
                color="#028EC4"
                mb={4}
              />
              <Heading
                fontSize="lg"
                fontFamily="Bricolage Grotesque"
                mb={3}
              >
                {item.title}
              </Heading>
              <Text fontSize="sm" color={textMuted}>
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= CTA ================= */}
      <Center mt={24} flexDirection="column">
        <Heading
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          mb={4}
        >
          Join the GrapplTech Journey
        </Heading>
        <Text
          maxW="3xl"
          textAlign="center"
          color={textMuted}
          mb={8}
        >
          Whether you’re a learner, mentor, or partner — GrapplTech is built
          for those who want to grow with intention and impact.
        </Text>

         <Button
  as="a"
  href="https://tally.so/r/obeQab"
  target="_blank"
  rel="noopener noreferrer"
  size="lg"
  bg="#FFA900"
  color="black"
  borderRadius="none"
  px={10}
  _hover={{ bg: "gray.200" }}
  rightIcon={<span>→</span>}
>
  Let’s Talk
</Button>
      </Center>
    </Container>
  );
};

export default About;
