<template>
  <ul class="tv_show_list">
    <li class="show_item" v-for="show in TVShows" v-bind:key="show.id">
      <router-link v-bind:to="`/show/${show.id}`">
        <img v-bind:src="`static/${show.image}`" />
      </router-link>
      {{ show.name }}
    </li>
  </ul>
</template>

<script>
import TVShows from '../mock_data.js'

export default {
  name: 'TVShowList',
  data: function () {
    return {
      TVShows
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tv_show_list {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .show_item {
    display: flex;
    flex-direction: column;
  }
  .show_item img {
    height: 200px;
    width: 200px;
  }
</style>
