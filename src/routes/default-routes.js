import Loadable from "../ui-component/Loadable";
import {DEFAULT_PATHS} from "../config/configs";
import {lazy} from "react";


const App = Loadable(lazy(() => import('../views/page/Home')))
const Login = Loadable(lazy(() => import('../views/page/Login')))
const NotFound = Loadable(lazy(() => import('../ui-component/common/NotFound')))
const ForgotPw = Loadable(lazy(() => import('../ui-component/common/ForgotPassWord')))


export const defaultRoutes = [
    {path: DEFAULT_PATHS.APP, exact: true, element: App},
    {path: DEFAULT_PATHS.LOGIN, exact: true, element: Login},
    {path: DEFAULT_PATHS.NOTFOUND, exact: true, element: NotFound},
    {path: DEFAULT_PATHS.FORGOT_PASSWORD, exact: true, element: ForgotPw},
]



