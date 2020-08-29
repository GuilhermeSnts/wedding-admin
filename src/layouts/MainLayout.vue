<template>
  <q-layout view="lHh Lpr lFf">
    <nav-bar :items="navbarOptions"></nav-bar>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavBar from "components/NavBar.vue";

export default {
  name: "MainLayout",
  components: { NavBar },
  data() {
    return {
      leftDrawerOpen: false,
      navbarOptions: [
        {
          title: "Quasar Awesome",
          caption: "Community Quasar projects",
          icon: "favorite",
          link: "https://awesome.quasar.dev"
        }
      ]
    };
  }
};
</script>
