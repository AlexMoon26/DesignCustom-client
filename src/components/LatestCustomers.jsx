/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const LatestCustomers = ({ orders }) => {
  return (
    <>
      <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-8 ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl truncate font-bold leading-none text-gray-600">
            Выполненные заказы
          </h5>
          <Link
            to={"/admin/orders"}
            className="text-sm truncate font-medium text-gray-500 hover:underline"
          >
            Посмотреть все
          </Link>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-500">
            {orders.map((order, i) => (
              <li key={i} className="py-3 sm:py-4zz">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full"
                      src="avatar.jpg"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-600 truncate">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {order.email}
                    </p>
                  </div>
                  <div className="inline-flex truncate items-center text-base font-semibold text-gray-600">
                    {order.price} Р
                  </div>
                  <div className="inline-flex truncate items-center text-base font-semibold text-gray-400">
                    {order.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
