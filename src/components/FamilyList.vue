<template lang="pug">
  q-list(clickable bordered separator style="width: 100%")
    q-item(v-for="(family, index) in families" :key="index")
      
      q-item-section(avatar)
        q-icon(color="primary" name="mdi-account-group")
      
      q-item-section
        q-item-label {{ family.name }}
      
      q-item-section(side top)
        q-badge( color="teal" :label="Object.values(family.members).length" )
</template>

<script>
export default {
  name: "FamilyList",
  props: {
    families: {
      type: Array,
      required: true
    }
  }
};
</script>
