import Loadable from "../ui-component/Loadable";
import {DEFAULT_PATHS} from "../config/configs";
import {lazy} from "react";


const App = Loadable(lazy(() => import('../views/page/Home')))
const Login = Loadable(lazy(() => import('../views/page/Login')))


export const defaultRoutes = [
    { path: DEFAULT_PATHS.APP, exact: true, element: App},
    { path: DEFAULT_PATHS.LOGIN, exact: true, element: Login},
]


export const RoutesItems = [
    {
        path: '/',
        exact: true,
        // element:
    },
    {

    }
]

