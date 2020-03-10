import data from '../data/wines.json';

function getWines() {
    const winesData = data; // add a call to the server instead of returning this data
    /*
  Note:
  You should not get CORS errors when making your request to the wines API (`/api/v1/wines`)
  Making your request using the Fetch API or axios to that endpoint will result in returned data without CORS errors.
  Please don't prepend the API call with localhost.
  Please see the readme for more information.
  */
    return Promise.resolve(winesData);
}

export default {
    getWines
};
