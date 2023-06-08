import {makeAutoObservable, toJS} from "mobx";
import {lazy} from "react";
import _ from 'lodash';
import Loadable from "../ui-component/Loadable";

class ComponentStore {


    componentName = '';
    path = [
      `../components/form/`,
      `../components/wrap/`,
      `../ui-component/`,
      `../ui-component/common/`,
      `../views/layout/`,
      `../views/page/`,
    ];

    render = {}
    itemMapper = [];
    Components = null;
    flag = false;

    Acomponent = null;

    constructor() {
        makeAutoObservable(this)
    }


    compCheckHandler(value) {



        this.componentName = value; // component 이름넣기
        this.flag = true;

        this.path.map((el, idx) => {
            const Items = Loadable(lazy(() => import(el+this.componentName)))

            console.log(Items)
        })

        this.Acomponent = Loadable(lazy(() => import(`../components/form/${this.componentName}`)));

    }

    findComponent() {
        this.itemMapper.push(this.Acomponent ?? null)
        return [...this.itemMapper]
    }





}

let componentStore = new ComponentStore();

export { componentStore }