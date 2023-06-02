import { makeAutoObservable } from "mobx";

class OrderComp {

    compArr = [];

    constructor() {
        makeAutoObservable(this);
    }

}

let orderComp = new OrderComp();

export { orderComp };