
<script>
export default {
  name: "MovieListItem",
  props: {
    movie: { type: Object, default: {}, required: true },
  },
};
</script>
<template>
  <v-list-item>
    <v-list-item-title>
      {{ movie?.Title }}
    </v-list-item-title>
    <v-list-item-subtitle>
        {{ movie?.Year }}
    </v-list-item-subtitle>
  </v-list-item>
</template>