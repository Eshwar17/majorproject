import {
  Box,
  Container,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Badge,
  List,
  Divider,
  ListItem,
  Image,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiGreensock,
  SiMongodb,
  SiFlask,
  SiPostgresql,
} from "react-icons/si";
import {
  FaUsers,
  FaClock,
  FaRocket,
  FaBuilding,
} from "react-icons/fa";

import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";
import HireToBuild from "../../assets/images/HireToBuild.gif";
import EarlyStage from "../../assets/images/EarlStage.png";
import GrowthStage from "../../assets/images/GrowthStage.png";
import Scalable from "../../assets/images/ScalableStartups.png";

const PRIMARY = "#028EC4";

const Outsourcing = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box w="100%" overflowX="hidden">
      <Container maxW="7xl" py={4} overflowX="hidden">

        {/* ================= PAGE HEADING ================= */}
        <Center>
          <Text
            fontSize={["4xl", "4xl", "7xl"]}
            fontWeight="800"
            lineHeight="1.1"
            fontFamily="Bricolage Grotesque"
            textAlign="center"
            color={useColorModeValue("black", "white")}
            mt={6}
          >
            Hire-to-Build Program
          </Text>
        </Center>

        <Box maxW="100%" overflow="hidden">
          <AnimatedUnderline1 />
        </Box>

        {/* ================= HERO ================= */}
        <Center pt={6} flexDirection="column">
          <Image
            src={HireToBuild}
            w="100%"
            maxW={["90%", "70%", "45%"]}
            objectFit="contain"
          />

          <Text mt={8} maxW="5xl" textAlign="center" fontSize="lg" color={textMuted}>
            GrapplTech enables startups to build faster by deploying
            <strong> pre-vetted, internship-ready talent</strong>. We eliminate
            hiring friction so founders can stay focused on product, growth,
            and execution — not resumes.
          </Text>

          <Badge mt={6} px={4} py={2} colorScheme="green" fontSize="md">
            ⭐ 4.8 Rated on AmbitionBox
          </Badge>
        </Center>

        {/* ================= TRUST METRICS ================= */}
        <SimpleGrid columns={[1, 2, 4]} spacing={8} mt={20}>
          {[
            { label: "Interns Deployed", value: "400+", icon: FaUsers },
            { label: "Startup Clients", value: "10+", icon: FaBuilding },
            { label: "Avg Engagement", value: "3–9 Months", icon: FaClock },
            { label: "Hiring Speed", value: "7–14 Days", icon: FaRocket },
          ].map((item, i) => (
            <Box
              key={i}
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              textAlign="center"
              boxShadow="lg"
            >
              <Icon as={item.icon} boxSize={9} color={PRIMARY} mb={4} />
              <Heading fontFamily="Bricolage Grotesque" fontSize="3xl" color={PRIMARY}>
                {item.value}
              </Heading>
              <Text fontWeight="600">{item.label}</Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* ================= DOMAINS ================= */}
       {/* ================= TECHNOLOGIES ================= */}
<Box mt={28} bg={sectionBg} p={[6, 10]} borderRadius="3xl">
  <Center flexDirection="column" mb={10}>
    <Heading fontFamily="Bricolage Grotesque" textAlign="center">
      Technologies We Are Good At
    </Heading>
    <AnimatedUnderline1 />
    <Text
      mt={4}
      textAlign="center"
      maxW="4xl"
      color={textMuted}
      fontSize="lg"
    >
      Our intern talent pool is trained and evaluated on modern, production-ready
      technologies used by fast-moving startups and product teams.
    </Text>
  </Center>

  <SimpleGrid columns={[2, 3, 4, 6]} spacing={6}>
    {[
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ].map((tech, i) => (
      <Box
        key={i}
        bg={cardBg}
        p={6}
        borderRadius="xl"
        textAlign="center"
        boxShadow="md"
        _hover={{
          transform: "translateY(-6px)",
          boxShadow: "xl",
        }}
        transition="all 0.25s ease"
      >
        <Icon
          as={tech.icon}
          boxSize={10}
          color={tech.color}
          mb={3}
        />
        <Text fontWeight="600" fontSize="md">
          {tech.name}
        </Text>
      </Box>
    ))}
  </SimpleGrid>

  <Center mt={10}>
    <Text
      maxW="4xl"
      textAlign="center"
      color={textMuted}
      fontSize="md"
    >
      From frontend performance to backend scalability and database reliability,
      our interns are matched based on real-world tech stack requirements —
      not generic resumes.
    </Text>
  </Center>
</Box>

        {/* ================= PRICING ================= */}
        <Box mt={32}>
          <Center flexDirection="column" mb={12}>
            <Heading fontFamily="Bricolage Grotesque" textAlign="center">
              Transparent Commission-Based Pricing
            </Heading>
            <AnimatedUnderline1 />
          </Center>

          <Text
            maxW="5xl"
            mx="auto"
            textAlign="center"
            color={textMuted}
            mb={14}
            fontSize="lg"
          >
            Startups pay interns directly. GrapplTech charges a service
            commission for sourcing, screening, onboarding, coordination,
            and performance tracking — no hidden fees.
          </Text>

          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            {/* EARLY STAGE */}
            <Box bg={cardBg} borderRadius="2xl" boxShadow="2xl" overflow="hidden">
              <Box
                h="160px"
                bgImage={`url(${EarlyStage})`}
                bgSize="cover"
                bgPosition="center"
              />
              <Box p={8}>
                <Heading fontSize="xl">Early-Stage Startups</Heading>
                <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
                  18% – 22%
                </Text>
                <Text mt={2} color={textMuted}>
                  MVP & pre-seed teams hiring 1–2 interns
                </Text>
                <Divider my={5} />
                <List spacing={2} color={textMuted}>
                  <ListItem>✔ Human-vetted candidates</ListItem>
                  <ListItem>✔ Role-specific screening</ListItem>
                  <ListItem>✔ Onboarding support</ListItem>
                  <ListItem>✔ Monthly performance check</ListItem>
                </List>
              </Box>
            </Box>

            {/* GROWTH STAGE */}
            <Box
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="2xl"
              overflow="hidden"
              border={`2px solid ${PRIMARY}`}
            >
              <Box
                h="160px"
                bgImage={`url(${GrowthStage})`}
                bgSize="cover"
                bgPosition="center"
              />
              <Box p={8}>
                <Badge colorScheme="blue" mb={2}>
                  Most Chosen
                </Badge>
                <Heading fontSize="xl">Growth-Stage Startups</Heading>
                <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
                  14% – 18%
                </Text>
                <Text mt={2} color={textMuted}>
                  Scaling teams hiring 3–5 interns
                </Text>
                <Divider my={5} />
                <List spacing={2} color={textMuted}>
                  <ListItem>✔ Priority sourcing</ListItem>
                  <ListItem>✔ Dedicated account manager</ListItem>
                  <ListItem>✔ Replacement support</ListItem>
                  <ListItem>✔ Progress reports</ListItem>
                </List>
              </Box>
            </Box>

            {/* BULK / LONG TERM */}
            <Box bg={cardBg} borderRadius="2xl" boxShadow="2xl" overflow="hidden">
              <Box
                h="160px"
                bgImage={`url(${Scalable})`}
                bgSize="cover"
                bgPosition="center"
              />
              <Box p={8}>
                <Heading fontSize="xl">Bulk / Long-Term Hiring</Heading>
                <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
                  10% – 14%
                </Text>
                <Text mt={2} color={textMuted}>
                  6+ interns or 6+ month engagements
                </Text>
                <Divider my={5} />
                <List spacing={2} color={textMuted}>
                  <ListItem>✔ Custom hiring pipeline</ListItem>
                  <ListItem>✔ Dedicated talent coordinator</ListItem>
                  <ListItem>✔ Conversion to full-time</ListItem>
                  <ListItem>✔ Cost optimization</ListItem>
                </List>
              </Box>
            </Box>
          </SimpleGrid>

          <Center mt={10}>
            <Badge px={5} py={3} fontSize="md" colorScheme="blue">
              Example: Intern stipend ₹15,000 → Commission applied as %
            </Badge>
          </Center>
        </Box>

        {/* ================= FAQ ================= */}
        <Box mt={36}>
          <Center flexDirection="column" mb={12}>
            <Heading fontFamily="Bricolage Grotesque">
              Startup FAQs
            </Heading>
            <AnimatedUnderline1 />
          </Center>

          <Accordion allowToggle maxW="5xl" mx="auto">
            {[
              {
                q: "Can interns be converted to full-time?",
                a: "Yes. There are no restrictions after the internship.",
              },
              {
                q: "What if an intern underperforms?",
                a: "Replacement support is provided as per engagement terms.",
              },
              {
                q: "Are roles remote?",
                a: "Mostly remote. On-site roles are supported when required.",
              },
              {
                q: "Who manages interns?",
                a: "GrapplTech remains the coordination layer throughout.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel color={textMuted}>
                  {faq.a}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {/* ================= CTA ================= */}
        <Center mt={36} flexDirection="column">
          <Heading fontFamily="Bricolage Grotesque" textAlign="center">
            Build Faster Without Hiring Risk
          </Heading>
          <Text mt={4} maxW="3xl" textAlign="center" color={textMuted}>
            Let GrapplTech power your startup with reliable intern talent —
            without long-term commitments.
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
    </Box>
  );
};

export default Outsourcing;
