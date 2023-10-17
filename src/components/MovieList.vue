<script setup>
import { ref } from "vue";

const baseUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=e68af34`;

const movies = ref([]);

function getMovieList() {
  const moviesQuery = fetch(`${baseUrl}&s=Batman`);

  moviesQuery
    .then((res) => res.json())
    .then((json) => (movies.value = json?.Search))
    .catch((err) => console.log($`Error: ${err}`));
}

getMovieList();
</script>

<template>
  <div class="list_wrapper">
    <v-list>
      <v-list-item
        class="list_movie_item"
        v-for="(movie, idx) in movies"
        :key="idx"
        :title="movie?.Title"
        :subtitle="movie?.Year"
      >
      </v-list-item>
    </v-list>
  </div>
</template>


<style scoped lang="scss">

</style>
