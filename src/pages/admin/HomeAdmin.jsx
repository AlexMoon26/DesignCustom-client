import { Box } from '@mui/material'
import { Donuts } from '../../components/Donuts'
import { LatestCustomers } from '../../components/LatestCustomers'
import { orders } from '../../data/data'
export const HomeAdmin = () => {


    return (
        <>
            <Box className="flex flex-col gap-20">
                <Donuts />
                <Box>
                    <LatestCustomers orders={orders} />
                </Box>
            </Box>
        </>
    )
}
