import {
  Container,
  Heading,
  VStack,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  console.log(params.token);

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <FormLabel htmlFor="email" children="Email Address" />
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your new password"
            type="password"
            focusBorderColor="blue.500"
          />

          <Button type="submit" w={'full'} colorScheme="blue">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
