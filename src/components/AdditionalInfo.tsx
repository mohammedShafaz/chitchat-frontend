import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface AdditionalInfo {
  profileBio: string;
  onProfileBioChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const AdditionalInfo: React.FC<AdditionalInfo> = ({
  profileBio,
  onProfileBioChange,
  onBack,
  onSubmit,
}) => {
  return (
    <>
      <Text fontSize="xl" mb={4}>
        Additional Information
      </Text>
      <FormControl>
        <FormLabel mt={4}>Profile Bio</FormLabel>
        <Textarea
          placeholder="Tell us about yourself"
          value={profileBio}
          onChange={(e) => onProfileBioChange(e.target.value)}
        />
      </FormControl>
      <Flex justify="space-between" mt={4}>
        <Button
          mt={4}
          rightIcon={<ArrowBackIcon boxSize={5} />}
          colorScheme="green"
          variant="solid"
          borderRadius="27px"
          bgGradient="linear(to-r, green.400, green.500)"
          onClick={onBack}
        ></Button>
        <Button mt={4} colorScheme="green" onClick={onSubmit}>
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default AdditionalInfo;
