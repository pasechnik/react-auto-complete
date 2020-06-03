import { countries } from './countries';

export async function fetchHints(q) {
    // it can be a remote fetch request like the following
    //    // const response = await fetch(`https://api.com/v1/ticker/?limit=10`);
    //    // const json = await response.json();
    //    // return json

    // or local search
    return countries.filter((country) => country.toLowerCase().indexOf(q.toLowerCase()) > -1);
}
