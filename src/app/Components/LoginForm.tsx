'use client'

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function LoginForm({ handleTypeChange }: { handleTypeChange: () => void }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            _focusVisible={{ border: '2px solid #0F7173 '}}
            type="email"
            width="100%"
            style={{ minWidth: '300px', wordWrap: 'break-word' }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              _focusVisible={{ border: '2px solid #0F7173 '}}
              type={showPassword ? 'text' : 'password'}
              width="100%"
              style={{ minWidth: '300px' }}
            />
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
            Log in
          </Button>
        </Stack>
        <Stack pt={6}>
          <Text align={'center'}>
            Not a user? <Link onClick={handleTypeChange} color={'#f8975a'}>Register here</Link>
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}
