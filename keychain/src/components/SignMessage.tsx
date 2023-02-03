import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box, Spacer, Text, VStack } from "@chakra-ui/react";

import { typedData as td, shortString, constants, Signature } from "starknet";

import Container from "./Container";
import { Banner } from "components/Banner";
import Controller from "utils/controller";
import Footer from "./Footer";
import { Error, ResponseCodes } from "@cartridge/controller";
import { Status } from "utils/account";
import { Header } from "./Header";

const SignMessage = ({
  controller,
  origin,
  typedData,
  chainId,
  onSign,
  onCancel,
}: {
  controller: Controller;
  origin: string;
  typedData: td.TypedData;
  chainId: constants.StarknetChainId;
  onSign: (sig: Signature) => void;
  onCancel: (error: Error) => void;
}) => {
  const [messageData, setMessageData] = useState({});

  useEffect(() => {
    if (!typedData) return;
    const primaryTypeData = typedData.types[typedData.primaryType];

    // Recursively decodes all nested `felt*` types
    // to their ASCII equivalents
    const convertFeltArraysToString = (
      initial: object,
      messageType: Array<{ name: string; type: string }>,
    ) => {
      for (const typeMember of messageType) {
        if (typeMember.type === "felt*") {
          const stringArray: Array<string> = initial[typeMember.name].map(
            (hex: string) => shortString.decodeShortString(hex),
          );
          initial[typeMember.name] = stringArray.join("");
        } else if (typeMember.type !== "felt" && typeMember.type !== "string") {
          convertFeltArraysToString(
            initial[typeMember.name],
            typedData.types[typeMember.type],
          );
        }
      }
    };

    convertFeltArraysToString(typedData.message, primaryTypeData);
    setMessageData(typedData);
  }, [typedData]);

  return (
    <Container>
      <Header />
      <Banner
        title="Signature Request"
        description={`${origin} is asking you to sign a message`}
        chainId={chainId}
        py="20px"
      />
      <VStack p="12px" bgColor="gray.600" borderRadius="5px" align="flex-start">
        <Text
          as="pre"
          fontSize="11px"
          color="gray.200"
          whiteSpace="pre-wrap"
          wordBreak="break-all"
        >
          {JSON.stringify(messageData, null, 2)}
        </Text>
      </VStack>

      <Footer
        onConfirm={async () => {
          const account = controller.account(chainId);
          const sig = await account.signMessage(typedData);
          onSign(sig);
        }}
        onCancel={() => {
          onCancel({
            code: ResponseCodes.CANCELED,
            message: "Canceled",
          });
        }}
        confirmText="SIGN"
        cancelText="REJECT"
      />
    </Container>
  );
};

export default SignMessage;