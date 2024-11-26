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
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { verifyOtp } from "../api/users";
import { useNavigate } from "react-router-dom";

interface OTPModalProps {
  email: string;
}

const OtpVerification: React.FC<OTPModalProps> = ({ email }) => {
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
    setLoading(true);
    try {
      const response = await verifyOtp({ email, otp });
      console.log("OTP response", response.data);
      setVerificationMessage(`${response.data.message} Redirecting to login...`);
    } catch (error) {
      console.error(error);
      setVerificationMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (verificationMessage) {
      const timer = setTimeout(() => {
        setVerificationMessage(null);
        navigate("/LandingPage");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate, verificationMessage]);

  return (
    <Modal isOpen={true} onClose={() => {}} size="lg">
      <ModalOverlay />
      <ModalContent
        maxWidth="500px"
        height="400px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={4}
      >
        <ModalHeader textAlign="center" fontSize="2xl">
          OTP Verification
        </ModalHeader>
        <ModalBody>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            mb={4}
            size="lg"
          />
        </ModalBody>
        <ModalFooter>
          <Flex direction="column" align="center" w="100%">
            <Button
              colorScheme="green"
              onClick={handleVerifyClick}
              isLoading={loading}
              w="100%"
            >
              Verify
            </Button>
            {verificationMessage && (
              <Text
                mt={4}
                color={
                  verificationMessage.toLowerCase().includes("success")
                    ? "green.500"
                    : "red.500"
                }
                textAlign="center"
              >
                {verificationMessage}
              </Text>
            )}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OtpVerification;
