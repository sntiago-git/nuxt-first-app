<template>
  <div>
    <main class="posts-container">
      <p v-if="!posts">Loading...</p>

      <!-- <ul v-else>
        <li v-for="{ id, userId, title, body } in posts" :key="id">
          <div class="post-card">
            <small>#{{ id }} | User ID: {{ userId }} </small><br />
            <strong> {{ title }} </strong>
            <p>{{ body }}</p>
            <nuxt-link :to="'/posts/' + id">Ver (nuxt-link)</nuxt-link> |
            <button @click="goToPost(id)">Ver (router push)</button>
            <hr />
          </div>
        </li>
      </ul>-->

      <!-- Usando un componente en lugar de un ul -->
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </main>
  </div>
</template>



<script>
import Post from "../../components/Post.vue";
export default {
  components: { Post },
  data() {
    return {
      posts: null,
    };
  },

  async created() {
    this.posts = await this.getPosts();
  },

  methods: {
    async getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => response.json());

        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

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
