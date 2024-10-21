import {
  Box,
  Flex,
  Text,

} from "@chakra-ui/react";
import { useState } from "react";
import BasicInfoRegistration from "./BasicInfoRegistration";
import AccountDetails from "./AccountDetails";
import ProfilePictureForm from "./ProfilePictureForm";
import CoverPictureForm from "./CoverPictureForm";
import AdditionalInfo from "./AdditionalInfo";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [coverPicture, setCoverPicture] = useState<string | null>(null);
  const [profileBio, setProfileBio] = useState("");
  const [username, setUsername] = useState("");
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  // const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>, setFile:React.Dispatch<React.SetStateAction<string | null>>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setFile(URL.createObjectURL(file));
  //   }
  // };

  const handleProfilePictureChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    } else {
      setProfilePicture(null);
    }
  };
  const handleCoverPictureChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverPicture(imageUrl);
    } else {
      setCoverPicture(null);
    }
  };

  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      username,
      password,
      profilePicture,
      coverPicture,
      profileBio,
    });
  };
  return (
    <>
      <Flex justifyContent="center">
        <Box
          color="black"
          bgColor="white"
          w={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}
          minW="450px"
          minH="500px"
          p={6}
          borderRadius={7}
          boxShadow="dark-lg"
          border="none"
        >
          <Text fontSize="4xl" as="h1" textAlign="center">
            Sign Up
          </Text>
          {step === 1 && (
            <BasicInfoRegistration
            firstName={firstName}
            lastName={lastName}
            username={username}
            setUsername={setUsername}
            setFirstName={setFirstName}
            setLastName={setLastName}
            onNext={handleNext}
            />
          )}
          {step === 2 && (
            <AccountDetails
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            onBack={handleBack}
            onNext={handleNext}
            />
          )}
          {step === 3 && (
           <ProfilePictureForm
           profilePicture={profilePicture}
           onFileChange={handleProfilePictureChange}
           onNext={handleNext}
           onBack={handleBack}
           />
          )}
          {step === 4 && (
            <CoverPictureForm
            coverPicture={coverPicture}
            onFileChange={handleCoverPictureChange}
            onNext={handleNext}
            onBack={handleBack}
            />
          )}
          {step === 5 && (
            
            <AdditionalInfo
            profileBio={profileBio}
            onProfileBioChange={setProfileBio}
            onBack={handleBack}
            onSubmit={handleSubmit}
            />
          )}
        </Box>
      </Flex>
    </>
  );
}

export default RegistrationForm;
