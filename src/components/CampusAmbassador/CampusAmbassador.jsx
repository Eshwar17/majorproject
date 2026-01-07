import {
  Box,
  Heading,
  Text,
  Center,
  Image,
  SimpleGrid,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Select,
  Input,
  Divider,
  Switch,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import AnimatedUnderline1 from "../Underlines/AnimatedUnderline1";
import PartnerIllustration from "../../assets/images/PartnerIllusration.gif";
import PartnerWhySection from "./PartnerWhySection";
import Test01 from "../../assets/images/private/Test01.png";
import Test02 from "../../assets/images/private/Test02.png";
import Test03 from "../../assets/images/private/Test03.png";
import Test04 from "../../assets/images/private/Test04.png";
import Test05 from "../../assets/images/private/Test05.png";

/* ================= CONSTANTS ================= */

const PRIMARY = "#028EC4";

/* ================= PARTNER TYPES ================= */

const partnerTypes = [
  { key: "student", label: "College Student / Campus Ambassador", percent: 15 },
  { key: "faculty", label: "Faculty / Mentor", percent: 20 },
  { key: "individual", label: "Individual / Influencer", percent: 25 },
  { key: "college", label: "Principal / Institution", percent: 30 },
  { key: "training", label: "Training Partner / EdTech", percent: 35 },
];

/* ================= LOCAL TESTIMONIALS ================= */

const testimonials = [
  {
    name: "Suresh Kumar",
    role: "Faculty – Chennai",
    image: `${Test01}`,
    text: "GrapplTech’s programs align perfectly with industry needs and student outcomes.",
  },
  {
    name: "Ramana Reddy",
    role: "Faculty – Tirupati",
    image: `${Test04}`,
    text: "The bootcamp helped me transition confidently into real-world development.",
  },
  {
    name: "Rohit Sharma",
    role: "Faculty – Hyderabad",
    image: `${Test02}`,
    text: "Live mentorship and projects made learning practical and effective.",
  },
  {
    name: "Lakshmi Devi",
    role: "Faculty – Anantapur",
    image: `${Test03}`,
    text: "The partner model is transparent and ideal for academic collaboration.",
  },
  {
    name: "Karthik S",
    role: "Student – Tamil Nadu",
    image: `${Test05}`,
    text: "Clear curriculum and guidance helped me choose the right tech career.",
  },
];

/* ================= TESTIMONIAL SLIDER ================= */

const TestimonialSlider = () => (
  <Box overflow="hidden" w="100%" py={6}>
    <motion.div
      style={{ display: "flex", gap: "24px" }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <Box
          key={i}
          minW="340px"
          bg="white"
          p={6}
          borderRadius="xl"
          boxShadow="lg"
        >
          <HStack spacing={4} mb={4}>
            <Image src={t.image} boxSize="50px" borderRadius="full" />
            <Box>
              <Text fontWeight="700">{t.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {t.role}
              </Text>
            </Box>
          </HStack>
          <Text fontSize="sm" color="gray.600">
            “{t.text}”
          </Text>
        </Box>
      ))}
    </motion.div>
  </Box>
);

/* ================= COMMISSION CALCULATOR ================= */

const CommissionCalculator = () => {
  const [partner, setPartner] = useState(partnerTypes[0]);
  const [referrals, setReferrals] = useState(30);
  const [conversion, setConversion] = useState(70);
  const [price, setPrice] = useState(7000);
  const [yearlyView, setYearlyView] = useState(false);

  const enrollments = Math.round((referrals * conversion) / 100);
  const grossRevenue = enrollments * price;
  const baseCommission = (grossRevenue * partner.percent) / 100;

  let volumeBonus = 0;
  if (enrollments >= 100) volumeBonus = 0.05;
  else if (enrollments >= 50) volumeBonus = 0.03;
  else if (enrollments >= 25) volumeBonus = 0.02;

  const consistencyBonus = enrollments >= 20 ? 0.02 : 0;
  const institutionalBonus =
    partner.key === "college" || partner.key === "training" ? 0.05 : 0;

  const totalBonus =
    baseCommission *
    (volumeBonus + consistencyBonus + institutionalBonus);

  const monthlyEarnings = baseCommission + totalBonus;
  const yearlyEarnings = monthlyEarnings * 12;

  const chartData = {
    labels: yearlyView
      ? ["Q1", "Q2", "Q3", "Q4"]
      : ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: yearlyView
          ? "Quarterly Earnings (₹)"
          : "Monthly Growth (₹)",
        data: yearlyView
          ? [
              yearlyEarnings * 0.2,
              yearlyEarnings * 0.45,
              yearlyEarnings * 0.7,
              yearlyEarnings,
            ]
          : [
              monthlyEarnings * 0.2,
              monthlyEarnings * 0.45,
              monthlyEarnings * 0.7,
              monthlyEarnings,
            ],
        borderColor: PRIMARY,
        backgroundColor: "rgba(2,142,196,0.15)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={[6, 8, 10]}
      borderRadius="2xl"
      boxShadow="2xl"
      maxW="980px"
      mx="auto"
    >
      <Center flexDirection="column" mb={6}>
        <Heading fontFamily="Bricolage Grotesque" textAlign="center">
          Commission & Earnings Calculator
        </Heading>
        <Text color="gray.500" textAlign="center">
          Transparent breakdown of commissions, bonuses, and long-term earnings
        </Text>
      </Center>

      <VStack spacing={6} align="stretch">
        <Box>
          <Text fontWeight="600">Partner Type</Text>
          <Select
            value={partner.key}
            onChange={(e) =>
              setPartner(partnerTypes.find(p => p.key === e.target.value))
            }
          >
            {partnerTypes.map(p => (
              <option key={p.key} value={p.key}>
                {p.label} — {p.percent}% base
              </option>
            ))}
          </Select>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          <Box>
            <Text fontWeight="600">Referrals / Month</Text>
            <Input
              type="number"
              value={referrals}
              onChange={e => setReferrals(Number(e.target.value))}
            />
          </Box>

          <Box>
            <Text fontWeight="600">Conversion Rate (%)</Text>
            <Input
              type="number"
              value={conversion}
              onChange={e => setConversion(Number(e.target.value))}
            />
          </Box>

          <Box>
            <Text fontWeight="600">Avg Bootcamp Fee (₹)</Text>
            <Input
              type="number"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
          </Box>
        </SimpleGrid>

        <Divider />

        <SimpleGrid columns={[1, 2]} spacing={4}>
          <Box>
            <Text fontSize="sm" color="gray.500">Enrollments</Text>
            <Text fontWeight="700">{enrollments}</Text>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.500">Gross Revenue</Text>
            <Text fontWeight="700">₹{grossRevenue.toLocaleString()}</Text>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.500">Base Commission</Text>
            <Text fontWeight="700" color={PRIMARY}>
              ₹{baseCommission.toLocaleString()}
            </Text>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.500">Total Monthly Earnings</Text>
            <Text fontWeight="800" color={PRIMARY}>
              ₹{monthlyEarnings.toLocaleString()}
            </Text>
          </Box>
        </SimpleGrid>

        <Box bg="gray.50" p={4} borderRadius="md">
          <Text fontWeight="600">Bonus Tiers</Text>
          <Text fontSize="sm" color="gray.600">
            • 25+ enrollments → 2% volume bonus<br />
            • 50+ enrollments → 3% volume bonus<br />
            • 100+ enrollments → 5% volume bonus<br />
            • Institution / Training Partner → +5%<br />
            • Consistency (20+ monthly enrollments) → +2%
          </Text>
        </Box>

        <HStack justify="center">
          <Text fontSize="sm">Monthly</Text>
          <Switch
            isChecked={yearlyView}
            onChange={() => setYearlyView(!yearlyView)}
          />
          <Text fontSize="sm">Yearly</Text>
        </HStack>

        <Line data={chartData} />
      </VStack>
    </Box>
  );
};

/* ================= MAIN PAGE ================= */

const CampusAmbassador = () => {
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box w="100%">
      {/* PAGE HEADER */}
       
      <Center py={[2, 2]} flexDirection="column" px={[4, 8, 16]}>
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
                GrapplTech's Partner Program
              </Text>
            </Center>
        <AnimatedUnderline1 />
        <Text mt={2} maxW="4xl" textAlign="center" fontSize="lg" color={textMuted}>
          The GrapplTech Partner Program is a long-term, performance-driven
          collaboration for students, faculty, institutions, and professionals
          to earn consistently while enabling real tech careers.
        </Text>
      </Center>

      <Center py={2}>
        <Image src={PartnerIllustration} maxW={["90%", "70%", "45%"]} />
      </Center>
      <Center py={2} flexDirection="column" px={[4, 8, 16]}>
  <Heading
    fontFamily="Bricolage Grotesque"
    textAlign="center"
  >
    Why Partner with GrapplTech?
  </Heading>

  <Text
    mt={6}
    maxW="4xl"
    textAlign="center"
    color={textMuted}
    fontSize="lg"
  >
    GrapplTech is built around one core principle — <strong>real career outcomes</strong>.
    Every bootcamp, workshop, and learning pathway is designed to move learners
    closer to industry readiness, not just certifications.
  </Text>

  <Text
    mt={4}
    maxW="4xl"
    textAlign="center"
    color={textMuted}
  >
    When you partner with GrapplTech, you’re not just referring a course —
    you’re enabling students and professionals to gain practical skills,
    mentorship, and confidence that translate directly into real-world
    opportunities.
  </Text>

  <Text
    mt={4}
    maxW="4xl"
    textAlign="center"
    color={textMuted}
  >
    Our partner ecosystem is designed to be transparent, fair, and sustainable.
    Commissions are clearly defined, payouts are timely, and performance is
    tracked openly so partners always know where they stand.
  </Text>

  <Text
    mt={4}
    maxW="4xl"
    textAlign="center"
    color={textMuted}
  >
    Whether you are a student guiding your juniors, a faculty member mentoring
    batches, an institution upskilling cohorts, or an individual with a strong
    professional network — GrapplTech gives you the structure, support, and
    incentives to grow alongside your learners.
  </Text>
</Center>

 <PartnerWhySection />

      {/* CALCULATOR */}
      <Box py={4} px={[4, 8, 16]}>
        <CommissionCalculator />
      </Box>

      {/* TESTIMONIALS */}
      <Box py={4} bg={useColorModeValue("gray.50", "gray.900")}>
        <Center mb={8}>
          <Heading fontFamily="Bricolage Grotesque" textAlign="center">
            Trusted by Students & Faculty
          </Heading>
        </Center>
        <TestimonialSlider />
      </Box>

      {/* PAYOUT INFO */}
      <Center py={4} flexDirection="column" px={[4, 8, 16]}>
        <Center mb={8}>
          <Heading fontFamily="Bricolage Grotesque" textAlign="center">
            Payout Frequency & Transparency
          </Heading>
        </Center>
        <Text mt={4} maxW="4xl" textAlign="center" color={textMuted}>
          Partner commissions are calculated after confirmed enrollments and
          released on a monthly payout cycle. Detailed statements ensure
          complete transparency.
        </Text>
      </Center>

      {/* CTA */}
      <Center py={4} flexDirection="column">
        <Center mb={8}>
          <Heading fontFamily="Bricolage Grotesque" textAlign="center">
            Ready to Partner With GrapplTech?
          </Heading>
        </Center>
        <Button
          as={Link}
          to="/partner-apply"
          bg={PRIMARY}
          color="white"
          size="lg"
          borderRadius="full"
        >
          Apply Now →
        </Button>
      </Center>
    </Box>
  );
};

export default CampusAmbassador;
