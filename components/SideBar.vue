<template>
  <v-navigation-drawer app permanent expand-on-hover>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://ichi.pro/assets/images/max/724/1*mh8il3s3hB0Xdpx6ffQLTw.png"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item inactive>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Example Posts App
          </v-list-item-title>
          <v-list-item-subtitle
            >Created with Nuxt and Vuetify.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <!-- Links and navigation -->
    <v-list nav dense>
      <v-list-item link nuxt to="/posts">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Posts</v-list-item-title>
      </v-list-item>
      <v-list-item link nuxt to="/about">
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>About us</v-list-item-title>
      </v-list-item>
      <v-list-item link nuxt to="/examplepage1">
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>New</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
</style>