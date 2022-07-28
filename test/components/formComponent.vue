<template>
  <v-row justify="center" align="end" style="height: 75vh">
    <v-col cols="12" md="10" align="center">
      <v-dialog
        v-model="dialog"
        width="40%"
        hide-overlay
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            {{ $t('words.open_form') }}
          </v-btn>
        </template>
        <v-card>
          <v-toolbar cols="12" md="10" dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>

          <v-col>
            <validation-observer v-slot="{invalid}">
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6" md="10">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    :rules="{required: true,}"
                  >
                    <v-text-field
                      v-model="name"
                      dense
                      outlined
                      :label="$t('words.name')"
                      :placeholder="$t('words.insertName')"
                      :hide-details="errors.length==0"
                      :error-messages="$t('error_messages.'+errors[0], {field:$t('nome')})"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" md="10">

                  <validation-provider
                    v-slot="{errors}"
                    name="select"
                    :rules="{
                      required: true,
                    }"
                  >
                    <v-combobox
                      v-model="select"
                      :items="items"
                      :label="$t('words.comboBox')"
                      multiple
                      chips
                      outlined
                      dense
                      :error-messages="$t('error_messages.' + errors[0],{field:$t('comboBox')})"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          :disabled="data.disabled"
                          @click:close="data.parent.selectItem(data.item)"
                        >
                          <v-avatar
                            class="accent white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                          ></v-avatar>
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-combobox>
                  </validation-provider>
                </v-col>
                <v-col cols="12" md="10" sm="6">
                  <validation-provider
                    v-slot="{errors}"
                    :rules="{required:true, min:3}"
                    name="textarea"
                  >
                    <v-textarea
                      v-model="textarea"
                      :label="$t('words.textArea')"
                      :error-messages="$t('error_messages.'+ errors[0],{field:$t('textArea')})"
                      rows="3"
                      dense
                      outlined
                    >
                    </v-textarea>
                  </validation-provider>
                </v-col>
                <v-col cols="12" md="10" sm="6">
                  <validation-provider
                    v-slot="{errors}"
                    :rules="{required: true}"
                    name="selectModel"
                  >
                    <v-select
                      v-model="selectModel"
                      :items="items"
                      :label="$t('words.select')"
                      outlined
                      :error-messages="$t('error_messages.'+errors[0], {field:$t('selectItem')})"
                    ></v-select>
                  </validation-provider>
                </v-col>
                <v-col cols="12" md="10" sm="6">

                  <validation-provider
                    v-slot="{errors}"
                    rules="confirmed:confirmation"
                    name="testo"
                  >
                    <v-text-field
                      v-model="testo"
                      dense
                      outlined
                      :placeholder="$t('words.confirmed')"
                      :error-messages="$t('error_messages.'+ errors[0],{field:$t('confermaItem')})"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{errors}"
                    vid="confirmation"
                    name="confirmation"
                  >
                    <v-text-field
                      dense
                      outlined
                      v-model="confirmation"
                      :placeholder="$t('words.textConfirm')"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="5" align="end">
                  <v-btn color="secondary" @click="Cancel()">
                    {{ $t('words.cancel') }}
                  </v-btn>
                </v-col>
                <v-col cols="5">
                  <v-btn :disabled="invalid" color="primary" @click="$emit('random', 'Hello')">
                    {{ $t('words.send') }}
                  </v-btn>

                </v-col>
              </v-row>
            </validation-observer>
          </v-col>

        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import {extend, ValidationObserver, ValidationProvider} from 'vee-validate' ;
import {required, min, max, confirmed, regex} from "vee-validate/dist/rules";
import NuxtLogoVue from "./NuxtLogo.vue";

extend("min", min);
extend("max", max);
extend("confirmed", {
  ...confirmed,
  message: "confirmed",
});
extend("required", {
  ...required,
  message: "required",
});

export default {
  name: "FormComponent",
  data() {
    return {
      dialog: false,
      select: [],
      items: ["Hello", "Ciao", "Hola", "Bonjour"],
      textarea: undefined,
      name: undefined,
      selectModel: undefined,
      confirmation: undefined,
      testo: undefined,
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    link: String,
  },
  //com eun altro dato che viene modificato a partire da un altro (es data e ora)
  computed: {
    cancel() {
      return this.link;
    },
  },
  emits: {
    random: null,
  },
  methods: {
    send() {
      alert("form inviato");
    },
    Cancel() {
      this.$router.push(
        this.localePath({
          path: '/',
        }),
      )

    }
  },
};
</script>

<style></style>
