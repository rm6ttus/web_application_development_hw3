<template>
  <article class="post">
    <div class="post-header">
      <div class="post-user">
        <img
          :src="(post.author && post.author.avatar) || 'images/user_avatar.png'"
          alt="Avatar"
          class="avatar-img"
        />
        <span class="post-author">{{ post.author && post.author.name }}</span>
      </div>
      <time :datetime="formattedDate">{{ formattedDate }}</time>
    </div>

    <p>{{ post.content }}</p>

    <img
      v-if="post.media"
      :src="post.media"
      alt="Post media"
      class="post-image"
    />

    <div class="post-footer">
      <span>{{ post.likes }} likes</span>
      <button type="button" class="like-btn" @click="onLike">
        Like
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      if (!this.post.createTime) return 'Unknown Date';
      return this.post.createTime.split('T')[0];
    }
  },
  methods: {
    onLike() {
      this.$store.commit('incrementLike', this.post.id);
    }
  }
};
</script>

