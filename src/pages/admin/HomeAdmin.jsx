import { Box, Typography } from '@mui/material'
import { Donuts } from '../../components/Donuts'
export const HomeAdmin = () => {
    return (
        <>
            <Box className="flex flex-col gap-20">
                <Donuts />
                <Box>
                    <Typography fontSize={20}>Выполненные заказы</Typography>
                </Box>
            </Box>
        </>
    )
}
