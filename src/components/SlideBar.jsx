import { Box, Button } from "@mui/material"
import { useScreenWidth } from "../hooks/useScreenWidth"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import 'swiper/css';


export const SlideBar = () => {
    const { isDesktop } = useScreenWidth()
    return (
        <>
            {
                isDesktop ? (
                    <Box className="px-20 pt-10" >
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
                                    sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
                                    sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
                                    sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
                    </Box >) : (<Swiper
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
                                sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
                                sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
                                sx={{ backgroundImage: "url(/banner.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
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
        </>
    )
}
