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
            v-model="AgentUrlLocal"
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
    <v-row
      justify="center"
      v-for="(Token,i) in AuthorizationTokenList"
      :key="i"
      align="center"
    >
      <v-col cols="4">
        <v-text-field
          :disabled="customToken===false"
          v-model="Token.name"
          dense
          outlined
          color="primary"
          :label="$t('words.AuthorizationTokenName')"
          :placeholder="$t('words.insertAuthorizationTokenName')"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="7" md="7">
        <v-text-field
          :disabled="customToken===false"
          v-model="Token.value"
          dense
          outlined
          color="primary"
          :label="$t('words.AuthorizationTokenValue')"
          :placeholder="$t('words.insertAuthorizationTokenValue')"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="1" md="1" align="end">
        <v-icon @click="cancelToken(i, AuthorizationTokenListLocal)" :disabled="customToken===false">mdi-delete</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {extend, ValidationProvider} from 'vee-validate';
import {required, min, max, confirmed, regex} from "vee-validate/dist/rules";

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
      nameBackup: this.name,
      AuthorizationToken: undefined,
      AuthorizationTokenListLocal: [],
      namePoolLocal: undefined,
      namePoolBackup: this.namePoolLocal,
      AgentUrlLocal: undefined,
      AgentUrlBackup: this.AgentUrlLocal,
      AuthorizationTokenListbackup: this.AuthorizationTokenListLocal
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
    agentUrl: {
      type: String,
      default() {
        return ''
      }
    },
    AuthorizationTokenList: {
      type: Array, default() {
        return []
      }
    }
  },
  components: {
    ValidationProvider,
  },
  mounted() {
    this.namePoolBackup = this.namePool
    this.namePoolLocal = this.namePool
    this.AgentUrlLocal = this.agentUrl
    this.AgentUrlBackup = this.agentUrl
    this.AuthorizationTokenListLocal = this.AuthorizationTokenList
    this.AuthorizationTokenListbackup = this.AuthorizationTokenList
  },
  methods: {
    cancelData() {
      this.namePoolLocal = this.namePoolBackup
      this.customToken = false
      this.AgentUrlLocal = this.AgentUrlBackup
      this.AuthorizationTokenListLocal = this.AuthorizationTokenListbackup
    },
    returnOldData() {
      this.namePoolLocal = this.namePoolBackup
      this.AgentUrlLocal = this.AgentUrlBackup
      this.AuthorizationTokenListLocal = this.AuthorizationTokenListbackup
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
    },
    AgentUrlLocal() {
      this.$emit('agent-url', this.AgentUrlLocal)
    },
    AuthorizationTokenListLocal: {
      deep: true,
      handler() {
        this.$emit('AuthorizationTokenList', this.AuthorizationTokenListLocal)
      }

    }
  },
}
</script>
