<template lang="pug">
  q-page
    p( class=" q-ma-md text-h4 text-grey font-title") Familias
    
    p( class="flex flex-center")
      family-add
    
    family-list( :families="FAMILIES" @click="showFamilyInfo")
    
    q-dialog(v-model="dialog", persistent, position="bottom")
      family-info( :name="familySelected.name", :members="familySelected.members")

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FamilyList from "components/FamilyList.vue";
import FamilyAdd from "components/FamilyAdd.vue";
import FamilyInfo from "components/FamilyInfo.vue";
export default {
  name: "PageIndex",

  components: {
    FamilyList,
    FamilyAdd,
    FamilyInfo
  },

  data: () => ({
    familySelected: {},
    dialog: false
  }),

  methods: {
    ...mapActions("families", ["GET_FAMILIES", "WATCH_CHANGES"]),

    showFamilyInfo(event) {
      this.dialog = true;
      this.familySelected = event;
    }
  },

  computed: {
    ...mapGetters("families", ["FAMILIES"])
  },

  mounted() {
    this.GET_FAMILIES();

    this.WATCH_CHANGES();
  }
};
</script>
