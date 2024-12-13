import { Button } from "@chakra-ui/react";
import React from "react";

interface IRandomButton {
  btName: string;
}
const RandomButton: React.FC<IRandomButton> = ({ btName }) => {
  return (
    <>
      <Button borderRadius={40} backgroundColor="green.600" w={20} h={20}>
        {btName}
      </Button>
      ;
    </>
  );
};

export default RandomButton;
