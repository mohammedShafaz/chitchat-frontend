import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { verifyOtp } from "../api/users";
import { useNavigate } from "react-router-dom";
interface OTPModalProps {
  email: string;
}
const OtpVerification: React.FC<OTPModalProps> = ({
  email,
}) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState<string | null>(
    null
  );
  const navigate = useNavigate();


  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleVerifyClick = async () => {
    setLoading(true); //
    try {
      const response= await verifyOtp({ email, otp });
      console.log("OTP response", response.data);
      
      setVerificationMessage(response.data.message)
      navigate('/LandingPage')
    } catch (error) {
      console.error(error);
      setVerificationMessage("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };
  
  return (
    <Modal isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>OTP Verification</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={handleVerifyClick} isLoading={loading}>
            Verify
          </Button>
          {verificationMessage && (
            <Text mt={2} color={verificationMessage.includes("successfully") ? "green.500" : "red.500"}>
              {verificationMessage}
            </Text>
          )}

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OtpVerification;
