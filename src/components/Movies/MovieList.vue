
<script>
import { mapGetters, mapActions } from "vuex";
import MovieListItem from "./MovieListItem.vue";

export default {
  name: "MovieListComponent",
  methods: {},
  components: {
    MovieListItem,
  },
  computed: {
    ...mapGetters("movies", {
      _getMovieList: "getMovieList",
      _getTermSearch: "getTermSearch",
      _getYearSearch: "getYearSearch",
    }),

    getTotalFound() {
      return this._getMovieList?.length ?? 0;
    },

    getSearchTermUsed() {
      const searchTerm = this._getTermSearch
        ? `Term Used: ${this._getTermSearch}`
        : "";
      const yearSearch = this._getYearSearch
        ? `Year: ${this._getYearSearch}`
        : "";

      return `${searchTerm} ${yearSearch}`.trim();
    },
  },
};
</script>

<template>
  <v-container fluid>
    <div class="list_wrapper" v-if="_getMovieList?.length > 0">
      <v-list>
        <MovieListItem
          :movie="movie"
          v-for="(movie, idx) in _getMovieList"
          :key="idx"
          class="list_movie_item"
        />
      </v-list>
    </div>
    <div v-else class="not_found_wrapper">
      <p>No movies found</p>
    </div>

    <div class="list_footer">
      <span>Total: {{ this.getTotalFound }}</span>
      <span> {{ this.getSearchTermUsed }}</span>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.not_found_wrapper,
.list_wrapper {
  width: 100%;
  padding: 5px 0;
  font-size: 20px;
  font-weight: bold;
}

.not_found_wrapper {
  padding: 40px 10px;
}

.not_found_wrapper p {
  text-align: center;
}

.list_footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
