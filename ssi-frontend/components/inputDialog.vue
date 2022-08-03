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
          v-slot="{errors, reset}"

          name="Name"
          :rules="{required:true}"
        >
          <v-text-field
            v-model="namePoolLocal"
            dense
            outlined
            color="primary"
            :label="$t('words.name')"
            :placeholder="$t('words.insertName')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {field:$t('words.name')})"

          >
          </v-text-field>

        </validation-provider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <validation-provider
          v-slot="{errors}"
          name="AgentUrl"
          :rules="{required:true}"
        >
          <v-text-field
            v-model="AgentUrl"
            dense
            outlined
            color="primary"
            :label="$t('words.AgentUrl')"
            :placeholder="$t('words.insertAgentUrl')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {field:$t('words.AgentUrl')})"
          ></v-text-field>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-switch
          inset
          v-model="customToken"
          color="primary"
          :label="$t('words.customAgent')"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1" md="1">
        <v-btn
          fab
          tile
          icon
          small
          elevation="1"
          :disabled="customToken==false"
          @click="addToken(name, AuthorizationToken, AuthorizationTokenList)"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="11">
        <h4 class="title-h4">{{ $t('words.AddAuthorizationToken') }}</h4>
      </v-col>
    </v-row>
    <v-row justify="center"
           v-for="(Token,i) in AuthorizationTokenList"
           :key="i"
           align="center"
    >
      <v-col cols="4">
        <validation-provider
          v-slot="{errors}"
          name="AuthorizationToken"
          :rules="{required:true && customToken===true}"
        >

          <v-text-field
            :disabled="customToken===false"
            v-model="Token.name"
            dense
            outlined
            color="primary"
            :label="$t('words.AuthorizationTokenName')"
            :placeholder="$t('words.insertAuthorizationTokenName')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {fieldset:$t('words.AuthorizationToken')})"

            @click:append="cancelToken(i, AuthorizationTokenList)"
          ></v-text-field>
          <!--|| emptyForm==true-->
        </validation-provider>
      </v-col>

      <v-col cols="7" md="7">


        <validation-provider
          v-slot="{errors}"
          name="AuthorizationToken"
          :rules="{required:true && customToken===true}"
        >

          <v-text-field
            :disabled="customToken===false"
            v-model="Token.AuthorizationToken"
            dense
            outlined
            color="primary"
            :label="$t('words.AuthorizationTokenValue')"
            :placeholder="$t('words.insertAuthorizationTokenValue')"
            :hide-details="errors.length==0"
            :error-messages="$t('error_messages.' + errors[0], {fieldset:$t('words.AuthorizationToken')})"


          ></v-text-field>
          <!--@click:append-->
          <!--|| emptyForm==true-->
        </validation-provider>

      </v-col>
      <v-col cols="1" md="1">
        <v-icon @click="cancelToken(i, AuthorizationTokenList)">mdi-delete</v-icon>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
//import

import {extend, ValidationProvider} from 'vee-validate';
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
      customToken: false,
      name: undefined,
      AgentUrl: undefined,
      AuthorizationToken: undefined,
      AuthorizationTokenList: [],
      namePoolLocal: undefined,
      namePoolBackup: this.namePoolLocal,
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
  },
  mounted() {
    this.namePoolBackup = this.namePool
    this.namePoolLocal = this.namePool
  },
  methods: {
    cancelData() {
      this.namePoolLocal = this.namePoolBackup
      this.customToken = false
      this.AgentUrl = null
      this.AuthorizationTokenList = []
      this.AuthorizationToken = null

    },
    returnOldData() {
      this.namePoolLocal = this.namePoolBackup

    },
    addToken(name, value, list) {
      list.push({
        name: "",
        value: ""
      });
    },
    cancelToken(index, list) {
      list.splice(index, 1)
    },

  },
  watch: {
    namePoolLocal() {
      this.$emit('name-pool', this.namePoolLocal)
    }

  },

}

</script>
