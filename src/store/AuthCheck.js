import {makeAutoObservable} from "mobx";

class AuthCheck {

    isLogin = false;

    constructor() {
        makeAutoObservable(this)
    }
}

let authCheck = new AuthCheck();

export { authCheck };