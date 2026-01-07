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
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaMoneyBillWave,
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
    <Container maxW="7xl" py={4}>
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
                    Hire-to-Build Program
                  </Text>
                </Center>
                <AnimatedUnderline1 />
      {/* ================= HERO ================= */}
      <Center pt={4} flexDirection="column">

        <Image src={HireToBuild} maxW={["90%", "70%", "45%"]} />
     
        <Text
          mt={8}
          maxW="5xl"
          textAlign="center"
          fontSize="lg"
          color={textMuted}
        >
          GrapplTech helps startups execute faster by deploying
          <strong> vetted, internship-ready talent</strong>.
          We remove hiring friction so founders can focus on
          product, traction, and growth — not resumes and interviews.
        </Text>

        <Badge
          mt={6}
          px={4}
          py={2}
          colorScheme="green"
          fontSize="md"
          borderRadius="full"
        >
          ⭐ 4.8 Rated on AmbitionBox
        </Badge>
      </Center>

      {/* ================= TRUST METRICS ================= */}
<SimpleGrid columns={[1, 2, 4]} spacing={8} mt={20}>
  {[
    {
      label: "Interns Deployed",
      value: "400+",
      icon: FaUsers,
      sub: "Across engineering, data, design & product roles",
    },
    {
      label: "Startup Clients",
      value: "10+",
      icon: FaBuilding,
      sub: "Early-stage to growth-stage startups",
    },
    {
      label: "Avg Engagement",
      value: "3–9 Months",
      icon: FaClock,
      sub: "Flexible durations based on startup needs",
    },
    {
      label: "Hiring Speed",
      value: "7–14 Days",
      icon: FaRocket,
      sub: "From requirement to intern onboarding",
    },
  ].map((item, i) => (
    <Box
      key={i}
      bg={cardBg}
      p={8}
      borderRadius="2xl"
      textAlign="center"
      boxShadow="lg"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
      }}
      transition="all 0.25s ease"
    >
      <Icon
        as={item.icon}
        boxSize={9}
        color={PRIMARY}
        mb={4}
      />

      <Heading
        fontFamily="Bricolage Grotesque"
        fontSize="3xl"
        color={PRIMARY}
        lineHeight="1"
      >
        {item.value}
      </Heading>

      <Text
        mt={2}
        fontWeight="600"
        fontSize="md"
      >
        {item.label}
      </Text>

      <Text
        mt={2}
        fontSize="sm"
        color={textMuted}
      >
        {item.sub}
      </Text>
    </Box>
  ))}
</SimpleGrid>

      {/* ================= DOMAINS ================= */}
      <Box mt={28} bg={sectionBg} p={[6, 10]} borderRadius="3xl">
        <Center flexDirection="column" mb={10}>
          <Heading fontFamily="Bricolage Grotesque">
            Domains We Outsource Interns For
          </Heading>
          <AnimatedUnderline1 />
          <Text mt={4} textAlign="center" maxW="4xl" color={textMuted}>
            Our talent pool is aligned with real startup needs — product, data,
            growth, and execution-focused roles.
          </Text>
        </Center>

        <SimpleGrid columns={[1, 2, 4]} spacing={6}>
          {[
            "Full Stack Development",
            "Frontend (React / Next.js)",
            "Backend (Node / Java / Python)",
            "Data Analytics",
            "Data Engineering",
            "Machine Learning / GenAI",
            "UI/UX Design",
            "DevOps & Cloud",
          ].map((domain, i) => (
            <Box
              key={i}
              bg={cardBg}
              p={5}
              borderRadius="xl"
              textAlign="center"
              boxShadow="md"
            >
              <Icon as={FaLaptopCode} color={PRIMARY} boxSize={6} mb={2} />
              <Text fontWeight="600">{domain}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= ROI COMPARISON ================= */}
      <Box mt={28}>
        <Center flexDirection="column" mb={12}>
          <Heading fontFamily="Bricolage Grotesque">
            ROI: Internship Outsourcing vs Full-Time Hiring
          </Heading>
          <AnimatedUnderline1 />
        </Center>

        <SimpleGrid columns={[1, 2]} spacing={10}>
          {/* FULL TIME */}
          <Box bg={cardBg} p={8} borderRadius="2xl" boxShadow="lg">
            <Center mb={4}>
              <Icon as={FaMoneyBillWave} boxSize={8} color="red.400" />
            </Center>
            <Heading fontSize="xl" textAlign="center" mb={4}>
              Traditional Full-Time Hiring
            </Heading>
            <List spacing={3} color={textMuted}>
              <ListItem>❌ Long hiring cycles (30–60 days)</ListItem>
              <ListItem>❌ High fixed salary commitments</ListItem>
              <ListItem>❌ PF, insurance, compliance overhead</ListItem>
              <ListItem>❌ Risky early-stage investment</ListItem>
              <ListItem>❌ Hard to scale up/down</ListItem>
            </List>
          </Box>

          {/* INTERN */}
          <Box bg={cardBg} p={8} borderRadius="2xl" boxShadow="lg">
            <Center mb={4}>
              <Icon as={FaChartLine} boxSize={8} color="green.400" />
            </Center>
            <Heading fontSize="xl" textAlign="center" mb={4}>
              GrapplTech Internship Outsourcing
            </Heading>
            <List spacing={3} color={textMuted}>
              <ListItem>✅ Interns onboarded in 7–14 days</ListItem>
              <ListItem>✅ Pay only monthly stipend</ListItem>
              <ListItem>✅ Zero payroll & compliance burden</ListItem>
              <ListItem>✅ Low-risk, high-output model</ListItem>
              <ListItem>✅ Convert to full-time if proven</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>

      {/* ================= ADVANCED PRICING ================= */}
<Box mt={32}>
  <Center flexDirection="column" mb={12}>
    <Heading fontFamily="Bricolage Grotesque" textAlign="center">
      Transparent, Scalable Pricing for Startups
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
    You pay interns directly. GrapplTech charges a transparent service
    commission that covers sourcing, vetting, onboarding, and ongoing
    coordination — ensuring zero hiring friction and predictable costs.
  </Text>

  <SimpleGrid columns={[1, 1, 3]} spacing={10}>
    {/* ===== EARLY STAGE ===== */}
    <Box
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="2xl"
      overflow="hidden"
      _hover={{ transform: "translateY(-6px)", boxShadow: "3xl" }}
      transition="all 0.3s ease"
    >
      <Box
        h="160px"
         bgImage={`url(${EarlyStage})`}
        bgSize="cover"
        bgPosition="center"
      />
      <Box p={8}>
        <Heading fontSize="xl" mb={2}>
          Early-Stage Startups
        </Heading>

        <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
          18% – 22%
        </Text>

        <Text mt={2} color={textMuted}>
          Ideal for MVP, pre-seed & idea-stage startups hiring
          <strong> 1–2 interns</strong>.
        </Text>

        <Divider my={5} />

        <Text fontWeight="600" mb={3}>
          What’s Included
        </Text>
        <List spacing={2} color={textMuted}>
          <ListItem>✔ Human-vetted intern profiles</ListItem>
          <ListItem>✔ Role-specific screening</ListItem>
          <ListItem>✔ Interview coordination</ListItem>
          <ListItem>✔ Onboarding & kickoff support</ListItem>
          <ListItem>✔ Basic performance tracking</ListItem>
        </List>
      </Box>
    </Box>

    {/* ===== GROWTH STAGE ===== */}
    <Box
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="2xl"
      overflow="hidden"
      border={`2px solid ${PRIMARY}`}
      _hover={{ transform: "translateY(-6px)", boxShadow: "3xl" }}
      transition="all 0.3s ease"
    >
      <Box
        h="160px"
         bgImage={`url(${GrowthStage})`}
        bgSize="cover"
        bgPosition="center"
      />
      <Box p={8}>
        <Badge colorScheme="blue" mb={3}>
          Most Chosen
        </Badge>

        <Heading fontSize="xl" mb={2}>
          Growth-Stage Startups
        </Heading>

        <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
          14% – 18%
        </Text>

        <Text mt={2} color={textMuted}>
          For scaling teams hiring
          <strong> 3–5 interns</strong> across multiple roles.
        </Text>

        <Divider my={5} />

        <Text fontWeight="600" mb={3}>
          What’s Included
        </Text>
        <List spacing={2} color={textMuted}>
          <ListItem>✔ Priority candidate sourcing</ListItem>
          <ListItem>✔ Multi-round technical screening</ListItem>
          <ListItem>✔ Dedicated account manager</ListItem>
          <ListItem>✔ Ongoing intern coordination</ListItem>
          <ListItem>✔ Replacement support</ListItem>
        </List>
      </Box>
    </Box>

    {/* ===== BULK / LONG TERM ===== */}
    <Box
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="2xl"
      overflow="hidden"
      _hover={{ transform: "translateY(-6px)", boxShadow: "3xl" }}
      transition="all 0.3s ease"
    >
      <Box
        h="160px"
         bgImage={`url(${Scalable})`}
        bgSize="cover"
        bgPosition="center"
      />
      <Box p={8}>
        <Heading fontSize="xl" mb={2}>
          Bulk / Long-Term Hiring
        </Heading>

        <Text fontSize="2xl" fontWeight="800" color={PRIMARY}>
          10% – 14%
        </Text>

        <Text mt={2} color={textMuted}>
          Best for startups hiring
          <strong> 6+ interns</strong> or engagements beyond
          <strong> 6 months</strong>.
        </Text>

        <Divider my={5} />

        <Text fontWeight="600" mb={3}>
          What’s Included
        </Text>
        <List spacing={2} color={textMuted}>
          <ListItem>✔ Custom hiring pipeline</ListItem>
          <ListItem>✔ Dedicated talent coordinator</ListItem>
          <ListItem>✔ Monthly performance reports</ListItem>
          <ListItem>✔ Intern-to-full-time conversion support</ListItem>
          <ListItem>✔ Long-term cost optimization</ListItem>
        </List>
      </Box>
    </Box>
  </SimpleGrid>

  <Center mt={10}>
    <Badge px={5} py={3} fontSize="md" colorScheme="blue">
      Example: Intern stipend ₹15,000 → GrapplTech commission applied as %
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
              q: "Can we convert interns to full-time employees?",
              a: "Yes. There are no restrictions on conversion after the internship.",
            },
            {
              q: "What if an intern doesn’t perform?",
              a: "We provide replacement support based on engagement terms.",
            },
            {
              q: "Are internships remote?",
              a: "Most roles are remote. For on-site roles, GrapplTech assists with logistics.",
            },
            {
              q: "Do you handle intern management?",
              a: "Yes. We remain the coordination layer throughout the engagement.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} color={textMuted}>
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
        <Text
          mt={4}
          maxW="3xl"
          textAlign="center"
          color={textMuted}
        >
          Let GrapplTech power your startup with reliable intern talent —
          without long-term commitments.
        </Text>

        <Button
          mt={8}
          size="lg"
          bg={PRIMARY}
          color="white"
          borderRadius="full"
          px={10}
          _hover={{ bg: "#09537B" }}
        >
          Talk to Our Team →
        </Button>
      </Center>
    </Container>
  );
};

export default Outsourcing;
