import { Link } from "react-router-dom"
export const NotFoundPage = () => {
    return (
        <p>
            Page was not found, welcome to <Link to='/'>home page</Link>!
        </p>
    )
}