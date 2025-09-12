import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Center,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGreensock,
  SiMongodb,
} from "react-icons/si";
import "./BackendSupremacy.css";
import cashback from "../../assets/images/refund.png";
import portfolios from "../../assets/images/FullStackCourseThumbnail.png";
import BackendFAQ from "./BackendFAQ";

function BackendSupremacy() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2025-09-25T23:59:59").getTime();
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
        <div class="heroj">
          <div class="heroj-content">
            <h1>
              From ‘Hello World’ to ‘Hello Job Offer’<br></br><span style={{fontSize: '3rem'}}>in Just 100 Days!</span>
            </h1>
            <p style={{textAlign: 'left'}}>
              Why just browse memes when you can build the websites they live on? Our Full Stack Developer in 100 Days Course takes you from HTML rookie to AI-powered coding wizard. With hands-on projects, live classes, and real deployment, you’ll be coding like a pro.
            </p>
            <div class="cta-group">
              <a
                href="https://rzp.io/rzp/gX5g3FL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="cta-button">Enroll Now</button>
              </a>

              <button class="cta-button-secondary">Watch Demo</button>
            </div>

            <div class="statsj-container">
              <div class="statj-item">
                <span class="statj-number">10+</span>
                <span class="statj-label" style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}>Technologies</span>
              </div>
              <div class="statj-item">
                <span class="statj-number">100</span>
                <span class="statj-label" style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}>Available Seats</span>
              </div>
              <div class="statj-item">
                <span class="statj-number">Rs.1599</span>
                <span class="statj-label" style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}>Course Fee</span>
              </div>
            </div>
          </div>

          <div class="heroj-graphics">
            <div class="gradient-orb"></div>
            <div class="floating-cards">
              <div class="cardj cardj-1"></div>
              <div class="cardj cardj-2"></div>
              <div class="cardj cardj-3"></div>
            </div>
          </div>
        </div>
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
            id="fullstack-mastery"
          />
        </Center>
        <div
          id="prom-text"
          style={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            margin: "2rem auto",
            maxWidth: "800px",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            Unlock your career with our{" "}
            <strong style={{
              backgroundImage:
                "linear-gradient(135deg, #f65959ff 0%, red 100%)",
              WebkitBackgroundClip: "text", // needed for Safari/Chrome
              backgroundClip: "text",
              color: "transparent",
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}>Full Stack Developer in 100 Days Course</strong>. Learn{" "}
            <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>ChakraUI JS</strong>,{" "}
            <strong>ES6</strong>,<strong> ReactJS</strong>,{" "}
            <strong>GSAP</strong>, <strong>NodeJS</strong>,{" "}
            <strong>ExpressJS</strong>, <strong>MongoDB</strong>, and complete{" "}
            <strong>Deployment</strong> — all in just <strong style={{
              fontSize: "2.4rem",
              backgroundImage:
                "linear-gradient(135deg, #f65959ff 0%, red 100%)",
              WebkitBackgroundClip: "text", // needed for Safari/Chrome
              backgroundClip: "text",
              color: "transparent",
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}>100 days</strong>.
          </p>

          {/* Pricing Highlight */}
          <div style={{ textAlign: "center" }}>
  <p
    style={{
      fontSize: "2rem",
      color: "gray",
      textDecoration: "line-through",
      margin: 0,
      fontFamily: '"Bricolage Grotesque", sans-serif',
    }}
  >
    Rs. 7000
  </p>
  <p
    style={{
      fontSize: "3rem",
      backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
      WebkitBackgroundClip: "text", // needed for Safari/Chrome
      backgroundClip: "text",
      color: "transparent",
      fontFamily: '"Bricolage Grotesque", sans-serif',
      margin: 0,
    }}
  >
    Just Rs. 1599/-
  </p>
</div>

          {/* Course Details */}
          <div
            style={{
              fontSize: "1rem",
              textAlign: "left",
              margin: "1rem auto",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
          <Center>
            <p>
              <strong>Tutors:</strong> Eshwar Nagaraj, Chaitanya Reddy, Sruthi
              Pasupuleti
            </p>
            <p>
              <strong>No.of Seats:</strong> 100
            </p></Center>
            
          </div>
        </div>
        {/* Countdown */}
        <Center>
        <Box
          mt={6}
          mb={4}
          p={4}
          bg="red.500"
          borderRadius="md"
          fontSize="lg"
          fontWeight="bold"
          width={"400px"}
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
        </Box></Center>
        <Center>
          {/* <Button
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
          </Button> */}
          <a
            href="https://rzp.io/rzp/gX5g3FL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="cta-button">Enroll Now</button>
          </a>
        </Center>
        <h2
          style={{
            fontSize: "3rem",
            textAlign: "center",
            backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
            WebkitBackgroundClip: "text", // needed for Safari/Chrome
            backgroundClip: "text",
            color: "transparent",
            fontFamily: '"Bricolage Grotesque", sans-serif',
          }}
        >
          Technologies Covered
        </h2>
        {/* Tech Stack Icons */}
        <Flex
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={6}
          mb={10}
        >
          <Icon as={FaHtml5} boxSize={36} color="#e34f26" title="HTML5" />
          <Icon as={FaCss3Alt} boxSize={36} color="#1572B6" title="CSS3" />
          <Icon
            as={SiTailwindcss}
            boxSize={36}
            color="#38BDF8"
            title="Tailwind CSS"
          />
          <Icon as={FaReact} boxSize={36} color="#61DAFB" title="ReactJS" />
          <Icon as={SiGreensock} boxSize={36} color="#88CE02" title="GSAP" />
          <Icon as={FaNodeJs} boxSize={36} color="#3C873A" title="NodeJS" />
          <Icon as={FaGitAlt} boxSize={36} color="#F1502F" title="Git" />
          <Icon as={SiMongodb} boxSize={36} color="#47A248" title="MongoDB" />
          <Icon viewBox="0 0 256 256" boxSize={36} title="Chakra UI">
            <path
              fill="#319795"
              d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm-7.394 55.007h54.435L94.006 150.93l36.6-60.285H68.96l51.646-35.638zm14.788 145.986H80.959l81.035-95.923-36.6 60.285h61.647l-51.647 35.638z"
            />
          </Icon>

          {/* Vercel Logo */}
          <Icon viewBox="0 0 256 256" boxSize={36} title="Vercel">
            <path fill="black" d="M128 32L256 224H0L128 32z" />
          </Icon>
        </Flex>
        {/* Cashback Section */}
        {/* <Heading
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
        </Heading>{" "} */}
        <h2
          style={{
            fontSize: "3rem",
            textAlign: "center",
            backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
            WebkitBackgroundClip: "text", // needed for Safari/Chrome
            backgroundClip: "text",
            color: "transparent",
            fontFamily: '"Bricolage Grotesque", sans-serif',
          }}
        >
          🎉 Get 100% Cashback on Your Fees!
        </h2>
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
          👉 Simply share your referred members’ <b>names & emails</b> with us
          at{" "}
          <Link
            href="mailto:refunds@grapptech.in"
            color="red.500"
            fontWeight="bold"
          >
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
        <Box mt={10} p={6} bg="" borderRadius="md">
          <h2
          style={{
            fontSize: "3rem",
            textAlign: "center",
            backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
            WebkitBackgroundClip: "text", // needed for Safari/Chrome
            backgroundClip: "text",
            color: "transparent",
            fontFamily: '"Bricolage Grotesque", sans-serif',
          }}
        >
          Testimonials
        </h2>
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
        <BackendFAQ />
      </Container>
    </Box>
  );
}

export default BackendSupremacy;
