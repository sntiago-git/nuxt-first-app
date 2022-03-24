<template>
  <v-container>
    <v-lazy>
      <v-data-table
        :headers="headers"
        :items="posts"
        :loading="loading"
        loading-text="Loading... Please"
        sort-by="id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Posts Availables</v-toolbar-title>
            <!-- <v-divider class="mx-4" inset vertical></v-divider>-->
            <v-spacer></v-spacer>

            <!--
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.title"
                          label="Post title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.id"
                          label="Post id"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.userId"
                          label="User id"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>

            -->
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="goToPost(item.id)">
            mdi-arrow-expand-right
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      dialog: false,
      dialogDelete: false,

      //Headers del data table
      headers: [
        {
          text: "Post Title",
          align: "start",

          sortable: false,
          value: "title",
        },
        { text: "ID", value: "id", class: "col-1", align: "center" }, //value = valor de la key del json.
        { text: "By User", value: "userId", class: "col-2", align: "center" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "col-1",
          align: "center",
        },
      ],

      //posts
      posts: [],

      editedIndex: -1,
      editedItem: {
        id: 0,
        userId: 0,
        title: "",
        //body: "",
      },
      defaultItem: {
        id: 0,
        userId: 0,
        title: "",
        //body: "",
      },
    };
  },

  async created() {
    this.posts = await this.getPosts();
    this.loading = false;
  },

  methods: {
    async getPosts() {
      try {
        this.loading = true;
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
</style>
