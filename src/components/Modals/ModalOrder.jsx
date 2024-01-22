/* eslint-disable react/prop-types */
import { Box, IconButton, Input, Modal, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { goods } from '../../data/data'
import { ItemCard } from '../ItemCard'
import { useScreenWidth } from '../../hooks/useScreenWidth.jsx'
import { Close } from '@mui/icons-material'

export const ModalOrder = ({ open, handleModal }) => {
    const { isDesktop } = useScreenWidth()

    const BoxStyle = () => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: isDesktop ? "500px" : "100vw",
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    })
    return (
        <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={BoxStyle}>
                <Box className="flex justify-between items-center">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Информация о заказе № 1
                    </Typography>
                    <IconButton
                        onClick={handleModal}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit">
                        <Close />
                    </IconButton>
                </Box>
                <Box id="modal-modal-description" sx={{ mt: 2 }} className="flex flex-col gap-10">
                    <Box className="flex flex-col">
                        <Box className="flex justify-between gap-4">
                            <Input value="Россия" disabled />
                            <Input value={dayjs(Date.now()).format('DD.MM.YYYY')} disabled />
                        </Box>
                        <Box className="flex justify-between gap-4">
                            <Input placeholder='Имя' />
                            <Input placeholder='Фамилия' />
                        </Box>
                        <Box className="flex justify-between gap-4">
                            <Input placeholder='Почта' />
                            <Input placeholder='Телефон' />
                        </Box>
                        <Input placeholder='Населенный пункт (область)' />
                        <Input placeholder='Город' />
                        <Input placeholder='Почтовый индекс' />
                        <Input placeholder='Адрес' />
                    </Box>

                    <Box height={280} className="overflow-y-scroll">
                        {goods.map((item, i) => (
                            <ItemCard key={i} name={item.name} pic={item.pic} price={item.price} />
                        ))}
                    </Box>
                    <Box className="flex justify-between px-5">
                        <Typography>
                            Общая стоимость:
                        </Typography>
                        <Typography>
                            24 000р
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Modal >
    )
}
