import { Box } from "@mui/material"
import { Header } from "../components/header/header"
import { goods } from "../data/data"
import { ItemCardVertical } from "../components/ItemCardVertical"
import { SlideBar } from "../components/SlideBar"
import { Footer } from "../components/footer/Footer"





export const Home = () => {

    return (
        <>
            <Header />
            <SlideBar />
            <Box className="pt-10" sx={{ px: { xs: 2, lg: 10 } }}>
                <Box className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4">
                    {goods.map((item, i) => (
                        <ItemCardVertical key={i} name={item.name} pic={item.pic} price={item.price} />
                    ))}
                </Box>
            </Box>
            <Footer />

        </>
    )
}
