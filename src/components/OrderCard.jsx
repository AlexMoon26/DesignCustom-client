/* eslint-disable react/prop-types */
import { MoreHoriz } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useState } from 'react';
import { ModalOrder } from './Modals/ModalOrder';


export const OrderCard = ({ clientName, status, email, date, phone, price }) => {
    const [moreDetailsModal, setMoreDetailsModal] = useState(false);
    const [options, setOptions] = useState(null);

    const open = Boolean(options);
    const handleClick = (event) => {
        setOptions(event.currentTarget);
    };
    const handleClose = () => {
        setOptions(null);
    };

    const handleModal = () => {
        setMoreDetailsModal(!moreDetailsModal)
        setOptions(null);
    }
    return (
        <>
            <div
                className={`flex w-full text-xs md:text-sm xxl:text-lg border-l-[8px] rounded-l shadow  ${status === "В ожидании"
                    ? "border-l-red-400"
                    : status === "Выполняется"
                        ? "border-l-green-500"
                        : "border-l-gray-400"
                    }  p-5 rounded bg-white`}
                role="list"
            >
                <ul className="w-full space-y-5 items-center justify-center">
                    <li className="flex space-x-3 items-center">
                        <Typography className=" font-normal truncate dark:text-gray-400">
                            {clientName}
                        </Typography>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <Typography className=" font-normal truncate dark:text-gray-400 underline">
                            {email}
                        </Typography>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <Typography className=" font-normal truncate dark:text-gray-400">
                            {phone}
                        </Typography>
                    </li>
                </ul>

                <div className="flex flex-col justify-between w-1/6">
                    <div className="flex flex-col justify-between h-full">
                        <Box className="flex justify-end" alignItems="center">
                            <Typography className="font-normal text-gray-500 dark:text-gray-400">
                                {dayjs(date).format("DD.MM.YY")}
                            </Typography>
                            <Button
                                variant="text"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHoriz />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={options}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                PaperProps={{
                                    elevation: 2,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -4.5,
                                            mr: 10,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 27,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleModal}>Подробнее</MenuItem>
                            </Menu>
                        </Box>
                        <div className='flex justify-end'> <Typography>{price} Р</Typography></div>
                    </div>
                </div>
            </div>

            <ModalOrder open={moreDetailsModal} handleModal={handleModal} />


        </>
    )
}
