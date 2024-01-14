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
  useToast
} from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import FormInput from './UI/FormInput';

export default function LoginForm({ handleTypeChange }: { handleTypeChange: () => void }) {
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

   async function loginUser(formData: any) {
    const response = await fetch(`http://127.0.0.1:8000/find_a_pet/user_login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });
    const result = await response.json();
    return result;
  }
  
  
  const loginCalled  = async () => {
    loginUser(formData)
      .then((res) => {
        if (res.Error) {
          toast({
            title: `Error! Invalid details. Please try again.`,
            status: 'error',
            isClosable: true,
            position: 'top'
          })
        }
        else {
          toast({
            title: `Success! You will now be logged in.`,
            status: 'success',
            isClosable: true,
            position: 'top'
          })
        }
      })
      .catch((err: any) => {
        toast({
          title: `Error! Unable to login user. Please try again later.`,
          status: 'error',
          isClosable: true,
          position: 'top'
        })      
      })
  }
  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}>
      <Stack spacing={4}>
        <FormInput name='Email address' id='email' isRequired handleChange={handleInputChange}  isInvalid={Boolean(errors['email'].length)} errors={errors['email']}/>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              _focusVisible={{ border: '2px solid #0F7173 '}}
              type={showPassword ? 'text' : 'password'}
              onChange={handleInputChange}
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
            }}
            onClick={loginCalled}
            >
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
