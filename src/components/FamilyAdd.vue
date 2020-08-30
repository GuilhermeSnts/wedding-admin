<template lang="pug">
div
  q-btn(
    push,
    icon="mdi-plus",
    @click="dialog = true",
    color="primary",
    label="familia"
  )

  q-dialog(v-model="dialog", persistent, position="bottom")
    q-card.bg-primary.text-white
      q-card-section
        .text-h6(Adicione, uma, nova, familia)

      q-card-section(style="min-height: 300px")
        q-form
          q-input.q-mb-md(
            label="Nome da familia",
            standout="bg-white text-primary",
            dark,
            dense,
            v-model="familyName"
          )

          q-separator.q-mt-md.q-mb-md

          .row.q-gutter-md
            .col
              q-input(
                label="Nome",
                standout="bg-white text-primary",
                dark,
                dense,
                v-model="membersToAdd.name"
              )
            .col
              q-input(
                label="telefone",
                standout="bg-white text-primary",
                dark,
                dense,
                v-model="membersToAdd.telephone"
              )
            .col.text-black(
              q-btn,
              push,
              color="white",
              icon="mdi-plus",
              round,
              dense
            )
            q-separator.q-mt-md.q-mb-md

      q-card-actions.bg-primary.text-white(align="between")
        q-btn(flat, label="fechar", v-close-popup)
        q-btn.text-black(
          push,
          color="white",
          icon="mdi-plus",
          label="adicionar"
        )
</template>

<script>
export default {
  name: "FamilyAdd",

  data: () => ({
    dialog: false,
    familyName: "",
    membersToAdd: {
      name: "",
      telephone: ""
    }
  })
};
</script>
