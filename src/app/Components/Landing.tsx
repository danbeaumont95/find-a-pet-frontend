'use client';
import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { faBurst } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Landing() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const description = isMobile ? `Welcome to our revolutionary pet finder platform! Sign up now and be the first to know when your perfect furry companion becomes available. Receive instant alerts via email or text as soon as new pets are posted. Your future furry friend could be just a click away!` : `Welcome to our revolutionary pet finder platform! We do the searching for you, sending you the latest listings from various pet adoption sites in real-time. Sign up now and be the first to know when your perfect furry companion becomes available. Receive instant alerts via email or text as soon as new pets are posted. Your future furry friend could be just a click away!`

  return (
    <Box minHeight={'100vh'} backgroundColor={'#fbf3eb'} position={'relative'}>
      <Flex
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={isMobile ? '3%' : '5%'}
      paddingY={'5%'}
      >
        <Flex
        direction={'column'}
        textAlign={isMobile ? 'center' : 'left'}
        alignItems={isMobile ? 'center' : 'start'}
        width={'80%'}
        height={'fit-content'}
        className="flex_left"
        >
          <Text
            color={'#1e1e28'}
            fontWeight={600}
            fontSize={isMobile ? '4xl' : '6xl'}
            className='bold'
            lineHeight={'1.2'}
            marginTop={isMobile ? undefined :-40}
            as={'h1'}
          >
            Find your next
          </Text>
          <Text
            color={'#1e1e28'}
            fontWeight={600}
            fontSize={isMobile ? '4xl' : '6xl'}
            className='bold'
            lineHeight={'1.2'}
          >
            fur baby
          </Text>
          <Text
            color={'#1e1e28'}
            fontWeight={600}
            fontSize={isMobile ? '4xl' : '6xl'}
            className='bold'
            lineHeight={'1.2'}
          >
            instantly <FontAwesomeIcon icon={faBurst} color="#f8975a" size="2xs" style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
          </Text>
          {isMobile ?     <Box style={{ position: 'relative' }} height={'80%'} width={isMobile ? '100%': '100%'}>
        <Box width={isMobile ? undefined : 800} height={isMobile ? undefined : 800}>

            <Image
              src="/catdog-removebg.png"
              layout="responsive"
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 1000}
              alt="Screenshots of the dashboard project showing mobile versions"
              title="Cat and dog"
            />
        </Box>
          </Box>: null}
          <Text color={'black'} fontSize={isMobile ? 'xl' : 'xl'} marginTop={10} maxWidth={'100%'}>
          {description}
          </Text>
          <Button size={'lg'} marginTop={10} borderRadius={4} backgroundColor='#f8975a !important' width={'fit-content'} color={'#ffffff'}>
            Sign up now!
        </Button>
        </Flex>
        <Box width={'70%'} >

        <Box
        marginTop={isMobile ? '5%' : '0'}
        marginLeft={isMobile ? '0' : '5%'}
        width={isMobile ? '100%' : '50%'}
        height={'100%'}
        position={'relative'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        className="flex_right"
        >
        {isMobile ? null :   
        <Box style={{ position: 'relative' }} height={'80%'} width={isMobile ? '100%': '100%'}>
          <Box width={isMobile ? undefined : 800} height={isMobile ? undefined : 800}>

            <Image
              src="/catdog-removebg.png"
              layout="responsive"
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 1000}
              alt="Screenshots of the dashboard project showing mobile versions"
              title="Cat and dog"
            />
        </Box>
      </Box>}
        </Box>
        </Box>
      </Flex>
    </Box>
  );
}
