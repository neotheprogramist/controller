import { Icon, useStyleConfig } from "@chakra-ui/react";

const Ribbon = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 32 40" fill="currentColor" __css={styles} {...rest}>
      <path d="M2 0C0.895431 0 0 0.895431 0 2V38.2902C0 39.055 0.823658 39.5367 1.49026 39.1617L15.5097 31.2758C15.8142 31.1045 16.1858 31.1045 16.4903 31.2758L30.5097 39.1617C31.1763 39.5367 32 39.055 32 38.2902V2C32 0.895431 31.1046 0 30 0H2Z" />
      {/* <path d="M9.5 1.40625C9.5 1.72283 9.24863 2.01445 8.825 2.25C8.31348 2.53301 7.55234 2.7334 6.6752 2.79316C6.61191 2.76328 6.54512 2.7334 6.47832 2.70527C5.78398 2.41523 4.86289 2.25 3.875 2.25C3.7291 2.25 3.58672 2.25352 3.44434 2.26055L3.425 2.25C3.00137 2.01445 2.75 1.72283 2.75 1.40625C2.75 0.629648 4.2459 0 6.125 0C7.98828 0 9.5 0.629648 9.5 1.40625ZM3.3248 2.83184C3.5041 2.81953 3.68691 2.8125 3.875 2.8125C4.96836 2.8125 5.93867 3.02871 6.55566 3.36445C6.9916 3.60176 7.25 3.89707 7.25 4.21875C7.25 4.27324 7.2377 4.35762 7.21309 4.42441C7.13223 4.65645 6.9002 4.86914 6.59785 5.0502C6.59609 5.0502 6.59258 5.05195 6.59082 5.05371C6.58555 5.05723 6.58027 5.05898 6.575 5.0625C5.95977 5.40352 4.97891 5.625 3.875 5.625C2.82734 5.625 1.88973 5.42637 1.27062 5.11348C1.23775 5.0959 1.20576 5.06426 1.17482 5.0625C0.751016 4.82695 0.5 4.53516 0.5 4.21875C0.5 3.60703 1.4392 3.08496 2.75 2.89336C2.93457 2.86523 3.12617 2.84414 3.3248 2.83184ZM7.38887 3.28008C7.88633 3.20273 8.3416 3.07969 8.72832 2.91973C9.01484 2.8002 9.28027 2.65254 9.5 2.47148V3.09375C9.5 3.43301 9.20996 3.7459 8.73008 3.98848C8.47168 4.11855 8.16055 4.22754 7.80898 4.31191C7.81074 4.28203 7.8125 4.25039 7.8125 4.21875C7.8125 3.83379 7.62617 3.51738 7.38887 3.28008ZM7.25 5.90625C7.25 6.22266 6.99863 6.51445 6.575 6.75C6.54336 6.75176 6.51172 6.7834 6.48008 6.80098C5.85957 7.11387 4.92266 7.3125 3.875 7.3125C2.77109 7.3125 1.79059 7.09102 1.17482 6.75C0.751016 6.51445 0.500005 6.22266 0.500005 5.90625V5.28398C0.718848 5.46504 0.985508 5.6127 1.27221 5.73223C1.96672 6.02227 2.88711 6.1875 3.875 6.1875C4.86289 6.1875 5.78398 6.02227 6.47832 5.73223C6.61543 5.67598 6.74727 5.61094 6.87207 5.54063C6.9793 5.48086 7.07949 5.41406 7.17441 5.34375C7.20078 5.32441 7.22539 5.30332 7.25 5.28398V5.90625ZM7.8125 4.88848C8.13066 4.80059 8.4541 4.72148 8.72832 4.60723C9.01484 4.4877 9.28027 4.34004 9.5 4.15898V4.78125C9.5 4.96582 9.41211 5.15039 9.23809 5.32441C8.95156 5.61094 8.44707 5.84648 7.80898 5.99941C7.81074 5.96953 7.8125 5.93789 7.8125 5.90625V4.88848ZM3.875 7.875C4.86289 7.875 5.78398 7.70977 6.47832 7.41973C6.76484 7.3002 7.03027 7.15254 7.25 6.97148V7.59375C7.25 8.3707 5.73828 9 3.875 9C2.01102 9 0.500005 8.3707 0.500005 7.59375V6.97148C0.718848 7.15254 0.985508 7.3002 1.27221 7.41973C1.96672 7.70977 2.88711 7.875 3.875 7.875Z" /> */}
    </Icon>
  );
};

export default Ribbon;