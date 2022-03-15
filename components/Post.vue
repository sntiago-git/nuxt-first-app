<template>
  <!--
  <div class="post-card">
    <small>#{{ post.id }} | User ID: {{ post.userId }} </small><br />
    <strong> {{ post.title }} </strong>
    <br />
    <nuxt-link :to="'/posts/' + post.id">Ver (nuxt-link)</nuxt-link> |
    <button @click="goToPost(post.id)">Ver (router push)</button>
    <hr />
  </div> -->

  <div>
    
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
</style>
