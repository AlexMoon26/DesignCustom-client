import DonutChart from "./charts/DonutChart"
export const Donuts = () => {
    return (
        <div className="flex flex-wrap justify-around">
            <DonutChart
                filled={15}
                allData={30}
                backgroundColor={"#A60783"}
                name={"Заказы"}
            />
            <DonutChart
                filled={10}
                allData={15}
                backgroundColor={"#BC72AC"}
                name={"Клиенты"}
            />
            <DonutChart
                filled={20}
                allData={45}
                backgroundColor={"#F549CF"}
                name={"Продажи"}
            />
        </div>
    );
};
