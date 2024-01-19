import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { ItemCard } from "../../components/ItemCard"
import { goods } from "../../data/data"

import SearchIcon from '@mui/icons-material/Search';
import { useScreenWidth } from "../../hooks/useScreenWidth";

export const GoodsAdmin = () => {
    const { isDesktop } = useScreenWidth()
    return (
        <Box display="flex" flexDirection="column" className="gap-4">
            <Box display="flex" justifyContent="space-between" flexDirection={!isDesktop && "column-reverse"}>
                <Box className={`flex justify-center gap-4 py-4 ${isDesktop && "pr-4"}`} sx={isDesktop && { width: "50%" }}>
                    <Button fullWidth>Добавить</Button>
                    <Button fullWidth>Выбрать</Button>
                </Box>
                <TextField
                    sx={isDesktop && { width: "50%" }}
                    fullWidth={!isDesktop}
                    label="Поиск"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
                {goods.map((item, i) => (
                    <ItemCard key={i} name={item.name} pic={item.pic} price={item.price} />
                ))}
            </Box>
        </Box>
    )
}
