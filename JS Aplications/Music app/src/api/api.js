import { getUserData } from "../util.js";

let host = 'http://localhost:3030';

async function request(method, url, data) {

    let options = {
        method,
        headers: {}
    };

    if (data !== undefined) {

        options.headers['Content-Type'] = 'Aplication/json';
        options.body = JSON.stringify(data);
    }

    let user = getUserData();

    if (user) {

        options.headers['X-Authorization'] = user.accessToken;

    }

    try {

        let response = await fetch(host + url, options);

        if (response.status == 204) {

            return response;

        }

        let result = await response.json();

        if (response.ok == false) {

            throw new Error(result.message);

        }

        return result;

    } catch (error) {

        alert(error.message);

        throw error;

    }
}

export let get = request.bind(null, 'get');
export let post = request.bind(null, 'post');
export let put = request.bind(null, 'put');
export let del = request.bind(null, 'delete');

