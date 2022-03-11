<template>
  <div>
    <!-- import tailwindcss TODOS LOS QUE USEN ESTE LAYOUT TENDRÁN ACCESO AL TAILWINDCSS-->
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />

    <div class="grid">
      <header
        class="bg-gray-100 overflow-hidden shadow p-4 fixed text-center w-full"
      >
        <div>
          <h1>Default Layout | Page: {{ $route.name }}</h1>
        </div>
        <!-- buttons -->
        <div class="mt-2 mb-2">
          <nuxt-link
            to="/about"
            class="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-blue-700
              hover:border-blue-500
              rounded
            "
            >About us</nuxt-link
          >
          <nuxt-link
            to="/posts"
            class="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-blue-700
              hover:border-blue-500
              rounded
            "
            >Posts</nuxt-link
          >

          <nuxt-link
            to="/examplepage1"
            class="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-blue-700
              hover:border-blue-500
              rounded
            "
            >Example Page 1</nuxt-link
          >
        </div>
      </header>
    </div>

    <!-- routerview -->
    <div style="margin-top: 120px">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "default",

  head() {
    return {
      title: "def-" + this.$route.name, //Cambia la informacion meta, ejemplo: title.
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about posts - DEFAULT LAYOUT",
        },
      ],

      htmlAttrs: {
        lang: "en",
      },
    };
  },

  created() {
    console.log("Default Layout created()");
    console.log(this.$route);
  },
};
</script>

<style>
</style>