import { Outlet } from "react-router-dom"
import { SideBar } from "../components/SideBar/SideBar"

export const LayoutAdmin = () => {
    return (
        <>
            <SideBar />
            <div id="background-element" className="p-8 md:ml-60 min-h-screen bg-gray-200">
                <Outlet />
            </div>
        </>
    )
}
