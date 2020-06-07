import { createClient } from 'contentful';
import { countries } from './countries';

const SPACE_ID = '1zz6y1zaq1dm';
const ACCESS_TOKEN = 'TcZ1SwPOIyg15U2zupq5nLE4i0dg7NdOsfMDBNfQTmg';
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

export async function fetchCourses(q) {
    try {
        const response = await client.getEntries({
            content_type: 'courses',
            query: q,
        });
        return response.items.map((f) => f.fields.title);
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function fetchApi(q) {
    // it can be a remote fetch request like the following
    const response = await fetch(`https://api.com/v1/ticker/?limit=10`);
    const json = await response.json();

    console.log(json);
    return json;
}

export async function fetchCountries(q) {
    // simulate network latency
    await delay(Math.random() * 800);

    // do local search
    return countries.filter((country) => country.toLowerCase().indexOf(q.toLowerCase()) > -1);
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
