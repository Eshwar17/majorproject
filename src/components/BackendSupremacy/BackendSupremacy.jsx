import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Center,
  Image,
  Heading,
  Icon,
  Link,
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
              From ‘Hello World’ to ‘Hello Job Offer’<br></br>
              <span style={{ fontSize: "3rem" }}>in Just 100 Days!</span>
            </h1>
            <p style={{ textAlign: "left" }}>
              Why just browse memes when you can build the websites they live
              on? Our Full Stack Developer in 100 Days Course takes you from
              HTML rookie to AI-powered coding wizard. With hands-on projects,
              live classes, and real deployment, you’ll be coding like a pro.
            </p>
            <div class="cta-group">
              <a
                href="https://rzp.io/rzp/gX5g3FL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="cta-button">Enroll Now</button>
              </a>
              <a
                href="https://youtu.be/1yFNEaEQm2w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="cta-button-secondary">Watch Demo</button>
              </a>
            </div>

            <div class="statsj-container">
              <div class="statj-item">
                <span class="statj-number">10+</span>
                <span
                  class="statj-label"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}
                >
                  Technologies
                </span>
              </div>
              <div class="statj-item">
                <span class="statj-number">23</span>
                <span
                  class="statj-label"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}
                >
                  Available Seats
                </span>
              </div>
              <div class="statj-item">
                <span class="statj-number">Sep 25 2025</span>
                <span
                  class="statj-label"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}
                >
                  Starts On
                </span>
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
  <strong
    style={{
      backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
      WebkitBackgroundClip: "text", // needed for Safari/Chrome
      backgroundClip: "text",
      color: "transparent",
      fontFamily: '"Bricolage Grotesque", sans-serif',
    }}
  >
    Full Stack Developer in 100 Days Course
  </strong>
  . Learn <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
  <strong>Tailwind CSS</strong>, <strong>JavaScript (ES6)</strong>,{" "}
  <strong>ChakraUI</strong>, <strong>ReactJS</strong>,{" "}
  <strong>GSAP</strong>, and complete the{" "}
  <strong>Frontend Track</strong>. <br />
  For backend, you can choose between{" "}
  <strong>Track 1</strong> (
  <strong>NodeJS</strong>, <strong>ExpressJS</strong>,{" "}
  <strong>MongoDB</strong>, <strong>Vercel</strong>, <strong>Git</strong>){" "}
  or <strong>Track 2</strong> (<strong>Python</strong>,{" "}
  <strong>Flask</strong>, <strong>PostgreSQL</strong>,{" "}
  <strong>SQLite</strong>, <strong>Vercel</strong>). <br />
  And here’s the best part — after completing the{" "}
  <strong>Frontend Track</strong>, you’ll even have the flexibility to{" "}
  <strong
    style={{
      backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: '"Bricolage Grotesque", sans-serif',
    }}
  >
    switch your backend track
  </strong>{" "}
  if you wish. <br />
  All this in just{" "}
  <strong
    style={{
      fontSize: "2.4rem",
      backgroundImage: "linear-gradient(135deg, #f65959ff 0%, red 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: '"Bricolage Grotesque", sans-serif',
    }}
  >
    100 days
  </strong>
  .
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
                backgroundImage:
                  "linear-gradient(135deg, #f65959ff 0%, red 100%)",
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
              </p>
            </Center>
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
          </Box>
        </Center>
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
            marginBottom: "2rem",
          }}
        >
          Technologies Covered
        </h2>
        {/* Frontend Track */}
        <Box mb={10}>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            fontFamily="Bricolage Grotesque"
            textDecoration={"underline"}
            mb={4}
          >
            Frontend Track
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={6}
          >
            <Icon as={FaHtml5} boxSize={36} color="#e34f26" title="HTML5" />
            <Icon as={FaCss3Alt} boxSize={36} color="#1572B6" title="CSS3" />
            <Icon
              as={SiTailwindcss}
              boxSize={36}
              color="#38BDF8"
              title="Tailwind CSS"
            />
            <Icon
              as={SiJavascript}
              boxSize={36}
              color="#F7DF1E"
              title="JavaScript"
            />
            <Icon as={FaReact} boxSize={36} color="#61DAFB" title="ReactJS" />
            <Icon as={SiGreensock} boxSize={36} color="#88CE02" title="GSAP" />
            {/* Chakra UI custom SVG */}
            <Icon viewBox="0 0 256 256" boxSize={36} title="Chakra UI">
              <path
                fill="#319795"
                d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm-7.394 55.007h54.435L94.006 150.93l36.6-60.285H68.96l51.646-35.638zm14.788 145.986H80.959l81.035-95.923-36.6 60.285h61.647l-51.647 35.638z"
              />
            </Icon>
          </Flex>
        </Box>
        {/* Backend Track 1 */}
        <Box mb={10}>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            fontFamily="Bricolage Grotesque"
            textDecoration={"underline"}
            mb={4}
          >
            Backend Track 1
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={6}
          >
            <Icon as={FaNodeJs} boxSize={36} color="#3C873A" title="NodeJS" />
            {/* ExpressJS (custom minimal logo) */}
            <Icon viewBox="0 0 128 128" boxSize={36} title="ExpressJS">
              <path
                fill="black"
                d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64 64-28.653 64-64S99.347 0 64 0zm0 116.364C33.602 116.364 11.636 94.398 11.636 64S33.602 11.636 64 11.636 116.364 33.602 116.364 64 94.398 116.364 64 116.364z"
              />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fontSize="36"
                fontFamily="Arial"
                fill="black"
              >
                ex
              </text>
            </Icon>
            <Icon as={SiMongodb} boxSize={36} color="#47A248" title="MongoDB" />
            {/* Vercel Logo */}
            <Icon viewBox="0 0 256 256" boxSize={36} title="Vercel">
              <path fill="black" d="M128 32L256 224H0L128 32z" />
            </Icon>
            <Icon as={FaGitAlt} boxSize={36} color="#F1502F" title="Git" />
          </Flex>
        </Box>
        {/* Backend Track 2 */}
        <Box mb={10}>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            fontFamily="Bricolage Grotesque"
            textDecoration={"underline"}
            mb={4}
          >
            Backend Track 2
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={6}
          >
            <Icon as={FaPython} boxSize={36} color="#3776AB" title="Python" />
            <Icon as={SiFlask} boxSize={36} color="black" title="Flask" />
            <Icon
              as={SiPostgresql}
              boxSize={36}
              color="#336791"
              title="PostgreSQL"
            />
            <Icon as={FaGitAlt} boxSize={36} color="#F1502F" title="Git" />
            {/* SQLite Logo */}
            <svg
              height={120}
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="sqlite-original-a"
                  x1="-15.615"
                  x2="-6.741"
                  y1="-9.108"
                  y2="-9.108"
                  gradientTransform="rotate(90 -90.486 64.634) scale(9.2712)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#95d7f4" offset="0" />
                  <stop stop-color="#0f7fcc" offset=".92" />
                  <stop stop-color="#0f7fcc" offset="1" />
                </linearGradient>
              </defs>
              <path
                d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88.68 1.169 3.54 6.192 4.118 7.81.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162.286 162.286 0 012.004-6.265c.973 1.71 3.313 5.859 3.828 7.3.102.293.192.543.27.774.023-.137.05-.274.074-.414-.59-2.504-1.75-6.86-3.336-10.082 3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a118.657 118.657 0 01-.297-14.652"
                fill="#0b7fcc"
              />
              <path
                d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a164.535 164.535 0 012.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328 3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 00-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614-.672-2.605-1.441-4.96-2.25-6.324-.414-.707.043-3.597 1.207-7.879"
                fill="url(#sqlite-original-a)"
              />
              <path
                d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44.347 44.347 0 00-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895 1.262 2.563 2.25 5.832 2.894 8.328.168.64.32 1.242.442 1.754.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773-.043-.125-.105-.274-.172-.434-.734-1.703-2.765-5.305-3.656-6.867-.762 2.25-1.437 4.36-2.004 6.265 2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809-1.164 4.281-1.625 7.172-1.207 7.88.809 1.362 1.574 3.722 2.25 6.323 1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a118.653 118.653 0 00.297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156.48-12.793 3.422-28.215 8.856-44.289 9.191-24.27 21.938-43.738 33.602-53.035-10.633 9.602-25.023 40.684-29.332 52.195-4.82 12.891-8.238 24.984-10.301 36.574 3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"
                fill="#003956"
              />
            </svg>

            {/* Vercel Again */}
            <Icon viewBox="0 0 256 256" boxSize={36} title="Vercel">
              <path fill="black" d="M128 32L256 224H0L128 32z" />
            </Icon>
          </Flex>
        </Box>
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
          Want your course fees back? Easy peasy! 🍋 Refer <b>3 friends</b>{" "}
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
              backgroundImage:
                "linear-gradient(135deg, #f65959ff 0%, red 100%)",
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
