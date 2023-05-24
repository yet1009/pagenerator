import { makeAutoObservable } from "mobx";

class OrderComp {

    compArr = [];

    constructor() {
        makeAutoObservable(this);
    }



}