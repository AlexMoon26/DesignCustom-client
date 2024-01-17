import { Box, Typography } from "@mui/material"

export const ProfileAdmin = () => {
    return (
        <div className="p-4 h-30">
            <Box justifyContent="start" gap={4} alignItems="center" display="flex">
                <img src="/vite.svg" alt="" className="w-12 h-12 rounded-full" />
                <Typography>Admin</Typography>
            </Box>
        </div>
    )
}
