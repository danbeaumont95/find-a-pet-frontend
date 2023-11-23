'use client';

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Landing() {
  return (
    <Box minHeight={'100vh'} backgroundColor={'#EFC355'} position={'relative'}>
      <Flex justifyContent={'space-around'} height={'100vh'} paddingRight={'5%'} paddingLeft={'5%'}>
        <Flex className="first" direction={'column'} justifyContent={'center'} width={{ base: '40%', md: '40%' }} >
          <Text color={'#ffffff'} fontSize={{ base: '4xl', md: '6xl' }} className='font-bold' lineHeight={'1'}>
            Find your next fur baby instantly
          </Text>
            <Text color={'#ffffff'} fontSize={{ base: 'xl', md: 'xl' }} marginTop={10}>
              Be the first to know when people in your area are selling/putting their pet up for adoption
            </Text>
            <Button marginTop={10} borderRadius={10} backgroundColor='#7EB5E1 !important' width={'fit-content'} color={'#ffffff'}>Sign up now!</Button>
        </Flex>
        <Flex className="second" direction={'column'} justifyContent={'center'} width={{ base: '60%', md: '60%' }} >
          <Box width={'100%'} height={'100%'} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box className='circular_image' style={{ position: 'relative', width: '100%', height: '80%' }}>
              <Image
                src="/catanddog.png"
                layout="fill"
                alt="Screenshots of the dashboard project showing mobile versions"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
