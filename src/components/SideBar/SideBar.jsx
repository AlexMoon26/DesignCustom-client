import { MenuAdmin } from "../MenuAdmin"
import { ProfileAdmin } from "../ProfileAdmin"

export const SideBar = () => {
    return (
        <>
            <header className="flex justify-between items-center p-7 text-sm text-gray-500 md:justify-center md:ml-60 border-b border-grey-400">
                <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="p-2 mx-3 my-2 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <svg
                        id="open-sidebar-button"
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
                <span className="text-xl text-black">Design Custom</span>
                <span></span>
            </header>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 bg-gray-500 h-full w-60 transition-transform `}
                aria-label="Sidebar"
            >
                <ProfileAdmin />
                <div className="bg-white h-1"></div>
                <MenuAdmin />
            </aside>
        </>
    )
}
