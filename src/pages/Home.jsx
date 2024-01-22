import { Box, Button } from "@mui/material"
import { Header } from "../components/header/header"
import { goods } from "../data/data"
import { ItemCardVertical } from "../components/ItemCardVertical"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useScreenWidth } from '../hooks/useScreenWidth'


import 'swiper/css';


export const Home = () => {
    const { isDesktop } = useScreenWidth()
    return (
        <>
            <Header />
            {isDesktop ? (
                <Box className="px-20 pt-10">
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <Box
                                height="480px"
                                width="100vw"
                                sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                position="relative"
                            >
                                <Box>
                                    <Box position="absolute" bottom={20} left={20}>
                                        <Button size="large">Футболки</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box
                                height="480px"
                                width="100vw"
                                sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                position="relative"
                                bgr="no-repeat"
                            >
                                <Box>
                                    <Box position="absolute" bottom={20} left={20}>
                                        <Button size="large">Дизайнерская одежда</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box
                                height="480px"
                                width="100vw"
                                sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                position="relative"
                                bgr="no-repeat"
                            >
                                <Box>
                                    <Box position="absolute" bottom={20} left={20}>
                                        <Button size="large">Создать футболку</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>) : (<Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Box
                            height="480px"
                            width="100vw"
                            sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            position="relative"
                        >
                            <Box>
                                <Box position="absolute" bottom={20} left={20}>
                                    <Button size="large">Футболки</Button>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            height="480px"
                            width="100vw"
                            sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            position="relative"
                            bgr="no-repeat"
                        >
                            <Box>
                                <Box position="absolute" bottom={20} left={20}>
                                    <Button size="large">Дизайнерская одежда</Button>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            height="480px"
                            width="100vw"
                            sx={{ backgroundImage: "url(/avatar.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            position="relative"
                            bgr="no-repeat"
                        >
                            <Box>
                                <Box position="absolute" bottom={20} left={20}>
                                    <Button size="large">Создать футболку</Button>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>)}
            <Box className="px-20 pt-10">
                <Box className="grid grid-cols-4 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
                    {goods.map((item, i) => (
                        <ItemCardVertical key={i} name={item.name} pic={item.pic} price={item.price} />
                    ))}
                </Box>
            </Box>

        </>
    )
}
