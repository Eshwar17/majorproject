/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import {
  Button,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
// import vg from "../../assets/images/hero2.png";
import vg1 from "../../assets/images/coffeegrptch.png";
import Features from "../Features/Features";
import { FaUserGraduate, FaStar } from "react-icons/fa";
import FeaturesSection from "../Features/FeaturesSection";
import Alumni from "../alumni/Alumni";
import CardSlider from "../CardSliders/CardSlider";
import FaqPage from "../Faq/FaqPage";
import SomethingBigIsComingSection from "../Surprise/SomethingBigIsComingSection";
import TestimonialSlider from "../Testimonials/TestimonialSlider";
import { HStack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../../assets/images/grp-hero.png"; // <-- Replace with your image
import { useColorModeValue } from "@chakra-ui/react";
import AnimatedUnderline from "../Underlines/AnimatedUnderline";

const Stat = ({ icon: Icon, number, label }) => (
  <HStack spacing={3}>
    <Box
      bg={useColorModeValue("black", "white")}
      p={3}
      borderRadius="full"
      color={useColorModeValue("white", "black")}
      fontSize="lg"
    >
      <Icon />
    </Box>

    <VStack align="flex-start" spacing={0}>
      <Text fontSize="xl" fontWeight="700" color="#028EC4">
        {number}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </VStack>
  </HStack>
);
const MotionSvg = motion.svg;
function Home() {
  useEffect(() => {
    const chatElement = document.getElementById("whats-chat");
    const chatTopRightElement = document.getElementById("chat-top-right");
    const sendBtnElement = document.getElementById("send-btn");

    function showchatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function closechatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "-500px";
      }
    }

    function showchatboxtime() {
      setTimeout(launchbox, 5000);
    }

    function launchbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "6%";
      }
    }

    function sendmsg() {
      const msgElement = document.getElementById("whats-in");
      if (msgElement) {
        var msg = msgElement.value;
        var relmsg = msg.replace(/ /g, "%20");
        window.open(
          "https://api.whatsapp.com/send?phone=918099523442&text=" + relmsg,
          "_blank"
        );
      }
    }

    if (chatElement) {
      chatElement.addEventListener("mouseover", showchatbox);
    }

    if (chatTopRightElement) {
      chatTopRightElement.addEventListener("click", closechatbox);
    }

    if (sendBtnElement) {
      sendBtnElement.addEventListener("click", sendmsg);
    }

    // You can use window.onload here to ensure the elements are present in the DOM
    window.onload = showchatboxtime;
  }, []);

  return (
    <section className="home">
      <Box
        as="section"
        px={[6, 10, 16]}
        py={[16, 20]}
        maxW="7xl"
        mx="auto"
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        gap={10}
        fontFamily="Poppins"
      >
        {/* LEFT SIDE */}
        <VStack align={["center", "flex-start"]} spacing={6} maxW="lg">
          <Text
            fontSize="sm"
            color="#028EC4"
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="1.5px"
          >
            A platform for learners & Employers
          </Text>

          {/* MAIN HEADING */}
          <Box position="relative" display="inline-block">
            {/* MAIN HEADING */}
            <Text
              fontSize={["4xl", "4xl", "7xl"]}
              fontWeight="800"
              lineHeight="1.1"
              color={useColorModeValue("black", "white")}
              fontFamily="Bricolage Grotesque"
              position="relative"
              zIndex={2}
              mb={4}
            >
              Grappl & Grow with real tech careers
            </Text>

            {/* ANIMATED UNDERLINE */}
            <MotionSvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1418 125"
              width="100%"
              style={{
                position: "absolute",
                bottom: "-15px", // moves underline closer or farther
                left: 0,
              }}
              fill="none"
              stroke={"#FFA900"}
              strokeWidth="12"
              animate={{
                strokeDashoffset: [1400, 0, 1400], // loop
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              strokeDasharray="1400"
            >
              <path d="M153.58 20.56c54.61 7.77 11.57 2.06 114.89 15.59 13.33 1.74 90.26 10.48 91.36 10.58 134.57 12.96 190.69 18.5 388.54 25.15 129.22 1.29 93.08 1.1 154.55.57 81.39-.71 59.62-.04 125.55-4.57 63.95-4.4 45.79-3.03 63.95-4.82 122.74-12.1 74.45-6.7 196.81-22.16.11-.01 87.68-12.88 144.71-23.82l59.43-11.39c1.85-.35 3.34 1.62 4.26 2.89 5.62 7.81 7.57 23.36 5.18 27.51 24.07-1.73 36.84-3.04 53.78-2.26 2.94.14 5.88.72 8.79 1.14 7.63 2.7 13.25 29.31 8.37 33.57a11.5 11.5 0 0 1-6.34 3.04 61.01 61.01 0 0 1-21.5 10.23c-4.78 1.12-7.26 1.09-26.8 2.32-26.15 1.64-20.08 2.59-70.36 10.41-124.17 19.35-260.96 36.26-386.48 42.12-203.77 9.49-418.63-.99-621.76-19.77C188.84 102.05 36.15 75.18 30.07 74.7a10.51 10.51 0 0 1-4.75-1.64c-1.91-1.23-3.06-3.52-4.14-5.42-5.56-9.8-6.47-22.79-4.73-27.16-2.45-1.29-4.88-2.65-7.33-3.91C4.2 34.06-2.72 12.7 1.11 4.47c.85-1.32 1.61-2.4 2.71-3.52C4.57.19 5.83 0 6.95 0c7.42 0 128.62 17.94 146.63 20.56Z" />
            </MotionSvg>
          </Box>

          <Text fontSize="lg" color="gray.600" maxW="sm">
            Level up your skills. Learn from real mentors. Get internship-ready
            the smart way.
          </Text>

          {/* CTA */}
          <VStack align="flex-start" spacing={3} mt={4}>
            <Button
              as={Link}
              to="/bootcamps"
              size="lg"
              bg="#FFA900"
              color="white"
              borderRadius="full"
              px={8}
              _hover={{ bg: "#09537B", textDecoration: "none", color: "black" }}
            >
              Explore Bootcamps →
            </Button>

            <ChakraLink
              as={Link}
              to="/outsourcing"
              color="gray.600"
              fontSize="md"
              _hover={{ color: "#028EC4" }}
            >
              For Employers → <u>Outsourcing</u>
            </ChakraLink>
          </VStack>

          {/* STATS */}
          <HStack
            spacing={[4, 8]}
            mt={8}
            flexWrap="wrap"
            justify={["center", "flex-start"]}
          >
            <Stat
              icon={FaUserGraduate}
              number="4000+"
              label="Students Trained"
            />
            <Stat icon={FaStar} number="4.8★" label="Rated on AmbitionBox" />
          </HStack>
        </VStack>

        {/* RIGHT SIDE DUMMY IMAGE */}
        <Image
          src={heroImg}
          alt="Hero"
          borderRadius="20px"
          maxW={["80%", "70%", "450px"]}
          objectFit="cover"
        />
      </Box>
      <Box className="py-10 px-4 md:px-0">
        {/* Title */}
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
            mb={4}
          >
            What Makes GrapplTech Unique?
          </Text>
         
        </Center>
 <AnimatedUnderline />
        {/* Tagline */}
        <Center>
          <Text
            fontSize={["1.7rem", "2rem"]}
            fontWeight="700"
            className="text-[#FEBD00] mt-3"
            textAlign="center"
          >
            Your Launchpad to Top Bootcamps & Real Tech Careers
          </Text>
        </Center>

        {/* Description */}
        <Center>
          <Text
            fontSize="1rem"
            className="text-gray-600 max-w-[800px] mt-4 leading-relaxed font-[Poppins]"
            textAlign="center"
          >
            GrapplTech empowers students, fresh graduates, and aspiring tech
            professionals by connecting them to high-quality bootcamps across
            leading industries. We bridge the gap between learning and
            real-world experience—helping you gain practical skills, work on
            industry-level projects, and unlock opportunities that accelerate
            your career growth.
          </Text>
        </Center>
      </Box>
      {/* features */}
      <Features />
      {/* second hero */}
      <Box className="container1 py-16 px-4">
        <Stack
          direction={["column", "row"]}
          align="center"
          justify="space-between"
          spacing={["12", "24"]}
        >
          {/* LEFT IMAGE */}
          <Box flex="1" display="flex" justifyContent="center">
            <Image
              src={vg1}
              alt="Coffee allowance illustration"
              boxSize="md"
              objectFit="contain"
            />
          </Box>

          {/* RIGHT CONTENT */}
          <VStack
            flex="1"
            spacing={2}
            align={["center", "flex-start"]} // 👈 key fix
            textAlign={["center", "left"]} // 👈 key fix
          >
            {/* MAIN HEADING */}
            <Text
              fontSize={["4xl", "4xl", "7xl"]}
              fontWeight="800"
              lineHeight="1.1"
              color={useColorModeValue("black", "white")}
              fontFamily="Bricolage Grotesque"
            >
              Coffee Allowance at GrapplTech
            </Text>
<AnimatedUnderline />
            {/* Decorative underline */}
            <Box className="w-64 h-1 bg-[#FEBD00] rounded-full" />

            {/* Subheading */}
            <Text fontSize="1.6rem" fontWeight="600" className="text-[#FEBD00]">
              Because great ideas start with great coffee
            </Text>

            {/* Description */}
            <Text
              fontSize="1rem"
              color="gray.600"
              maxW="600px"
              className="leading-relaxed font-[Poppins]"
            >
              At GrapplTech, we believe learning should be energizing—literally.
              That’s why every GrapplTech learner receives a coffee allowance.
              Whether you're debugging late, attending virtual sessions, or
              collaborating on projects, your coffee is on us.
            </Text>

            <Text
              fontSize="1rem"
              color="gray.600"
              maxW="600px"
              className="leading-relaxed font-[Poppins]"
            >
              No eligibility checks. No conditions. If you're part of
              GrapplTech, you get it. Stay focused, stay caffeinated, and keep
              growing.
            </Text>

            {/* CTA BUTTON */}
            <Button
              as={Link}
              to="/bootcamps"
              size="md"
              bg="#028EC4"
              color="white"
              px={6}
              py={4}
              borderRadius="full"
              _hover={{ bg: "#09537B" }}
            >
              Apply for Bootcamps →
            </Button>
          </VStack>
        </Stack>
      </Box>
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
          mb={4}
        >
          GrapplTech Xperience
        </Text>
      </Center>
<AnimatedUnderline />
      {/* Tagline */}
      <Center>
        <Text
          fontSize={["1.7rem", "2rem"]}
          fontWeight="700"
          className="text-[#FEBD00] mt-3"
          textAlign="center"
        >
          Revolutionizing the Bootcamp Experience with Unparalleled Features for
          Your Success
        </Text>
      </Center>

      {/* Description */}
      <Center>
        <Text
          fontSize="1rem"
          className="text-gray-600 max-w-[800px] mt-4 leading-relaxed font-[Poppins]"
          textAlign="center"
        >
          Immerse yourself in an unparalleled learning journey with GrapplTech's
          unique features. Engage in live classes, work on real client projects,
          receive guidance from dedicated mentors, earn valuable certificates,
          explore multiple domains, and savor the camaraderie of team lunches.
          Prepare to level up your skills and create unforgettable memories as
          you embark on a transformative bootcamp experience.
        </Text>
      </Center>
      <FeaturesSection />
      <Text children="" />
      <Box padding={"8"}>
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
            mb={4}
          >
            Our Active Client Engagements
          </Text>
        </Center>
<AnimatedUnderline />
        <Text
          textAlign={"center"}
          fontSize={"1rem"}
          children="Welcome to our showcase of ongoing client projects! Explore our dynamic portfolio, where innovation meets dedication. Discover how we collaborate, create, and deliver tailored solutions that drive success. From concept to completion, witness the journey of our diverse range of projects across industries, exemplifying our commitment to excellence and client satisfaction. Dive into our world of ongoing endeavors, each representing our passion for innovation and quality service."
        />
      </Box>
      <Alumni />
      <SomethingBigIsComingSection />

      {/* features */}
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
          mb={4}
        >
          GrapplTech's Trailbazing Path
        </Text>
      </Center>
      <AnimatedUnderline />
      <Text
        textAlign={"center"}
        fontSize={"1.7rem"}
        children="Trending and Upcoming Bootcamps for Tomorrow's Innovators"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Unleash your potential with GrapplTech's curated collection of trending and upcoming bootcamps. Elevate your skills, embrace cutting-edge industries, and embark on a transformative career journey that paves the way for future innovation."
      />
      <CardSlider />

      <TestimonialSlider />

      <FaqPage />
      <>
        <div id="chat-box">
          <div id="chat-top">
            Grappie: Your Bootcamp Guide{" "}
            <span id="chat-top-right">
              <svg
                id="close-box"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 48 48"
              >
                <path
                  d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#fff"
                />
              </svg>
            </span>
            <div className="clear" />
          </div>
          <div id="chat-msg">
            <p>Welcome to GrapplTech, your gateway to exciting bootcamps!</p>
            <div id="chat-form">
              <div className="chat-in">
                <input
                  type="text"
                  id="whats-in"
                  placeholder="Send Your Message..."
                />
              </div>
              <div id="send-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"
                    fill="rgb(18, 140, 126)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="whats-chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1}
            width={35}
            height={35}
            viewBox="0 0 90 90"
          >
            <path
              d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
              fill="#FFF"
            />
          </svg>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  body{width:100%}\n*{margin:0px;padding:0px;box-sizing:border-box;}\n#whats-chat{position:fixed;right:3%;bottom:10%;height:auto;width:auto;background:#0963ac;padding:12.5px;border-radius:50px;}\n#whats-chat:hover{cursor:pointer;box-shadow:2px 2px 15px #ccc;bottom:11%;}\n/*===============================*/\n#chat-box{position:fixed;right:-500px;bottom:18%;width:250px;height:200px;transition:all .5s;}\n#chat-top{width:100%;line-height:2;background:rgb(18, 140, 126);color:white;text-align:center;border-radius:5px 5px 0 0;padding:0 10px;}\n#chat-msg{background:#ece5dd;padding:10px;border-radius:0 0 5px 5px;box-shadow:0 0 25px -10px #999;}\n#chat-msg p{font-size:14px;padding:5px;border-radius:0 50px 50px 50px;margin-bottom:10px;}\n#chat-form{display:flex;}\n.chat-in{width:80%;}\n#chat-form input{border-radius:5px 0 5px 5px;border:none;outline:none;font-size:14px;padding:5px;line-height:2;}\n#send-btn{width:20%;padding: 0 5px;}\n#chat-top-right{float:right;padding:5px 0;}\n#chat-box:after{content:'';\n    position: absolute;\n    top:58%;\n    left: 90%;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent; \n  \n  border-right:25px solid #ece5dd;}\n.right{float:right}\n.clear{clear:both}\n",
          }}
        />
      </>
    </section>
  );
}

export default Home;
