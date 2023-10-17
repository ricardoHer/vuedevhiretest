<script setup>
import MovieList from './components/Movies/MovieList.vue'
import SearchBar from './components/SearchBar.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="40" height="40" />
    <h1>
      Movie List Vue App
    </h1>
  </header>

  <main>
    <SearchBar />
    <MovieList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 10 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: 10px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
