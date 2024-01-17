import { Box } from "@mui/material"
import { orders } from "../../data/data"
import { OrderCard } from "../../components/OrderCard"

export const OrdersAdmin = () => {
    return (
        <Box className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
            {orders.map((order, i) => (
                <OrderCard key={i} clientName={order.customerName} status={order.status} date={order.date} email={order.email} phone={order.phone} price={order.price} />
            ))}
        </Box>
    )
}
