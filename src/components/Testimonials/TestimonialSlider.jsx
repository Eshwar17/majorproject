import React, { useState, useEffect } from 'react';
import {Text, Center, Avatar, Stack, useColorModeValue, Box,Container} from '@chakra-ui/react';
import { testimonials } from './data'; // Import your data
import AnimatedUnderline from '../Underlines/AnimatedUnderline';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Change testimonials every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (<>
    <Stack mt={12} mb={6} spacing={4} align={'center'}>
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
          Voices of Success
        </Text>
      </Center>
<AnimatedUnderline />
          <Text textAlign={"center"}>At GrapplTech, success stories are not just anecdotes; they're testaments to the transformative power of meaningful bootcamps. Hear directly from students whose careers were launched through our platform. These success stories are just a glimpse of the countless students whose lives have been positively impacted by GrapplTech. Join our community and be the next success story in your career journey!</Text>
        
        </Stack>
    <Box bg={'transparent'} id='testimonial-bg'>
    
      <Container w={'full'} py={4} as={Stack} spacing={4}>
        
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}></Stack>
    <Center>
    
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      w={["90vw","60vw"]}
      p={2}
      mb={4}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}><Center>
<Avatar name={testimonials[currentIndex].name} /></Center>
  <Text fontSize="xl" fontWeight="bold" color={"#0963ac"} textAlign={"center"}>
  
    {testimonials[currentIndex].name}
  </Text>
  <Text fontSize="md" mt="2" color={"gray.600"} textAlign={"center"}>
    {testimonials[currentIndex].review}
  </Text>
  <Center mt="2">
 <Text color={"#0963ac"}> Rating: {Array(+testimonials[currentIndex].rating).fill("⭐").join("")}</Text>
</Center>
  <Text fontSize="sm" mt="4" color="gray.600" textAlign={"center"}>
    Location: {testimonials[currentIndex].place}
  </Text>
</Stack></Center>
      </Container>
    </Box>
    </>
  );
};

export default TestimonialSlider;
