<template lang="pug">
div
  q-btn(
    push,
    icon="mdi-plus",
    @click="dialog = true",
    color="primary",
    label="familia"
  )

  q-dialog(v-model="dialog", position="bottom")
    q-card.bg-primary.text-white
      q-card-section
        .text-h6 Adicione uma nova familia

      q-card-section(style="min-height: 450px")
        q-input.q-mb-md(
            label="Nome da familia",
            standout="bg-white text-primary",
            dark,
            dense,
            v-model="familyName"
        )

        q-separator.q-mt-md.q-mb-md
        p.text-grey Adicione membros a essa familia
        .row.q-gutter-md
          .col-5
            q-input(
                label="Nome",
                standout="bg-white text-primary",
                dark,
                dense,
                v-model="membersToAdd.name"
              )
          .col-5
            q-input(
                label="telefone",
                standout="bg-white text-primary",
                dark,
                tyle="tel"
                dense,
                mask="(##) # ####-####",
                v-model="membersToAdd.telephone"
            )
          .col
            q-btn(
                push,
                color="white",
                class="text-black"
                icon="mdi-plus",
                round,
                dense,
                @click="addMember()"
              )
          q-separator.q-mt-md.q-mb-md

          q-card(style="width: 100%" class="text-black")
            q-card-section
              p.text-grey Membros adicionados

              .row.flex.flex-center
                q-icon(v-show="members.length < 1" style="font-size: 5em;" class="text-grey" name="mdi-card-bulleted-off-outline")

              q-list(clickable separator style="width: 100%")
                q-item(v-for="(member, index) in members" :key="index")
                  q-item-section(avatar)
                    q-icon(color="primary" name="mdi-account-group")
                  q-item-section
                    q-item-label {{ member.name }}
                    q-item-label(caption) {{ member.telephone }}
                  q-item-section(side)
                    q-btn(icon="mdi-close" flat round @click="removeMember(index)")

      q-card-actions.bg-primary.text-white(align="between")
        q-btn(flat, label="fechar", v-close-popup)
        q-btn(
          class="text-black"
          push,
          color="white",
          icon="mdi-plus",
          label="adicionar",
          @click="createFamily()"
        )
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FamilyAdd",

  data: () => ({
    dialog: false,
    familyName: "",
    membersToAdd: {
      name: "",
      telephone: ""
    },
    members: []
  }),

  methods: {
    ...mapActions("families", ["CREATE_FAMILY"]),

    addMember() {
      console.log("add");
      this.members.push({ ...this.membersToAdd });
      this.membersToAdd.name = "";
      this.membersToAdd.telephone = "";
    },

    removeMember(index) {
      this.members.splice(index, 1);
    },

    cleanData() {
      this.members = [];
      this.membersToAdd.name = "";
      this.membersToAdd.telephone = "";
      this.familyName = "";
    },

    createFamily() {
      this.$q.loading.show();
      this.CREATE_FAMILY({
        name: this.familyName,
        members: this.members
      })
        .then(() => {
          this.cleanData();
          this.dialog = false;
        })
        .catch(err =>
          this.$q.notify(
            "Ocorreu um erro ao gravar. tente novamente mais tarde."
          )
        )
        .finally(() => this.$q.loading.hide());
    }
  }
};
</script>
