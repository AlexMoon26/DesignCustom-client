import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

export const MenuAdmin = () => {
    return (
        <Box className="p-4 flex flex-col gap-5">
            <Link to="/admin" className="w-full">
                <Button fullWidth>Главная</Button>
            </Link>
            <Link to="/admin/orders" className="w-full">
                <Button fullWidth>Заказы</Button>
            </Link>
            <Link to="/admin/goods" className="w-full">
                <Button fullWidth>Товары</Button>
            </Link>
            <Link to="/admin/promo" className="w-full">
                <Button fullWidth>Промокоды</Button>
            </Link>
            <Link to="/" className="w-full">
                <Button fullWidth>Выйти</Button>
            </Link>
        </Box>
    )
}
