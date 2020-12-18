<template>
  <!-- <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="siderbar" app>

    </v-navigation-drawer>

    <v-main>
      <v-btn to="/">home</v-btn>
      <v-btn to="/about">about</v-btn>
      <HelloWorld />
      <router-view></router-view>
    </v-main>
  </v-app> -->


  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar><!-- 根据应用程序组件调整内容大小 --><v-main><!-- 为应用程序提供正确的插槽 --><v-container fluid><!-- 如果使用vue-router --><router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>





</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    //
  }),
};
</script>
