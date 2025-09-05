import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Center,
  Image,
  Icon,
  Button,
  Badge,
  HStack,
  VStack,
  Link
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaCloudUploadAlt,
  FaTools,
} from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import "./BackendSupremacy.css";

import cashback from "../../assets/images/refund.png";
import portfolios from "../../assets/images/Backend Supremacy.png";

function BackendSupremacy() {
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2025-09-15T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box w="100%" overflowX="hidden">
      {" "}
      {/* 🚀 This prevents horizontal scroll */}
      <Container maxW={"container.xl"} px={4} mt={6}>
        <Center>
          <Heading
            class="headerddd"
            children="Backend Supremacy in Telugu"
            fontFamily={"Poppins"}
            textAlign={["center", "center"]}
          />
        </Center>{" "}
        <Center>
          {" "}
          <svg
            width="260"
            height="20"
            viewBox="0 0 628 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
              fill="#FEBD00"
            />{" "}
          </svg>{" "}
        </Center>
        {/* Hero Image */}
        <Center>
          <Image
            src={portfolios}
            alt="GrapplTech Team"
            borderRadius="lg"
            maxW={{ base: "95%", md: "60%" }}
            objectFit="cover"
            borderWidth={4}
            borderColor="blue.500"
            id="backend-mastery"
          />
        </Center>
        <Heading
          as="h2"
          fontSize="2xl"
          fontFamily={"Poppins"}
          textAlign={["center"]}
          mb={4}
        >
          {" "}
          🎧 Learn backend like a pro, binge-worthy style. Zero prerequisites,
          zero fear — just pure backend supremacy.{" "}
        </Heading>{" "}
        <Center>
          {" "}
          <svg
            width="260"
            height="20"
            viewBox="0 0 628 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
              fill="#FEBD00"
            />{" "}
          </svg>{" "}
        </Center>
        {/* Price Card */}
        <Center mt={8}>
          <MotionBox
            bg="white"
            p={6}
            rounded="2xl"
            shadow="2xl"
            border="2px solid"
            borderColor="blue.400"
            textAlign="center"
            w={["100%", "90%", "500px"]} // ✅ responsive width
            maxW="100%"
          >
            <MotionText
              fontSize="2xl"
              mb={3}
              fontWeight="bold"
              color="gray.800"
            >
              💸 Early Bird Price: <b style={{ color: "#2563eb" }}>₹1499</b>{" "}
              <Text as="span" color="red.400" textDecoration="line-through">
                ₹6000
              </Text>
            </MotionText>

            <Badge
              colorScheme="green"
              fontSize="md"
              px={3}
              py={1}
              borderRadius="lg"
              mb={4}
            >
              🎟 Seats: 150 Only
            </Badge>

            <VStack spacing={1} fontSize="lg" color="gray.700">
              <Text mt={1}>
                ⏳ Duration: <b>2 Months</b>
              </Text>
              <Text>
                🗣️ Language: <b>Telugu</b>
              </Text>
              <Text>
                📅 Start Date: <b>September 15, 2025</b>
              </Text>
              <Text>
                ⏰ Timings: <b>7pm – 8pm Daily</b>
              </Text>
            </VStack>

            <Text fontSize="lg" mt={5} color="blue.600">
              👨‍🏫 Tutors: <b>Eshwar Nagaraj</b>, <b>Chaitanya Reddy</b>
            </Text>

            <VStack mt={3} spacing={0} fontSize="md" color="gray.800">
  <HStack>
    <Text>📜 Certificate Issuance:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>📝 Resume Guidance:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>🔗 LinkedIn Optimisation:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>🎥 Recordings Provided:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>🎯 Interview Prep Kit:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>🎉 Fun Friday Sessions:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
  <HStack>
    <Text>🤝 Mock Interviews:</Text>
    <Badge colorScheme="green">Yes</Badge>
  </HStack>
</VStack>

          </MotionBox>
        </Center>
        {/* Countdown */}
        <Box
          mt={6}
          p={4}
          color="black"
          bg="yellow.100"
          borderRadius="md"
          fontSize="lg"
          fontWeight="bold"
        >
          <Center>
            {timeLeft.expired ? (
              "🎉 Enrollment Open!"
            ) : (
              <>
                Sale Ends In:{" "}
                <span>
                  {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                  {timeLeft.seconds}s
                </span>
              </>
            )}
          </Center>
        </Box>
        <Center>
          <Button
            size="lg"
            mt={4}
            colorScheme="yellow"
            className="bs-enroll-btn"
            as="a"
            href="https://rzp.io/rzp/gX5g3FL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enroll Now 🚀
          </Button>
        </Center>
        <Heading
          class="headerddd"
          as="h2"
          fontSize="2xl"
          mb={6}
          textAlign="center"
          fontFamily={"Poppins"}
        >
          {" "}
          📚 Course Curriculum{" "}
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          {" "}
          {/* Languages & Frameworks */}{" "}
          <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={6}>
            {" "}
            <Icon as={FaPython} boxSize={12} color="yellow.400" />{" "}
            <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
              {" "}
              Languages & Frameworks{" "}
            </Heading>{" "}
            <Text fontSize="sm" color="gray.600" mt={1}>
              {" "}
              Python 🐍, Flask ⚡, SQLAlchemy ORM for powerful backend
              development.{" "}
            </Text>{" "}
          </Box>{" "}
          {/* Databases */}{" "}
          <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={6}>
            {" "}
            <Icon as={FaDatabase} boxSize={12} color="green.400" />{" "}
            <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
              {" "}
              Databases{" "}
            </Heading>{" "}
            <Text fontSize="sm" color="gray.600" mt={1}>
              {" "}
              SQLite (for dev) 🛠️ and PostgreSQL (for production) 🚀.{" "}
            </Text>{" "}
          </Box>{" "}
          {/* APIs */}{" "}
          <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={6}>
            {" "}
            <Icon as={FiServer} boxSize={12} color="blue.400" />{" "}
            <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
              {" "}
              RESTful APIs{" "}
            </Heading>{" "}
            <Text fontSize="sm" color="gray.600" mt={1}>
              {" "}
              Learn API standards 🌐 & test them using Postman 🔥.{" "}
            </Text>{" "}
          </Box>{" "}
          {/* Deployment */}{" "}
          <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={6}>
            {" "}
            <Icon as={FaCloudUploadAlt} boxSize={12} color="purple.400" />{" "}
            <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
              {" "}
              Deployment{" "}
            </Heading>{" "}
            <Text fontSize="sm" color="gray.600" mt={1}>
              {" "}
              Deploy your apps on Render ☁️, Vercel 🚀, and GitHub Pages 💻.{" "}
            </Text>{" "}
          </Box>{" "}
          {/* Extras */}{" "}
          <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={6}>
            {" "}
            <Icon as={FaTools} boxSize={12} color="red.400" />{" "}
            <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
              {" "}
              Extras{" "}
            </Heading>{" "}
            <Text fontSize="sm" color="gray.600" mt={1}>
              {" "}
              dotenv, Jinja2, Flask-WTF, Alembic migrations, Gunicorn & more.{" "}
            </Text>{" "}
          </Box>{" "}
        </Flex>
        {/* Cashback Section */}
        <Heading
          class="headerddd"
          as="h1"
          textAlign="center"
          fontFamily={"Poppins"}
          fontSize="3xl"
          color={"blue.800"}
          mt={8}
          mb={8}
          p={2}
        >
          {" "}
          🎉 Get 100% Cashback on Your Fees!{" "}
        </Heading>{" "}
        <Center>
          {" "}
          <svg
            width="260"
            height="20"
            viewBox="0 0 628 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
              fill="#FEBD00"
            />{" "}
          </svg>{" "}
        </Center>
        <Center>
          <Image
            src={cashback}
            alt="cashback-offer"
            maxW="100%"
            w={["90%", "70%", "500px"]}
          />
        </Center>
        <Text fontSize="lg" mt={4}>
          {" "}
          Want your course fees back? Easy peasy! 🍋 Refer <b>7 friends</b>{" "}
          using your unique referral code (
          <b>Referrer Full Name + Phone Number</b>) and once they join, our team
          will send your <b>full fees back within 48 hours</b>. 💸{" "}
        </Text>{" "}
        <Text mt={4}>
  👉 Simply share your referred members’ <b>names & emails</b> with us at{" "}
  <Link href="mailto:refunds@grapptech.in" color="blue.500" fontWeight="bold">
    refunds@grapptech.in
  </Link>
  . Our finance ninjas will get to work immediately.
</Text>{" "}
        <Text mt={4}>
          {" "}
          Think of it as a cashback treasure hunt 🏴‍☠️ — you bring the crew, we
          bring the gold. And hey, who doesn’t like free money with a side of
          bragging rights?{" "}
        </Text>{" "}
        <Text mt={4}>
          {" "}
          So rally your squad, drop those referrals, and let’s make your
          learning journey not just valuable but literally <b>FREE</b>. 🎁{" "}
        </Text>
        {/* Testimonials */}
        <Box mt={10} p={6} bg="gray.50" borderRadius="md">
          <Heading
            class="headerddd"
            textAlign="center"
            mb={4}
            fontFamily="Poppins"
          >
            Testimonials
          </Heading>
          <Box className="testimonial-sliderrr" w="100%" overflow="hidden">
            <div className="slider-trackk">
              {[
                {
                  name: "Rohit Mehta",
                  location: "Pune",
                  quote: "Frontend course was a game changer!",
                },
                {
                  name: "Ananya Singh",
                  location: "Bangalore",
                  quote: "Data Analyst course helped me crack SQL queries.",
                },
                {
                  name: "Karthik Reddy",
                  location: "Hyderabad",
                  quote: "Joined Java with zero coding, now I can build apps!",
                },
                {
                  name: "Meera Nair",
                  location: "Chennai",
                  quote:
                    "The Python course by Eshwar sir was structured so well, I could follow every concept step by step.",
                },
                {
                  name: "Aditya Sharma",
                  location: "Delhi",
                  quote:
                    "Saranya madam’s patience and clarity while teaching Data Visualization inspired me to dig deeper into analytics.",
                },
                {
                  name: "Ravi Prakash",
                  location: "Lucknow",
                  quote:
                    "I had no tech background, but the mentorship from Eshwar sir gave me the confidence to code.",
                },
                {
                  name: "Neha Verma",
                  location: "Mumbai",
                  quote:
                    "The way Saranya madam explained SQL queries with real-world case studies was outstanding.",
                },
                {
                  name: "Sandeep Kulkarni",
                  location: "Pune",
                  quote:
                    "Thanks to Eshwar sir, I cracked my first frontend developer interview with full confidence.",
                },
                {
                  name: "Priya Iyer",
                  location: "Coimbatore",
                  quote:
                    "Saranya madam encouraged me whenever I got stuck. Her support made learning fun and stress-free.",
                },
                {
                  name: "Abhishek Mishra",
                  location: "Noida",
                  quote:
                    "I loved how practical the Java course was. Eshwar sir connected every lesson with real-time projects.",
                },
                {
                  name: "Divya Menon",
                  location: "Kochi",
                  quote:
                    "The guidance from Saranya madam on analytics tools helped me land my first Data Analyst job.",
                },
                {
                  name: "Nitin Aggarwal",
                  location: "Jaipur",
                  quote:
                    "The coding challenges given by Eshwar sir boosted my problem-solving skills massively.",
                },
                {
                  name: "Sneha Kapoor",
                  location: "Gurgaon",
                  quote:
                    "Saranya madam’s storytelling while teaching statistics made complex concepts look easy.",
                },
                {
                  name: "Arjun Patel",
                  location: "Ahmedabad",
                  quote:
                    "From zero knowledge to building my own apps, all thanks to Eshwar sir’s clear explanations.",
                },
                {
                  name: "Rashmi R",
                  location: "Mysore",
                  quote:
                    "The Data Analyst course with Saranya madam was filled with practical case studies that prepared me for real jobs.",
                },
                {
                  name: "Vikas Yadav",
                  location: "Kanpur",
                  quote:
                    "Eshwar sir is the best mentor I’ve ever met. His passion for teaching motivated me every day.",
                },
                {
                  name: "Simran Kaur",
                  location: "Amritsar",
                  quote:
                    "Saranya madam’s mentorship gave me a career direction I was searching for. Forever grateful!",
                },
                {
                  name: "Harish Babu",
                  location: "Hyderabad",
                  quote:
                    "The frontend course gave me both knowledge and confidence. Hats off to Eshwar sir.",
                },
                {
                  name: "Pooja Desai",
                  location: "Surat",
                  quote:
                    "I was scared of SQL, but Saranya madam made it so simple with her step-by-step guidance.",
                },
                {
                  name: "Manoj Kumar",
                  location: "Patna",
                  quote:
                    "Eshwar sir’s way of explaining Java made me fall in love with coding. Best mentor ever!",
                },
              ].map((t, i) => (
                <Box
                  key={i}
                  className="testimoniall"
                  p={4}
                  minW={["90%", "400px"]}
                  maxW="100%"
                  mx={2}
                >
                  <p>"{t.quote}"</p>
                  <strong>
                    - {t.name}, {t.location}
                  </strong>
                </Box>
              ))}
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default BackendSupremacy;
