import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Enroll = () => {
  return (
    <Container h={'90vh'} padding={'16'}>
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
        <Box bg={'blue.400'} p={'4'} css={{borderRadius:"8px 8px 0 0"}}>
            <Text color={'black'} children={`Pro Pack - ₹2999.00`}/>
        </Box>
        <Box p={'4'}>
        <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
        <Text color={'black'} children={`Join Pro Pack and Get Access to all content.`}/>
        <Heading size={'md'} children="₹2999 Only"/>
        </VStack>
        <Button my={'8'} w={"full"} colorScheme='blue'>Buy Now</Button>
        </Box>
        
      </VStack>
    </Container>
  );
};

export default Enroll;
