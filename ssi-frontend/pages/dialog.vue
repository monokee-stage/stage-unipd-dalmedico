<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <dialog-modified
          v-model="dialog"
          action-button="Save"
          @closeDialog="cancel"
          @actionDialog="save"

        >
          <template v-slot:activator="{on,attrs}">
            <v-btn v-on="on" v-bind="attrs" class="primary-btn">Add Agent</v-btn>
          </template>
          <template v-slot:content="{dialogModified}">
            <v-row justify="center">
              <v-col cols="10">
                <v-card height="70vh">
                </v-card>
              </v-col>
            </v-row>

          </template>
        </dialog-modified>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import dialogModified from "~/components/DialogModified";

export default {
  components: {
    dialogModified
  },
  layout: 'easySidebar',
  data() {

    return {
      dialog: undefined
    }
  },
  methods: {
    cancel() {
    },
    save() {
    },
  }
}

</script>
