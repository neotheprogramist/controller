import { constants } from "starknet";
import { Hex, hexToString } from "viem";

export function getChainName(chainId: string) {
  switch (chainId) {
    case constants.StarknetChainId.SN_MAIN:
      return "Mainnet";
    case constants.StarknetChainId.SN_SEPOLIA:
      return "Sepolia";
    default:
      const decoded = hexToString(chainId as Hex);
      return isSlotChain(chainId) ? decoded.replace("WP_", "") : decoded;
  }
}

export function isSlotChain(chainId: string) {
  return hexToString(chainId as Hex).startsWith("WP_");
}
