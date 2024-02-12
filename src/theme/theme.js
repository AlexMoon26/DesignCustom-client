import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    color: '#fff',
                }
            },
            defaultProps: {
                variant: "contained"
            }
        }
    },
    breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '1450px',
    xl: '90em',
  },
    palette: {
        primary: {
            main: "#737070"
        },
    }
})