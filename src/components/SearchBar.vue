<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MovieSearchBar",
  methods: {
    async doTheSearch() {
      // Validating the form
      const { valid } = await this.$refs.searchForm.validate();

      if (valid) {
        //doing the ssearch using the VueX store.
        this._searchMovies({
          name: this.movieName,
          releaseYear: this.releaseYear,
        });
      }
    },

    ...mapActions("movies", {
      _searchMovies: "searchMovies",
    }),
  },
  computed: {
    ...mapGetters("movies", {
      _getSearchingStatus: "getSearchingStatus",
    }),
  },
  data: () => ({
    movieName: "",
    movieNameRule: [
      (value) => {
        if (value?.length >= 2) return true;

        return "The movie name must be at least 2 characters";
      },
    ],
    releaseYear: "",
    releaseYearRule: [
      (value) => {
        if (value.trim() === "") return true;

        if (/^\d{4}$/.test(value)) return true;

        return "Realeased year must be a digit and have 4 digits.";
      },
    ],
  }),
};
</script>

<template>
  <v-container fluid class="search_bar_wrapper">
    <v-form fast-fail @submit.prevent="doTheSearch" ref="searchForm">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="movieName"
            label="Movie Name"
            :rules="movieNameRule"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="releaseYear"
            label="Realease Year"
            :rules="releaseYearRule"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn
            color="success"
            size="large"
            block
            type="submit"
            :loading="_getSearchingStatus"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
