import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import BasicInfoRegistration from "./BasicInfoRegistration";
import AccountDetails from "./AccountDetails";
import ProfilePictureForm from "./ProfilePictureForm";
import CoverPictureForm from "./CoverPictureForm";
import AdditionalInfo from "./AdditionalInfo";
import { createUser } from "../api/users";
import OtpVerification from "./OtpVerification";
import axios from "axios";

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
  const [submissionMessage, setSubmissionMessage] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

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
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    if (coverPicture) {
      formData.append("coverPicture", coverPicture);
    }
    if (profileBio !== null && profileBio !== undefined) {
      formData.append("profileBio", profileBio);
    }
    console.log("this is the form data", formData);

    setLoading(true);
    try {
      const response = await createUser(formData);
      setSubmissionMessage(response.data.message);
      setTimeout(() => {
        setIsOtpModalOpen(true);
      }, 4000);
    } catch (error) {
      console.error("Error user registration", error);
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          "Something went wrong! Please try again later.";
        setSubmissionMessage(errorMessage);
      } else {
        setSubmissionMessage("Something went wrong! Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOtpModalOpen ? (
        <OtpVerification email={email} />
      ) : (
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
                loading={loading}
                submissionMessage={submissionMessage}
                setSubmissionMessage={setSubmissionMessage}
              />
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}

export default RegistrationForm;
