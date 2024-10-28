import { FormControl, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import CustomFileUpload from "./ImageUpload";
import NavigationButtons from "./NavigationButtons";
interface Step3Props {
  profilePicture: string | null;
  profilePictureName: string|null;
  onFileChange: (file: File | null) => void;
  onBack: () => void;
  onNext: () => void;
}
const ProfilePictureForm: React.FC<Step3Props> = ({
  profilePicture,
  profilePictureName,
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
      {profilePicture && (
          <Flex justifyContent="center" >
            {" "}
            <Image
              maxH="100px"
              src={profilePicture}
              alt="profile picture"
              mt={2}
              borderRadius={10}
            />
          </Flex>
        )}
        <CustomFileUpload label="Profile Picture" onFileChange={onFileChange} fileName={profilePictureName} />
        
      </FormControl>
      <NavigationButtons onBack={onBack} onNext={onNext}></NavigationButtons>
    </>
  );
};

export default ProfilePictureForm;
