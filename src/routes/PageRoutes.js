import {lazy} from 'react';

import Loadable from "../ui-component/Loadable";



const PageGen = Loadable(lazy(() => import('../views/page/Generator')));


