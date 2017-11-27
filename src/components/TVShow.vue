<template>
  <div class="tv_show">
    <div>{{ show.name }}</div>
    <img v-bind:src="`static/${show.image}`" />
    <h1>Reviews</h1>
    <ul class="show_reviews">
      <li class="show_review" v-for="review in show.reviews" :key="review.id">
        <span>{{ review.reviewer }}</span>
        <p>{{ review.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import TVShows from '../mock_data.js'

export default {
  name: 'TVShow',
  created: function () {
    setTimeout(() => {
      this.show = TVShows.find(show => show.id === this.$route.params.id)
    })
  },
  data: function () {
    return {
      show: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .show_reviews {
    list-style: none;
    text-align: left;
  }
  .show_review {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
  }
</style>
