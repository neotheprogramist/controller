import { Content } from "components/layout";
import { Policy } from "@cartridge/controller";
import { useCallback, useMemo, useState } from "react";
import { useConnection } from "hooks/connection";
import { Policies } from "components/Policies";
import { SessionConsent } from "components/connect";
import { ExecutionContainer } from "components/ExecutionContainer";
import {
  TransactionExecutionStatus,
  TransactionFinalityStatus,
} from "starknet";
import { SESSION_EXPIRATION } from "const";

export function RegisterSession({
  onConnect,
  publicKey,
}: {
  onConnect: (policies: Policy[], transaction_hash?: string) => void;
  publicKey?: string;
}) {
  const { controller, policies } = useConnection();
  const [expiresAt] = useState<bigint>(SESSION_EXPIRATION);

  const transactions = useMemo(() => {
    const calldata = controller.registerSessionCalldata(
      expiresAt,
      policies,
      publicKey,
    );

    return [
      {
        contractAddress: controller.address,
        entrypoint: "register_session",
        calldata,
      },
    ];
  }, [expiresAt, policies, publicKey]);

  const onRegisterSession = useCallback(
    async (maxFee: bigint) => {
      const { transaction_hash } = await controller.registerSession(
        expiresAt,
        policies,
        publicKey,
        maxFee,
      );

      await controller.account.waitForTransaction(transaction_hash, {
        retryInterval: 1000,
        successStates: [
          TransactionExecutionStatus.SUCCEEDED,
          TransactionFinalityStatus.ACCEPTED_ON_L2,
        ],
      });
      onConnect(policies, transaction_hash);
    },
    [controller, expiresAt, policies, publicKey, onConnect],
  );

  return (
    <ExecutionContainer
      title="Register Session"
      transactions={transactions}
      onSubmit={onRegisterSession}
      onError={(e) => {
        if (
          e.data &&
          typeof e.data === "string" &&
          e.data.includes("session/already-registered")
        ) {
          onConnect(policies);
          return;
        }
      }}
      buttonText="Register Session"
      hideTxSummary
    >
      <Content>
        <SessionConsent />
        <Policies policies={policies} />
      </Content>
    </ExecutionContainer>
  );
}
