import { Flex, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PRIMARY = "#028EC4";
const MotionBox = motion(Box);

const benefits = [
  {
    title: "Lucrative Commissions",
    desc: "Earn competitive commissions for every successful enrollment and scale your income as your impact grows.",
  },
  {
    title: "Premium Bootcamps & Courses",
    desc: "Promote live, industry-designed bootcamps trusted by learners across all skill levels.",
  },
  {
    title: "Marketing Support",
    desc: "Access ready-to-use creatives, banners, videos, and campaign assets to boost conversions.",
  },
  {
    title: "Dedicated Partner Portal",
    desc: "Track referrals, earnings, performance insights, and partner-only resources in one dashboard.",
  },
  {
    title: "Exclusive Discounts & Goodies",
    desc: "Enjoy special discounts on GrapplTech programs along with exclusive partner rewards.",
  },
  {
    title: "Strong Community Network",
    desc: "Collaborate with fellow partners, exchange strategies, and grow inside our ecosystem.",
  },
];

const PartnerWhySection = () => {
  return (
    <Flex w="100%" py={[12, 16]} px={[4, 8, 12]} justify="center">
      <Box maxW="6xl" w="100%">
        {/* ===== HEADING ===== */}
        <Heading
          fontSize={["xl", "2xl"]}
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          mb={10}
        >
          Benefits of Being a GrapplTech Partner
        </Heading>

        {/* ===== CARDS ===== */}
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {benefits.map((item, i) => (
            <MotionBox
              key={i}
              bg="white"
              p={6}
              borderRadius="2xl"
              boxShadow="lg"
              position="relative"
              overflow="hidden"
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(2,142,196,0.18)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Accent Line */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="4px"
                bg={PRIMARY}
              />

              <Heading
                fontSize="lg"
                fontFamily="Bricolage Grotesque"
                mb={3}
                textAlign="center"
              >
                {item.title}
              </Heading>

              <Text
                fontFamily="Poppins"
                color="gray.600"
                fontSize="sm"
                textAlign="center"
                lineHeight="1.7"
              >
                {item.desc}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* ===== CLOSING TEXT ===== */}
        <Text
          mt={14}
          fontFamily="Poppins"
          fontSize="md"
          textAlign="center"
          color="gray.600"
          maxW="3xl"
          mx="auto"
        >
          Partnering with GrapplTech isn’t just about commissions — it’s about
          shaping the future of tech education. If you believe in meaningful
          learning, long-term growth, and real-world impact, the GrapplTech
          Partner Program is built for you.
        </Text>
      </Box>
    </Flex>
  );
};

export default PartnerWhySection;
