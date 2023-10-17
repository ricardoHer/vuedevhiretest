import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== 'production'

// modules
import movies from './modules/movies'

export default createStore({
    modules: {
        movies
    }, 
    strict: debug,
    plugins: debug ? [createLogger()] : []
})