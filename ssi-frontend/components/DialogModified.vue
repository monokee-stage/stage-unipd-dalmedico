<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="11">
        <validation-observer v-slot="{invalid}" ref="observer">
          <v-dialog
            v-model="dialogModified"
            hide-overlay
            width="80%"
          >
            <template v-slot:activator="{ on, attrs }">

              <slot
                name="activator"
                v-bind:on="on"
                v-bind:attrs="attrs">

              </slot>

            </template>
            <template>

              <v-card class="card-style">

                <slot
                  name="content"
                  :dialogModified="dialogModified"

                ></slot>

                <!--:emptyForm="emptyForm"-->
                <v-row justify="center">
                  <v-col class="d-flex justify-sm-end justify-xs-center my-8" cols="10" md="10">
                    <v-btn
                      @click="closeDialog"
                      class="secondary-btn mr-3"
                      outlined

                    >
                      cancel
                    </v-btn>
                    <!--class="primary-btn"-->
                    <v-btn
                      class="primary-btn"
                      outlined
                      @click="ActionDialog"
                      :disabled="invalid"
                    >
                      {{ actionButton }}
                    </v-btn>
                  </v-col>
                </v-row>


              </v-card>
            </template>
          </v-dialog>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {ValidationObserver} from 'vee-validate'

export default {
  data() {
    return {
      dialogModified: false,
      //emptyForm: false,
    }
  },
  props: {
    actionButton: {
      type: String, default() {
        return '';
      },

    },

  },
  computed: {},
  methods: {
    closeDialog() {
      //this.$refs.form.reset()
      this.$emit('closeDialog')
      this.$nextTick(() => {
        this.$refs.observer.reset()
      });
      this.dialogModified = false
    },

    ActionDialog() {
      //questo metodo viene eseguito dopo Add di AddPoolprova
      this.$emit('actionDialog')
      this.dialogModified = false
    },


  },
  components: {
    ValidationObserver,
  }
}
</script>
