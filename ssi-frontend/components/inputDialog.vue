<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12" class="mt-4">
        <h1 class="title-h1">{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">

      <v-col cols="12" md="12">
        <validation-provider
          v-slot="{errors}"
          name="Name"
          :rules="{required:true}"
        >
          <v-text-field
            v-model="namePool"
            dense
            outlined
            color="primary"
            :label="$t('words.name')"
            :placeholder="$t('words.insertName')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {field:$t('words.name')})"
          ></v-text-field>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-switch
          inset
          v-model="customAgent"
          color="primary"
          :label="$t('words.customAgent')"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <validation-provider
          v-slot="{errors}"
          name="AgentUrl"
          :rules="{required:true && customAgent===true}"
        >
          <v-text-field
            :disabled="customAgent===false"
            v-model="AgentUrl"
            dense
            outlined
            color="primary"
            :label="$t('words.AgentUrl')"
            :placeholder="$t('words.insertAgentUrl')"
            :hide-details="errors.length==0 "
            :error-messages="$t('error_messages.' + errors[0], {field:$t('words.AgentUrl')})"
          ></v-text-field>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <validation-provider
          v-slot="{errors}"
          name="AuthorizationToken"
          :rules="{required:true && customAgent===true}"
        >
          <v-text-field
            :disabled="customAgent===false"
            v-model="AuthorizationToken"
            dense
            outlined
            color="primary"
            :label="$t('words.AuthorizationToken')"
            :placeholder="$t('words.insertAuthorizationToken')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {fieldset:$t('words.AuthorizationToken')})"
          ></v-text-field>
          <!--|| emptyForm==true-->
        </validation-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import

import {extend, ValidationObserver, ValidationProvider} from 'vee-validate';
import {required, min, max, confirmed, regex} from "vee-validate/dist/rules";
import dialogModified from "@/components/DialogModified";

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
  data() {
    return {
      customAgent: true,
      name: undefined,
      AgentUrl: undefined,
      AuthorizationToken: undefined,
    }
  },
  props: {
    title: {
      type: String, default() {
        return ''
      }
    },
    namePool: {
      type: String, default() {
        return ''
      }
    },
    //emptyForm: {type: Boolean, required: true},
    //dialogModified: {type: Boolean, required: true}
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    cancelData() {
      this.namePool = null
      this.customAgent = true
      this.AgentUrl = null
      this.AuthorizationToken = null
    }
  },
  watch: {
    //emptyForm(newValue, oldValue) {
    //fare reset
    //if (newValue === true) {
    //this.customAgent = true
    //this.name = ''
    //this.AgentUrl = ''
    //this.AuthorizationToken = ''

    //}
    //}
  },

}

</script>
