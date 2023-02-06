import { get } from '../api.js';

let getDataUrl = '/data/albums?sortBy=_createdOn%20desc&distinct=name';

export function getAll() {

    return get(getDataUrl);

}

