<template>
  <AppHeader />

  <div class="container">
    <aside></aside>

    <main>
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />

      <button type="button" class="reset-likes-btn" @click="onResetLikes">
        Reset likes
      </button>
    </main>

    <aside></aside>
  </div>

  <AppFooter />
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import PostItem from './PostItem.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter,
    PostItem
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    onResetLikes() {
      this.$store.commit('resetAllLikes');
    }
  }
};
</script>

