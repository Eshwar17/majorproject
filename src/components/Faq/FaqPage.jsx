import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
  Text,
  Center,
  useColorModeValue
} from '@chakra-ui/react';
import AnimatedUnderline from '../Underlines/AnimatedUnderline';

const FaqPage = () => {
  return (
    <Container maxW="container.lg" py={8}>
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
          Frequently Asked Questions
        </Text>
      </Center>
<AnimatedUnderline />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            GrapplTech is a platform that connects students and companies by providing bootcamps, trainings(live sessions) and resources to help students advance their careers.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              How does GrapplTech generate revenue?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          GrapplTech generates revenue through selling bootcamps, workshops, and corporate trainings, as well as by outsourcing skilled candidates and interns to companies. We earn one-time commissions from companies for successful candidate placements and commissions for outsourcing interns to paid internships.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I find bootcamps on GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            To find bootcamps on GrapplTech, you can browse through our bootcamps listings and apply using the Apply Link.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do I need to pay to use GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, you have to pay as little as possible for our training programs, which are designed to enhance your skills and prepare you for your dream careers. However, access to some of our bootcamp listings is provided to you for free. We believe in making valuable opportunities accessible, and that's why we offer affordable training options to help you excel in your career journey.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Do I get placement support for bootcamp?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at GrapplTech, we offer perfect placement guidance.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Who are the clients at GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Our clients at GrapplTech include a diverse range of stakeholders, from young startups to local businesses looking to enhance their online presence. Our client base consists of individuals and organizations seeking various services such as web development, landing page creation, web application development, app maintenance, and more. We partner with them to meet their specific requirements, helping them grow and succeed in the digital landscape.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I get career advice and guidance on GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech offers career advice and resources to help you with resume building, interview preparation, and career development.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Is GrapplTech available globally?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech is available to students and companies worldwide. You can access our platform from anywhere to find bootcamps or career opportunities.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I contact GrapplTech support?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            You can reach out to our support team by visiting the Contact Us page on our website. We'll be happy to assist you with any questions or issues you may have.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer bootcamps in specific industries?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech provides bootcamps in various industries. You can explore bootcamp in your preferred domain on our platform.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I apply to multiple bootcamps at once?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, you can apply to multiple bootcamps on GrapplTech. Simply browse the listings, review the requirements, and submit applications to the bootcamps that interest you.
          </AccordionPanel>
        </AccordionItem>

        
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              During the bootcamp, do you allow grapplers to work on real client projects?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at GrapplTech, we provide our grapplers with valuable hands-on experience. Grapplers have the opportunity to work on real client projects right from the inception. This practical exposure allows grapplers to collaborate with our clients, contribute to project development from scratch, and gain insights into real-world challenges and solutions. We believe in offering a dynamic learning environment that prepares grapplers for their future careers.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FaqPage;
