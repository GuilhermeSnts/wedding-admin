<template lang="pug">
div
  q-separator
  .div(v-show="families.length < 1")
    .row.flex.flex-center.q-my-md
      q-icon( style="font-size: 5em;" class="text-grey" name="mdi-card-bulleted-off-outline")
    .row.flex.flex-center.text-grey Nenhuma familia foi adicionada ainda

  q-list(clickable bordered separator style="width: 100%" v-show="families.length >= 1")
    
    q-item(v-for="(family, index) in families" :key="index" @click="showInfo(family)" clickable v-ripple)
      
      q-item-section(avatar)
        q-icon(color="primary" name="mdi-account-group")
      
      q-item-section
        q-item-label {{ family.name }}
      
      q-item-section(side)
        q-badge( color="grey" :label="Object.values(family.members).length" )
</template>

<script>
export default {
  name: "FamilyList",

  methods: {
    showInfo(family) {
      this.$emit("click", family);
    }
  },

  props: {
    families: {
      type: Array,
      required: true
    }
  }
};
</script>
