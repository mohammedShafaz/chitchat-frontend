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

interface AdditionalInfoProp {
  profileBio: string;
  onProfileBioChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
  submissionMessage: string | null;
}

const AdditionalInfo: React.FC<AdditionalInfoProp> = ({
  profileBio,
  onProfileBioChange,
  onBack,
  loading,
  onSubmit,
  submissionMessage,
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
        <Button
          mt={4}
          colorScheme="green"
          onClick={onSubmit}
          isLoading={loading}
          isDisabled={loading}
        >
          Submit
        </Button>
        {submissionMessage && (
          <Text
            mt={2}
            color={
              submissionMessage.includes("successfully")
                ? "green.500"
                : "red.500"
            }
          >
            {submissionMessage}
          </Text>
        )}
      </Flex>
    </>
  );
};

export default AdditionalInfo;
