import { Box } from "@mui/material"
import { ItemCard } from "../../components/ItemCard"
import { goods } from "../../data/data"

export const GoodsAdmin = () => {
    return (
        <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
            {goods.map((item, i) => (
                <ItemCard key={i} name={item.name} pic={item.pic} price={item.price} />
            ))}
        </Box>
    )
}
