import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { faBurst } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Landing() {
  return (
    <Box minHeight={'100vh'} backgroundColor={'#fbf3eb'} position={'relative'}>
      <Flex justifyContent={'space-around'} height={'100vh'} paddingRight={'5%'} paddingLeft={'5%'}>
        <Flex className="first" direction={{ base: 'column', md: 'row' }} justifyContent={'center'} alignItems={{ base: 'center', md: 'start' }} width={{ base: '100%', md: '50%' }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Flex direction="column" textAlign={{ base: 'center', md: 'left' }} maxWidth={'80%'}>
            <Text color={'#1e1e28'} fontWeight={600} fontSize={{ base: '4xl', md: '6xl' }} className='bold' lineHeight={'1.2'}>
              Find your next
            </Text>
            <Text color={'#1e1e28'} fontWeight={600} fontSize={{ base: '4xl', md: '6xl' }} className='bold' lineHeight={'1.2'}>
              fur baby
            </Text>
            <Text color={'#1e1e28'} fontWeight={600} fontSize={{ base: '4xl', md: '6xl' }} className='bold' lineHeight={'1.2'}>
              instantly <FontAwesomeIcon icon={faBurst} color="#f8975a" size="2xs" style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
            </Text>
            <Text color={'black'} fontSize={{ base: 'xl', md: 'xl' }} marginTop={10} style={{ maxWidth: '100%' }}>
              Welcome to our revolutionary pet finder platform! We do the searching for you, sending you the latest listings from various pet adoption sites in real-time. Sign up now and be the first to know when your perfect furry companion becomes available. Receive instant alerts via email or text as soon as new pets are posted. Your future furry friend could be just a click away!
            </Text>
            <Button size={'lg'} marginTop={10} borderRadius={4} backgroundColor='#f8975a !important' width={'fit-content'} color={'#ffffff'}>
              Sign up now!
            </Button>
          </Flex>
        </Flex>
        <Flex className="second" justifyContent={'center'} alignItems={'center'} width={{ base: '100%', md: '50%' }}>
          <Box width={'100%'} height={'100%'} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box className='circular_image' style={{ position: 'relative', width: '100%', height: '80%' }}>
              <Image
                src="/catdog.png"
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
