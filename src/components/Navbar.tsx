import { Box, Image, Button, Flex } from '@chakra-ui/react';
import logo from '../assets/default-monochrome.svg';
import { useNavigate } from 'react-router-dom';

function  Navbar() {
  const navigate=useNavigate();
  return (
    <Box as="nav" w='100%' h='80px' p={5} bg='#689496' boxShadow='2xl' display='flex' justifyContent='space-between'>
      <Flex alignItems='center'>
        <a href="/" >
          <Image src={logo} alt='logo' w='140px'/>
        </a>
      </Flex>
      <Flex alignItems='center'>
        <Button colorScheme='blackAlpha' variant='outline' mr={2} borderColor='white' onClick={()=>navigate('/Register')}>
         Sign up
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;