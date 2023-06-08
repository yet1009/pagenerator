import {makeAutoObservable, toJS} from "mobx";
import Loadable from "../ui-component/Loadable";
import {lazy} from "react";

const Basic = Loadable(lazy(() => import('../views/unit/Basic')));
const Options = Loadable(lazy(() => import('../views/unit/Options')));


class DynamicCompo {

    components = {
        Basic,
        Options,
    }

    keyArr = [];

    constructor() {
        makeAutoObservable(this)
    }

    list() {
        for(let i in this.components) {
            this.keyArr.push(i);
        }

        return toJS(this.keyArr);
    }
}

let dynamicComp = new DynamicCompo();

export { dynamicComp }