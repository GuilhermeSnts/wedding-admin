<template>
  <q-page class="flex flex-center">
    {{ FAMILIES }}
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PageIndex",

  methods: {
    ...mapActions("families", ["GET_FAMILIES"])
  },

  computed: {
    ...mapGetters("families", ["FAMILIES"])
  },

  mounted() {
    this.GET_FAMILIES();
  }
};
</script>
