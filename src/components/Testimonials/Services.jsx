import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex, Center, useColorModeValue, Icon
} from "@chakra-ui/react";
import { FaGraduationCap } from 'react-icons/fa';
import {GiAbacus} from 'react-icons/gi'
import {FcCollaboration} from 'react-icons/fc'
import {SiBoost} from 'react-icons/si'
import {ImRocket} from 'react-icons/im'
import {BsGraphUp} from 'react-icons/bs'
import WorkshopIllustrations from '../Underlines/WorkshopsIllustrations';
import AnimatedUnderline1 from '../Underlines/AnimatedUnderline1';

function Services() {
  return (
    <>
    <Container maxW={"container.2xl"} padding={"2"}>
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
          Workshops & Hackathons
        </Text>
      </Center>
<AnimatedUnderline1 />
      <Box p={2}>
      <Box flex="1" mb={2} order={[1, 1, 2]}>
          <Center>
           <WorkshopIllustrations />
          </Center>
        </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
          <Heading as="h2" fontSize="2xl" fontFamily="Bricolage Grotesque" textAlign={["center"]} mb={4}>
          Why Workshops and Hackathons Matter?
          </Heading>
          <Center>
      <AnimatedUnderline1 /></Center>
          <Text textAlign={"center"}>
          In the fast-paced world of technology and innovation, staying ahead of the curve is essential. At GrapplTech, we understand the importance of fostering creativity and enhancing skill sets among our participants. That's why we believe workshops and hackathons play a pivotal role in shaping the future of tomorrow's professionals. Here's why these events are more than just a fun activity—they're crucial for personal and professional growth.
          </Text>
        </Box>
      </Flex>
      <Box mt={2}>
  <Flex justifyContent="space-between" flexWrap="wrap">
    {/* Education First */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FaGraduationCap} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Skill Development
      </Heading>
      <Text>
      Workshops and hackathons provide a unique platform for individuals to acquire and refine their skills. Whether you're a beginner or a seasoned pro, these events offer a hands-on opportunity to learn new techniques and technologies, all while honing your problem-solving abilities.
      </Text>
    </Box>
    {/* Community Driven */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={GiAbacus} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Innovation Catalyst
      </Heading>
      <Text>
      In a world driven by innovation, workshops and hackathons are the breeding grounds for groundbreaking ideas. Participants are encouraged to think outside the box, explore new perspectives, and develop solutions that address real-world problems.
      </Text>
    </Box>
    {/* Innovation Hub */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FcCollaboration} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Networking and Collaboration: 
      </Heading>
      <Text>
      These events foster collaboration and networking like no other. Participants get to interact with like-minded individuals from diverse backgrounds, creating an environment where ideas flow freely, and connections are made. You never know, your next business partner or mentor might just be one hackathon away.
      </Text>
    </Box>
    {/* Customer-Centric */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={ImRocket} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Resume Enhancement
      </Heading>
      <Text>
      Attending workshops and hackathons is a great way to bolster your resume. Employers value individuals who take the initiative to learn and innovate. Mentioning your involvement in such events can set you apart from the competition in the job market.


      </Text>
    </Box>
    {/* Ownership and Responsibility */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={SiBoost} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Test-Drive Your Knowledge
      </Heading>
      <Text>
      Workshops and hackathons allow participants to put their skills to the test. It's one thing to learn a concept in theory, but applying it in a time-bound, competitive environment can be an eye-opening experience, pushing you to reach your full potential.
      </Text>
    </Box>
    {/* Diversity and Inclusion */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={BsGraphUp} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Personal Growth
      </Heading>
      <Text>
      Beyond professional development, these events contribute to personal growth. They build resilience, enhance adaptability, and boost your confidence. Overcoming challenges in a workshop or hackathon can instill a sense of achievement that carries over into all aspects of life.
      </Text>
    </Box>
  </Flex>
</Box>
      </Box>
      
    </Container>
    <Heading as="h1" textAlign="center" fontFamily="Bricolage Grotesque" fontSize="3xl" color={"blue.800"} mt={8} mb={2} p={2}>
      Upcoming Workshops & Hackathons
      </Heading>
      <Center>
      <AnimatedUnderline1 /></Center>
      <div className="main1">
        <ul className="cards1">
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Workshop</span>
                <img src="https://img.freepik.com/free-vector/illustrated-choice-worker-concept_52683-44355.jpg?size=626&ext=jpg&ga=GA1.1.377232785.1697539441&semt=ais" alt='img'/>
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                Crafting the Perfect Resume
                </h2>
                <div className="card1_text">
                  <p style={{"text-align":"center"}}>
                    <strong>Workshop Date: 11/03/2024</strong>
                  </p>
                  <p style={{"text-align":"center"}}>
                  Interns at GrapplTech are eligible to participate in this workshop
                  </p>
                  <hr />
                  <p style={{"text-align":"center"}}>
                  Are you struggling to create a resume that stands out in a competitive job market? In our "Crafting the Perfect Resume" workshop, you'll learn the art of resume writing. We'll cover everything from structuring your resume effectively, choosing the right keywords, and tailoring your document for specific job applications. You'll also receive personalized feedback on your current resume to help you make it shine.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Workshop</span>
                <img src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?size=626&ext=jpg&ga=GA1.1.377232785.1697539441&semt=ais" alt='img'/>
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                Navigating the Job Market
                </h2>
                <div className="card1_text">
                  <p style={{"text-align":"center"}}>
                    <strong>Workshop Date: 18/02/2024</strong>
                  </p>
                  <p style={{"text-align":"center"}}>
                  Interns at GrapplTech are eligible to participate in this workshop
                  </p>
                  <hr />
                  <p style={{"text-align":"center"}}>
                  Securing your dream job involves more than just submitting applications. In our "Navigating the Job Market" workshop, you'll discover the strategies and techniques that can help you succeed in your job search. We'll explore networking, online job boards, and how to tap into the hidden job market. You'll leave with a personalized job search plan, ready to take your career to the next level.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
                <span className="note1">Hackathon</span>
                <img src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-4348.jpg?size=626&ext=jpg&ga=GA1.1.377232785.1697539441&semt=ais" alt='img'/>
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                Emerging Technologies
                </h2>
                <div className="card1_text">
                  <p style={{"text-align":"center"}}>
                    <strong>Hackathon Date: 04-03-2024</strong>
                  </p>
                  <p style={{"text-align":"center"}}>
                  Top interns are eligible to participate in this hackathon
                  </p>
                  <hr />
                  <p style={{"text-align":"center"}}>
                  The world of technology is ever-evolving, and it's essential to stay current with the latest trends. In our "Emerging Technologies and You" hackathon, you'll dive into the exciting world of tech innovations. We'll explore topics like artificial intelligence, blockchain, and the Internet of Things, providing you with a clear understanding of their impact on various industries. This hackathon will equip you with the knowledge and insights to adapt and thrive in a rapidly changing tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </li>
          {/* <li className="cards1_item">
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Services