import {makeAutoObservable, toJS} from "mobx";
import {lazy} from "react";
import _ from 'lodash';
import Loadable from "../ui-component/Loadable";

class ComponentStore {


    componentName = '';
    path = [
      `../components/form`,
      `../components/wrap`,
      `../ui-component`,
      `../ui-component/common`,
      `../views/layout`,
      `../views/page`,
    ];

    render = {}
    itemMapper = [];
    Components = null;
    flag = false;

    constructor() {
        makeAutoObservable(this)
    }


    compCheckHandler(value) {
        this.componentName = value; // component 이름넣기
        this.flag = true;

        const itemMapper = this.path.map((el, idx) => {
            const Item = Loadable(lazy(() => import(el+'/'+this.componentName)));

            console.dir(Item)
        })





    }





}

let componentStore = new ComponentStore();

export { componentStore }