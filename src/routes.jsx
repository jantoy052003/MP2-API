import Home from "./views/Home"
import Popular from "./views/Popular"
import NewRelease from "./views/NewRelease"
import Upcoming from "./views/Upcoming"

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/popular",
        element: <Popular/>
    },
    {
        path: "/newrelease",
        element: <NewRelease/>
    },
    {
        path: "/upcoming",
        element: <Upcoming/>
    }
]

export default routes