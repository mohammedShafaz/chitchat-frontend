import { FormControl, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import CustomFileUpload from "./ImageUpload";
import NavigationButtons from "./NavigationButtons";
interface Step3Props {
  profilePicture: string | null;
  onFileChange: (file: File | null) => void;
  onBack: () => void;
  onNext: () => void;
}
const ProfilePictureForm: React.FC<Step3Props> = ({
  profilePicture,
  onFileChange,
  onBack,
  onNext,
}) => {
  return (
    <>
      <Text fontSize="xl" mb={4}>
        Add your profile picture
      </Text>
      <FormControl>
        <CustomFileUpload label="Profile Picture" onFileChange={onFileChange} />
        {profilePicture && (
          <Box justifyContent="center">
            {" "}
            <Image
              maxH="100px"
              src={profilePicture}
              alt="profile picture"
              mt={2}
            />
          </Box>
        )}
      </FormControl>
      <NavigationButtons onBack={onBack} onNext={onNext}></NavigationButtons>
    </>
  );
};

export default ProfilePictureForm;
