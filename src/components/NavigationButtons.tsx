// NavigationButtons.tsx
import React from 'react';
import { Button, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onBack, onNext, isNextDisabled }) => {
  return (
    <Flex justify="space-between" mt={4}>
      <Button
        mt={4}
        rightIcon={<ArrowBackIcon boxSize={5} />}
        colorScheme="green"
        variant="solid"
        borderRadius="27px"
        bgGradient="linear(to-r, green.400, green.500)"
        onClick={onBack}
      >
      </Button>
      <Button
        mt={4}
        rightIcon={<ArrowForwardIcon boxSize={5} />}
        colorScheme="green"
        variant="solid"
        borderRadius="27px"
        bgGradient="linear(to-r, green.400, green.500)"
        onClick={onNext}
        isDisabled={isNextDisabled}
      >
      </Button>
    </Flex>
  );
};

export default NavigationButtons;
