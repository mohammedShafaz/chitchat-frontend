import { DeleteIcon } from "@chakra-ui/icons";
import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface CustomFileUploadProps {
    label: string;
    onFileChange: (file: File | null) => void;
  }
  

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({ label, onFileChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileChange(file); // Pass the file to the parent component
    }
  };
  const handleClearFile = () => {
    setFileName(null); // Clear the local state
    onFileChange(null); // Notify the parent component to clear the file
  };
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Box
        position="relative"
        border="1px dashed"
        borderColor="gray.300"
        p={4}
        borderRadius="md"
        textAlign="center"
        cursor="pointer"
        _hover={{ borderColor: "gray.500" }}
      >
        <Input
          type="file"
          opacity={0}
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          width="100%"
          height="100%"
          cursor="pointer"
          onChange={handleFileChange}
        />
        <Text>{fileName || "Drag and drop here to upload, or click to select a file"}</Text>
        {fileName && (
        <Button leftIcon={<DeleteIcon/>} mt={2} onClick={handleClearFile}>
        </Button>
      )}
      </Box>
      
    </FormControl>
  );
};

export default CustomFileUpload;
