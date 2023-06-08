import DashBoard from "../views/page/DashBoard";
import Dynamic from "../views/page/Dynamic";



export const routesItems = [
    {path: '/dashboard', exact: true, element: <DashBoard />},
    {path: '/dynamic', exact: true, element: <Dynamic path='./Box' />}
]

