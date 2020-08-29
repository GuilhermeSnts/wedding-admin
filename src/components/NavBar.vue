<template>
  <q-footer class="bg-red-9 text-white">
    <q-tabs>
      <q-tab label="a"></q-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    items: {
      type: Object,
      required: true
    }
  }
};
</script>
