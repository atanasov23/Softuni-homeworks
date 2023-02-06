import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

let loginUrl = '/users/login';
let registerUrl = '/users/register';
let logoutUrl = '/users/logout';

export async function login(email, password) {

    let { _id, resultEmail, accessToken } = await post(loginUrl, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });

    
}

export async function register(email, password) {

    let { _id, resultEmail, accessToken } = await post(registerUrl, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout() {

    get(logoutUrl);
    clearUserData();
}