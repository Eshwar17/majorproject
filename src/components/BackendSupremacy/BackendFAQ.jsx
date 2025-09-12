import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
} from '@chakra-ui/react';

const BackendFAQ = () => {
  return (
    <Container maxW="container.lg" py={8}>
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
          Frequently Asked Questions
        </h2>

      <Accordion fontWeight={'600'} allowToggle>
        {/* Existing FAQ Items ... */}

        {/* Full Stack Developer in 100 Days Course FAQs */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What is the Full Stack Developer in 100 Days Course?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            A live bootcamp to become a job-ready full stack developer in 100 days.
            Covers front-end, back-end, databases, and deployment.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What technologies are taught?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            HTML5, CSS3, Tailwind CSS, ChakraUI JS, ES6, ReactJS, GSAP,
            NodeJS, ExpressJS, MongoDB, and Deployment.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What is the course fee?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            The entire 100-day program is priced at{" "}
            <strong style={{ color: "red", fontSize: "1.2rem" }}>Rs. 1599</strong>.
            Affordable and value-packed for aspiring developers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                Who are the tutors?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            The course is led by industry experts: 
            Eshwar Nagaraj, Chaitanya Reddy, and Sruthi Pasupuleti.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What is the course duration?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            The course lasts 100 days (around 3.5 months) with structured live sessions.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What is the learning mode?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Classes are conducted remotely in live sessions, fully interactive.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                Will recordings and resources be provided?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, lifetime access to recordings, detailed notes, and resources
            is provided to all participants.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What additional support is given?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            24/7 WhatsApp support, resume guidance, LinkedIn optimization,
            interview prep kit, and mock interviews.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                Are projects included?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, you’ll work on real-time projects including deployment,
            gaining industry-level experience.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                What is the course language?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            The course is delivered in Telugu to make learning easy and effective.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                How many seats are available?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Only 100 seats are available to ensure personalized attention.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box color={'red'} fontWeight={'600'} flex="1" textAlign="left">
                When does the batch start?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            The upcoming batch starts on <strong>25th September 2025</strong>.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default BackendFAQ;
