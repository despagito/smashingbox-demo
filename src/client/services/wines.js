
function getWines() {
    const fetchWinesRes = fetch('/api/v1/wines').then(res => (
        res.json()
    )).then(data => (
        Promise.resolve(data)
    ))
    return fetchWinesRes
}

/*
  Note:
  You should not get CORS errors when making your request to the wines API (`/api/v1/wines`)
  Making your request using the Fetch API or axios to that endpoint will result in returned data without CORS errors.
  Please don't prepend the API call with localhost.
  Please see the readme for more information.
  */

export default {
    getWines
};
