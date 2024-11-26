import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

interface AdditionalInfoProp {
  profileBio: string;
  onProfileBioChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
  submissionMessage: string | null;
  setSubmissionMessage: (message: string | null) => void;
}

const AdditionalInfo: React.FC<AdditionalInfoProp> = ({
  profileBio,
  onProfileBioChange,
  onBack,
  loading,
  onSubmit,
  submissionMessage,
  setSubmissionMessage,
}) => {
  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [setSubmissionMessage, submissionMessage]);

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
      <Box mt={6}>
        <Flex justify="space-between" align="center" mb={4}>
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
        </Flex>
        {submissionMessage && (
          <Text
            mt={4}
            color={
              submissionMessage.toLowerCase().includes("please verify")
                ? "green.500"
                : "red.500"
            }
            textAlign="center"
          >
            {submissionMessage}
          </Text>
        )}
      </Box>
    </>
  );
};

export default AdditionalInfo;
