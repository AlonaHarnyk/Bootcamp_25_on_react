import { Outlet } from "react-router-dom";

import { Navigation } from './Navigation/Navigation'

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Outlet/>
        </div>
    )
}