import { useMediaQuery } from "@mui/material";
import { theme } from "../theme/theme";

export const useScreenWidth = () => {
  const isDesktop = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.lg}px)`
  );

  const isTablet = useMediaQuery(`(min-width: ${theme.breakpoints.values.md})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md})`);
  const isSmall = useMediaQuery(`(max-width: ${theme.breakpoints.values.sm})`);

  return { isDesktop, isTablet, isMobile, isSmall };
};
