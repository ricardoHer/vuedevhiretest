
const baseUrl = "http://www.omdbapi.com/?apikey=e68af34";

export default {

    async getMovies(movieTitle, releaseYear) {
        return new Promise(async (resolve, reject) => {
            let queryUrl = `${baseUrl}&s=${movieTitle}`
            if (releaseYear)
                queryUrl = queryUrl + `&y=${releaseYear}`
            return fetch(queryUrl)
                .then((res) => res.json())
                .then((json) => {
                    resolve(json?.Search);
                })
                .catch(err => reject(err))
        })
    }

}