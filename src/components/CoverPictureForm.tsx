import { FormControl, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import CustomFileUpload from "./ImageUpload";
import NavigationButtons from "./NavigationButtons";

interface CoverPictureProps {
  coverPicture: string | null;
  coverPictureName:string|null;
  onFileChange: (file: File | null) => void;
  onBack: () => void;
  onNext: () => void;
}
const CoverPictureForm: React.FC<CoverPictureProps> = ({
  coverPictureName,
  coverPicture,
  onFileChange,
  onBack,
  onNext,
}) => {
  return (
    <>
      <Text fontSize="xl" mb={4}>
        Add your cover picture
      </Text>
      <FormControl>
      {coverPicture && (
           <Flex justifyContent="center" >
           {" "}
           <Image
             maxH="100px"
             src={coverPicture}
             alt="profile picture"
             mt={2}
             borderRadius={10}
           />
         </Flex>
        )}
        <CustomFileUpload label="Cover Picture" onFileChange={onFileChange} fileName={coverPictureName} />
      </FormControl>
      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
      ></NavigationButtons>
    </>
  );
};

export default CoverPictureForm;
