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
        </div>
    );
};
