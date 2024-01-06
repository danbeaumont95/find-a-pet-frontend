'use client'

import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import SignUpForm from '../Components/SignUpForm';
import LoginForm from '../Components/LoginForm';

export default function Signup() {
  const [type, setType] = useState('signup')

  const handleLoginClick = () => {
    setType('login')
  }
  const handleSignupClick = () => {
    setType('signup')
  }

  return (
    <Box minHeight={'100vh'} backgroundColor={'#fbccb4'} position={'relative'}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              {type === 'signup' ? 'Sign up' : 'Log in'}
            </Heading>
            <Text fontSize={'lg'} color={'gray.900'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          {type === 'signup' ? <SignUpForm handleTypeChange={handleLoginClick}/> : <LoginForm handleTypeChange={handleSignupClick}/>}
        </Stack>
      </Flex>
    </Box>
  )
}
