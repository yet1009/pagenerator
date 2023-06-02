import { Routes, Route, useNavigate } from 'react-router-dom';

import RouteIdentifier from "../../routes/RouteIdentifier";
import {defaultRoutes} from "../../routes/default-routes";
import {routesItems} from "../../routes/routes";
import {useMemo} from "react";



const MainLayout = () => {

    const routeItem = useMemo(() => [...defaultRoutes, ...routesItems], [routesItems]);
    const navigation = useNavigate();


    return (
        <Routes>
            {
                routeItem.map((el, idx) => {
                    let { path } = el;

                    return (
                        <Route key={`page__${idx}`} {...el} />
                    )
                })
            }
        </Routes>
    )
}

export default MainLayout;