/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

export const Wrapper = ({ children }) => {
  return <Box sx={{ px: { xs: 2, lg: 10 } }}>{children}</Box>;
};
