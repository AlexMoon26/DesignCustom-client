import { Button } from "@mui/material"
import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/admin">
                <Button>Админ панель</Button>
            </Link>
        </>
    )
}
