import { Outlet } from "react-router-dom"
import { SideBar } from "../SideBar/SideBar"

export const LayoutAdmin = () => {
    return (
        <>
            <SideBar />
            <div className="p-8 ml-60 min-h-screen bg-gray-200">
                <Outlet />
            </div>
        </>
    )
}
