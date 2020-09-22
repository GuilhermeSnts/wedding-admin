<template lang="pug">
  q-card.bg-primary.text-white
    q-card-section
      .text-h6 Familia {{ name }}
    q-card-section
      q-list(clickable bordered separator style="width: 100%" v-show="members.length >= 1")
    
        q-item(v-for="(member, index) in members" :key="index" clickable v-ripple)
            
          q-item-section(avatar)
            q-icon(color="white" name="mdi-account")
                
          q-item-section
            q-item-label {{ member.name }}
            q-item-label {{ member.telephone }}
                

</template>

<script>
export default {
  name: "FamilyInfo",

  props: {
    name: String,
    members: Array
  }
};
</script>
