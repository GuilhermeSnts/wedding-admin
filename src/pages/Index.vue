<template lang="pug">
  q-page
    p( class="text-h4 text-grey font-title") Familias
    p( class="flex flex-center")
      family-add
    family-list( :families="FAMILIES")
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FamilyList from "components/FamilyList.vue";
import FamilyAdd from "components/FamilyAdd.vue";
export default {
  name: "PageIndex",

  components: {
    FamilyList,
    FamilyAdd
  },

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
