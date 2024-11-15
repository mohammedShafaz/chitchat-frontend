import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import BasicInfoRegistration from "./BasicInfoRegistration";
import AccountDetails from "./AccountDetails";
import ProfilePictureForm from "./ProfilePictureForm";
import CoverPictureForm from "./CoverPictureForm";
import AdditionalInfo from "./AdditionalInfo";
import { createUser, verifyOtp } from "../api/users";
import { useNavigate } from "react-router-dom";
import OtpVerification from "./OtpVerification";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePictureName, setProfilePictureName] = useState<string | null>(
    null
  );
  const [coverPicture, setCoverPicture] = useState<File | null>(null);
  const [coverPictureName, setCoverPictureName] = useState<string | null>(null);
  const [profileBio, setProfileBio] = useState("");
  const [username, setUsername] = useState("");
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const navigate= useNavigate()
  const handleProfilePictureChange = (file: File | null) => {
    setProfilePicture(file);
    setProfilePictureName(file ? file.name : null);
  };

  const handleCoverPictureChange = (file: File | null) => {
    setCoverPicture(file);
    setCoverPictureName(file ? file.name : null);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    if (profilePictureName && profilePicture) {
      formData.append(
        "profilePicture",
        new File([profilePicture], profilePictureName)
      );
    }

    if (coverPictureName && coverPicture) {
      formData.append(
        "coverPicture",
        new File([coverPicture], coverPictureName)
      );
    }
    if (profileBio !== null && profileBio !== undefined) {
      formData.append("profileBio", profileBio);
    }
    console.log("this is the form data", formData);

    setLoading(true);
    try {
      const response = await createUser(formData);
      setSubmissionMessage(response.data.message);
      setIsOtpModalOpen(true);
      setStep(6);
    } catch (error) {
      console.error("Error user registration", error);
      setSubmissionMessage("Something went wrong please try again later!");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async () => {
    try {
      const response = await verifyOtp({ email, otp });
      toast({
        title: "Verification successful!",
        description: "Your email has been verified.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsOtpModalOpen(false);
      navigate("/LandingPage")
    } catch (error) {
      console.error(error);
      toast({
        title: "Verification failed",
        description: "Invalid or expired OTP. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
              profilePictureName={profilePictureName}
              onFileChange={handleProfilePictureChange}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 4 && (
            <CoverPictureForm
              coverPicture={coverPicture}
              coverPictureName={coverPictureName}
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
      <OtpVerification
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        onVerify={handleOtpVerification}
        setOtp={setOtp}
      />
    </>
  );
}

export default RegistrationForm;
