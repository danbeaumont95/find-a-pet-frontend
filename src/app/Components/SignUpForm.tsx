'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function SignUpForm({handleTypeChange}: {handleTypeChange: () => void}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
    rounded={'lg'}
    bg={'#fbf3eb'}
    boxShadow={'lg'}
    p={8}>
    <Stack spacing={4}>
      <HStack>
        <Box>
          <FormControl id="firstName" isRequired>
            <FormLabel >First Name</FormLabel>
            <Input _focusVisible={{ border: '2px solid #0F7173 '}} type="text" />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input _focusVisible={{ border: '2px solid #0F7173 '}} type="text" />
          </FormControl>
        </Box>
      </HStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input _focusVisible={{ border: '2px solid #0F7173 '}} type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input _focusVisible={{ border: '2px solid #0F7173 '}} type={showPassword ? 'text' : 'password'} />
          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Stack spacing={10} pt={2}>
        <Button
          loadingText="Submitting"
          size="lg"
          bg={'#f8975a !important'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}>
          Sign up
        </Button>
      </Stack>
      <Stack pt={6}>
        <Text align={'center'}>
          Already a user? <Link onClick={handleTypeChange} color={'#f8975a'}>Login</Link>
        </Text>
      </Stack>
    </Stack>
  </Box>
  )
}
