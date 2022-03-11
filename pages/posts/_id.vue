<template>
  <div>
    <main class="posts-container">
      <h1>Post Detail</h1>
      <p v-if="!post">Loading...</p>

      <article v-else>
        <!-- <Post :post="post" /> -->

        <div class="post-card">
          <small>#{{ post.id }} | User ID: {{ post.userId }} </small><br />
          <strong> {{ post.title }} </strong>
          <p>{{ post.body }}</p>
        </div>
      </article>

      <button @click="goBack()">Go back</button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      postId: this.$route.params.id,
    };
  },

  async created() {
    this.post = await this.getPost(this.postId);
  },

  methods: {
    async getPost(id) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((response) => response.json());

        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    goBack() {
      this.$router.push(`/posts`);
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

