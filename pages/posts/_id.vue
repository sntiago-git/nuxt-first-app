<template>
  <v-container>
    <p v-if="!post">
      <v-skeleton-loader
        class="mx-auto"
        type="list-item-avatar-three-line, article"
      ></v-skeleton-loader>
    </p>
    <v-layout row wrap align-center justify-center v-else>
      <v-flex xs12 md6>
        <v-card class="elevation-0 transparent">
          <v-card-text class="text-xs-center link">
            <v-icon x-large class="blue--text text--lighten-2"
              >By {{ post.userId }}</v-icon
            >
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-xs-center">{{ post.title }}</div>
          </v-card-title>
          <v-card-text>
            {{ post.body }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="elevation-0 transparent">
          <v-card-text class="text-xs-center">
            <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">Fast feedback</div>
          </v-card-title>
          <v-card-text>
            Time is important, we don't want you to waste it. Here you can get a
            massive feedback from real users in minutes. And if your stuff is
            appreciated you won't only get positive feedback but also lovely and
            sincere fans
          </v-card-text>
        </v-card>
      </v-flex>

      <h1>Post Detail</h1>

      <button @click="goBack()">Go back</button>
    </v-layout>
  </v-container>
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

        this.getUser(response.userId);

        return response;
      } catch (error) {
        console.log(error);
      }
    },

    getUser(id) {
      try {
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>

