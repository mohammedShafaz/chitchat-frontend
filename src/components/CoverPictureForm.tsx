import { FormControl, Text, Image } from "@chakra-ui/react";
import React from "react";
import CustomFileUpload from "./ImageUpload";
import NavigationButtons from "./NavigationButtons";

interface CoverPictureProps {
  coverPicture: string | null;
  onFileChange: (file: File | null) => void;
  onBack: () => void;
  onNext: () => void;
}
const CoverPictureForm: React.FC<CoverPictureProps> = ({
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
        <CustomFileUpload label="Cover Picture" onFileChange={onFileChange} />
        {coverPicture && (
          <Image maxH="100px" src={coverPicture} alt="Cover Picture" mt={2} />
        )}
      </FormControl>
      <NavigationButtons
        onBack={onBack}
        onNext={onNext}
      ></NavigationButtons>
    </>
  );
};

export default CoverPictureForm;
