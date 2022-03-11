<template>
  <div class="post-card">
    <small>#{{ post.id }} | User ID: {{ post.userId }} </small><br />
    <strong> {{ post.title }} </strong>
    <br />
    <nuxt-link :to="'/posts/' + post.id">Ver (nuxt-link)</nuxt-link> |
    <button @click="goToPost(post.id)">Ver (router push)</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //post: null,
      postId: this.$route.params.id,
    };
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  async created() {
    //this.post = await this.getPost(this.postId);
  },

  methods: {
    goToPost(id) {
      this.$router.push({ path: `/posts/${id}` });
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
.post-card {
  width: 400px;
  margin: auto;
  text-align: left;
}

.posts-container {
  text-align: center;
  align-content: center;
}
</style>
