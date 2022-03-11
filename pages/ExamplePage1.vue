<template>
  <div>
    <h1>Page: {{ $route.name }}</h1>
    <p>
      Cupidatat pariatur exercitation et tempor irure do est sit elit excepteur
      esse aute Lorem ut. Exercitation esse esse nisi labore velit et sunt est
      minim amet. Qui dolor do eiusmod ipsum exercitation consectetur commodo
      consectetur pariatur reprehenderit exercitation do ut cupidatat. Dolore
      enim labore pariatur veniam magna quis deserunt irure eiusmod aliquip.
      Ipsum enim in eu eiusmod qui sunt incididunt mollit aliquip occaecat
      magna. Cillum ad in elit esse nisi amet quis anim eiusmod exercitation non
      fugiat.
    </p>
  </div>
</template>

<script>
export default {
  layout: "ExampleLayout", //LayoutCustom

  head() {
    return {
      title: "Example", //Cambia la informacion meta, ejemplo: title.
      
      /*meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about posts",
        },
      ],*/
    };
  },
};
</script>

<style>
</style>