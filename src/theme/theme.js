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
    palette: {
        primary: {
            main: "#737070"
        }
    }
})