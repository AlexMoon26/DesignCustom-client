import { Typography } from '@mui/material'
import dayjs from 'dayjs'

export const OrderCard = ({ clientName, status, email, date, phone, price }) => {
    return (
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
                    <div className="flex justify-end">
                        <Typography className="font-normal text-gray-500 dark:text-gray-400">
                            {dayjs(date).format("DD.MM.YY")}
                        </Typography>

                    </div>
                    <div className='flex justify-end'> <Typography>{price} Р</Typography></div>
                </div>
            </div>
        </div>

    )
}
