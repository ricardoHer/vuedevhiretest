import movies from '../../api/movies'

export const FETCH_MOVIES = "fetchMovies"
export const ERROR_HANDLE = "errorHandle"
export const SET_SEARCH_TERM = "setSearchTerm"
export const SET_SEARCHING_STATE = "searchingState"


const state = () => ({
    movies: [],
    errorMessage: '',
    searchTerm: {
        name: '',
        releaseYear: ''
    },
    searchingState: false
})

export const getters = {
    getMovieList: (state) => {
        return state.movies
    },
    getTermSearch: (state) => {
        return state.searchTerm.name
    },
    getYearSearch: (state) => {
        return state.searchTerm.releaseYear
    },
    getSearchingStatus: (state) => {
        return state.searchingState;
    }
}

export const mutations = {
    [FETCH_MOVIES]: function (state, searchResult) {
        state.movies = searchResult
    },
    [ERROR_HANDLE]: function (state, error) {
        state.errorMessage = error
    },
    [SET_SEARCH_TERM]: function (state, payload) {
        state.searchTerm = payload
    },
    [SET_SEARCHING_STATE]: function (state, loadingState) {
        state.searchingState = loadingState
    }
}

export const actions = {
    searchMovies: function ({ commit }, { name, releaseYear }) {

        commit(SET_SEARCH_TERM, { name, releaseYear })
        commit(SET_SEARCHING_STATE, true)

        movies
            .getMovies(name, releaseYear)
            .then((movies) => {
                console.log('Result: ', movies)
                commit(FETCH_MOVIES, movies)
                commit(SET_SEARCHING_STATE, false)
            })
            .catch(error => {
                commit(ERROR_HANDLE, error?.message || error)
                commit(SET_SEARCHING_STATE, false)
            })

    },

    clearSearch: function ({ commit }) {
        commit(SET_SEARCH_TERM, { name: '', releaseYear: '' })
        commit(FETCH_MOVIES, [])
    }
}


export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}