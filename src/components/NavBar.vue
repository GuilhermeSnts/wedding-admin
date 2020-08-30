<template lang="pug">
  q-footer( color="primary" class="text-white")
    q-tabs
      q-tab(icon="mdi-account-group")
      q-tab(icon="mdi-gift")
      q-tab(icon="mdi-map-marker")
      q-tab(icon="mdi-cog")

</template>

<script>
export default {
  name: "NavBar",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
