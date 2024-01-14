'use client'
import { signUp } from '../services/actions/user';
import 'react-phone-input-2/lib/style.css'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  FormErrorMessage,
  Link,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState, useTransition } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import FormInput from './UI/FormInput';
import PhoneInput from 'react-phone-input-2';
import { redirect } from 'next/navigation';

export default function SignUpForm({handleTypeChange}: {handleTypeChange: () => void}) {
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [, startTransition] = useTransition();

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone_number: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    phone_number: [],
    email: [],
    password1: [],
    password2: [],
  })
  const [successFullSignUp, setSuccessFullSignUp] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (successFullSignUp) {
      const timeout = setTimeout(() => startTransition(() => redirect("/homepage")), 3000);
      return () => clearTimeout(timeout);
    }
  }, [successFullSignUp]);

  function signUpCalled() {
    signUp(formData).then((res)=> {
      if ('Success' in res) {
        setSuccessFullSignUp(true)
        toast({
          title: `Success! You will now be redirected to our homepage.`,
          status: 'success',
          isClosable: true,
          position: 'top'
        })
      }
      else {
        const errorKeys = Object.keys(res['Error']);
        errorKeys.forEach((el) => {
          setErrors((prevState) => ({
            ...prevState,
            [el]: res['Error'][el]
          }))
        })
        Object.keys(formData).forEach((el) => {
          if (errorKeys.indexOf(el) < 0) {
            setErrors((prevState) => ({
              ...prevState,
              [el]: []
            }))
          }
        })
      }
    }).catch(() => {
        toast({
          title: `Error! Unable to register user. Please try again later.`,
          status: 'error',
          isClosable: true,
          position: 'top'
        })
    })
  }

  const signUpButtonDisabled = () => {
    const emptyPassword = formData.password1.length === 0;
    const emptyConfirmPassword = formData.password2.length === 0;
    const passwordIsNotPasswordConfirm = formData.password1 !== formData.password2;
    return emptyPassword || emptyConfirmPassword || passwordIsNotPasswordConfirm
  }

  return (
    <Box
    rounded={'lg'}
    bg={'#fbf3eb'}
    boxShadow={'lg'}
    p={8}>
    <Stack spacing={4}>
      <HStack>
        <Box>
          <FormInput name='First Name' id='firstName' isRequired handleChange={handleInputChange} isInvalid={Boolean(errors['firstName'].length)} errors={errors['firstName']}/>
        </Box>
        <Box>
          <FormInput name='Last Name' id='lastName' isRequired handleChange={handleInputChange}  isInvalid={Boolean(errors['lastName'].length)} errors={errors['lastName']}/>
        </Box>
      </HStack>
        <FormControl id='phone_number' isRequired isInvalid={Boolean(errors['phone_number'].length)}>
          <FormLabel>Phone Number</FormLabel>
          <PhoneInput
            containerStyle={errors['phone_number'].length ? {'border': '2px solid red', borderRadius: '6px'} :{ width: '100%', height: '48px'}} // Set width to 100% to match Chakra UI Input width
            inputStyle={{ backgroundColor: '#fbf3eb', width: '100%', height: '48px' }} // Match Chakra UI Input style
            country={'gb'}
            value={formData.phone_number}
            onChange={(value: any) => setFormData((prevData) => ({
              ...prevData,
              ['phone_number']: value,
            }))}
          />
          <FormErrorMessage>{errors['phone_number'].join(' ')}</FormErrorMessage>
        </FormControl>
        <FormInput name='Email address' id='email' isRequired handleChange={handleInputChange}  isInvalid={Boolean(errors['email'].length)} errors={errors['email']}/>
      <FormControl id="password1" isRequired isInvalid={Boolean(errors['password1'].length) || Boolean(errors['password2'].length)}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input _focusVisible={{ border: '2px solid #0F7173 '}} type={showPassword ? 'text' : 'password'} onChange={handleInputChange}/>

          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors['password1'].join(' ') || errors['password2'].join(' ')}</FormErrorMessage>
      </FormControl>
      <FormControl id="password2" isRequired isInvalid={Boolean(errors['password1'].length) || Boolean(errors['password2'].length)}>
        <FormLabel>Confirm password</FormLabel>
        <InputGroup>
          <Input _focusVisible={{ border: '2px solid #0F7173 '}} type={showPasswordConfirm ? 'text' : 'password'} onChange={handleInputChange}/>

          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() => setShowPasswordConfirm((showPasswordConfirm) => !showPasswordConfirm)}
              >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>

        </InputGroup>
        <FormErrorMessage>{errors['password1'].join(' ') || errors['password2'].join(' ')}</FormErrorMessage>
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
          onClick={signUpCalled}
          isDisabled={signUpButtonDisabled()}
          >
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
