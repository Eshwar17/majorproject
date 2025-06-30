import { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Center,
  Image,
  Icon,
  Button
} from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsPersonCheckFill } from "react-icons/bs";
import cooking from "../../assets/images/cooking.png";
import portfolios from "../../assets/images/portfolios.png";
import GoogleCalendarButton from './GoogleCalenderButton';

function Services() {
  const buttonRef = useRef(null);

  useEffect(() => {
  const alreadyInitialized = document.getElementById('google-calendar-button');

  if (alreadyInitialized) return; // Prevent multiple injections

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
  script.async = true;
  script.onload = () => {
    if (window.calendar && buttonRef.current) {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KGwxgLYJI73sTiS81PebrfLUWoW04b4l7aoIbszfdnTwvw43XH2-LtnmV_0haia3ko2NzUPX-?gv=true',
        color: '#0963ac',
        label: 'Cook My Portfolio',
        target: buttonRef.current,
      });
    }
  };
  document.body.appendChild(script);
}, []);

  return (
    <>
      <Container maxW={"container.2xl"} padding={"2"}>
        <Heading
        class="headerddd"
          children="Portfolio = Digital Proof of Your Genius"
          fontFamily={"Poppins"}
          textAlign={["center"]}
        />
        <Center>
          <svg
            width="260"
            height="20"
            viewBox="0 0 628 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
              fill="#FEBD00"
            />
          </svg>
        </Center>
        <Box p={6}>
          <Box flex="1" mb={6} order={[1, 1, 2]}>
            <Center>
              <Image
                src={portfolios} // Add your image source here
                alt="GrapplTech Team"
                borderRadius="lg"
                maxW="45%"
                objectFit="cover"
                borderWidth={4}
                borderColor="blue.500"
              />
            </Center>
          </Box>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontFamily={"Poppins"}
                textAlign={["center"]}
                mb={4}
              >
               Your Portfolio, Your Flex — Designed to Land Gigs, Clients, and Clout.
              </Heading>
              <Center>
                <svg
                  width="260"
                  height="20"
                  viewBox="0 0 628 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
                    fill="#FEBD00"
                  />
                </svg>
              </Center>
              <Text textAlign={"center"}>
                In a world where your online presence is your first impression, a basic résumé just doesn’t cut it. Whether you're a developer, designer, creator, or startup hustler — your portfolio should slap. At GrapplTech, we don’t just build portfolios; we build digital personalities that scream your vibe. Custom designs, zero cringe, mobile-first, recruiter-friendly, and totally you. From GitHub to Behance, we connect your work, your story, and your goals — all in one killer site.
              </Text>
            </Box>
          </Flex>
          
          <Box mt={2}>
            <Flex justifyContent="space-between" flexWrap="wrap">
              {/* Education First */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={MdCall} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  Book Your Kickoff Call
                </Heading>
                <Text>
                 Let’s talk goals, vibes, and vision. Schedule a quick 1-on-1 meeting with our team to understand what kind of portfolio fits you. No fluff — just clarity.
                </Text>
              </Box>
              {/* Community Driven */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={BsPersonCheckFill} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  Meet Your Portfolio Strategist
                </Heading>
                <Text>
                  You’ll be assigned a Dedicated Portfolio Strategist (a.k.a. your personal brand hacker). They’ll help map your portfolio’s flow, finalize the design style, lock in the features, and discuss pricing transparently.
                </Text>
              </Box>
              {/* Innovation Hub */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={BiSupport} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  We Build, Deploy & Support
                </Heading>
                <Text>
                  We build your stunning portfolio, deploy it with your domain, and offer post-launch support and maintenance. Your portfolio will be responsive, fast, and built to impress — every click, scroll, and tap.
                </Text>
              </Box>
            </Flex>
          </Box>
          {/* Application process */}
          
        </Box>
      </Container>
      <Heading
        as="h1"
        textAlign="center"
        fontFamily={"Poppins"}
        fontSize="3xl"
        color={"blue.800"}
        mt={8}
        mb={8}
        p={2}
      >
        Let’s Cook Your Digital Masterpiece!
      </Heading>
      <Center>
        <svg
          width="260"
          height="20"
          viewBox="0 0 628 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
            fill="#FEBD00"
          />
        </svg>
      </Center>
      <div className="main1">
        
        <center>
          <Text>
            Our team’s fired up and ready to chef up your portfolio with the perfect mix of design, content, and personality. Think of it like your digital recipe — custom-coded with clean UI, juicy visuals, spicy animations, and served fresh on your own domain. Whether you're chasing internships, freelance gigs, or startup investors, your portfolio will do the talking while you do the winning.

So… apron’s on. Tools are ready. Let’s cook. 🍳🔥
          </Text>
          <img src={cooking} width={"500px"} alt="img" />
        </center>
      </div>
      <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontFamily={"Poppins"}
                textAlign={["center"]}
                mb={4}
              >
🏆 150+ Grapplers, One Portfolio at a Time
              </Heading>
              <Center>
                <svg
                  width="260"
                  height="20"
                  viewBox="0 0 628 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
                    fill="#FEBD00"
                  />
                </svg>
              </Center>
              
              <Text textAlign={"center"}>
              We’ve already helped 150+ Grapplers turn their skills into stunning digital portfolios — and they’re out there getting hired, booked, and noticed. Whether it’s for job interviews, freelancing, startups, or college admissions, our portfolios have become launchpads for big moves. This isn’t just web design — this is your story, your style, and your spotlight.
              <br></br>
              <br></br>
              Real People. Real Growth. Real Results.
              </Text>
              <Center>
              <GoogleCalendarButton /></Center>
            </Box>
          </Flex>
          <Box mt={10} p={6} bg="gray.50" borderRadius="md">
  <Heading textAlign="center" mb={4} fontFamily="Poppins">
    💬 Hear From Our Grapplers
  </Heading>
  <div className="testimonial-sliderrr">
    <div className="slider-trackk">
      {[
        { name: "Aarav Sharma", location: "Delhi, India", quote: "This portfolio got me my first freelance gig within a week!" },
        { name: "Jeevan Kumar", location: "Austin, Texas", quote: "Loved how my personality came through. So clean and sharp!" },
        { name: "Roshan Kumar", location: "Chennai, India", quote: "It’s not just a site, it’s a digital identity. GrapplTech killed it!" },
        { name: "Vaishnavi R", location: "Dallas, Texas", quote: "I got shortlisted in 3 companies after adding this to my resume!" },
        { name: "Nikhil Yadav", location: "Kakinada, India", quote: "Best decision ever. The animations and vibe were on point!" },
        { name: "Arjun Patel", location: "Gujarat, India", quote: "Their strategist really understood what I needed." },
        { name: "Waseem Ahmed", location: "Houston, Texas", quote: "Clean design. Great support. Definitely recommend!" },
        { name: "Priya Verma", location: "Haryana, India", quote: "I landed an internship with this portfolio — it’s a career changer!" },
        { name: "Aakash N", location: "San Antonio, Texas", quote: "Deployment and support were super smooth!" },
        { name: "Joshni Priya", location: "Hyderabad, India", quote: "Mine looked better than templates on paid platforms.🔥" },
      ].map((t, index) => (
        <div className="testimoniall" key={index}>
          <p>"{t.quote}"</p>
          <strong>- {t.name}, {t.location}</strong>
        </div>
      ))}
    </div>
  </div>
</Box>

 {/* <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KGwxgLYJI73sTiS81PebrfLUWoW04b4l7aoIbszfdnTwvw43XH2-LtnmV_0haia3ko2NzUPX-?gv=true" style={{border: "0",width:"100%",height:"600",frameborder:"0"}}></iframe> */}
    </>
  );
}

export default Services;
