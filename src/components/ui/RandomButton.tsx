import { Button, Icon, keyframes } from "@chakra-ui/react";
import React from "react";


interface IRandomButton {
  icon: React.ElementType; 
}
// Define the keyframes for perpetual pulsating animation
const pulse = keyframes`
  0%, 100% { transform: scale(1); }   
  50% { transform: scale(1.3); }    
`;

const RandomButton: React.FC<IRandomButton> = ({ icon }) => {
  const pulseAnimation = `${pulse} 2s infinite ease-in-out`; // Animation timing

  return (
    <Button
    borderRadius="50%" 
    backgroundColor="green.400"
    w={{ base: "120px", sm: "150px", md: "190px" }}
    h={{ base: "120px", sm: "150px", md: "190px" }}
    animation={pulseAnimation}
    _hover={{
      backgroundColor: "green.500",
    }}
    >
       <Icon as={icon} boxSize={{ base: 5, sm: 6, md: 8 }} color="white" /> 
    </Button>
  );
};

export default RandomButton;
