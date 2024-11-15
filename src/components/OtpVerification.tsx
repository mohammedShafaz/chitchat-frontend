import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Button, Text, ModalCloseButton } from "@chakra-ui/react";
import React, { useState } from "react";
interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}
const OtpVerification: React.FC<OTPModalProps> = ({ isOpen, onClose, onVerify, setOtp }) => {
  const [otp, setLocalOtp] = useState("");
  
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalOtp(e.target.value);
    setOtp(e.target.value); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          <Button colorScheme="green" onClick={onVerify}>
            Verify OTP
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OtpVerification;
  