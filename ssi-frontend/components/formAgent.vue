<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" md="6" class="mt-4">
        <h1 class="title-h1">{{ title }}</h1>
      </v-col>
      <v-col>
        <v-switch
          inset
          v-model="AgentCustomLocal"
          color="primary"
          :label=changeView()
        ></v-switch>
      </v-col>
    </v-row>
    <template v-if="AgentCustomLocal===true">
      <v-row justify="center">
        <v-col cols="12" md="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="Name"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="nameAgentLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.name')"
              :placeholder="$t('words.insertName')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.name')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12">

          <v-card>
            <v-row align="center">
              <v-col cols="3" align="center"><h4 class="title-h4">{{ $t('inboundTransport') }}</h4></v-col>
              <v-col cols="3">
                <validation-provider
                  v-slot="{errors, reset}"
                  name="listeningMethod"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="listeningMethodLocal"
                    dense
                    outlined
                    color="primary"
                    :label="$t('words.listeningMethod')"
                    :placeholder="$t('words.insertlisteningMethod')"
                    :hide-details="errors.length==0"
                    :error-messages="$t('error_messages.' +errors[0], {field:$t('words.listeningMethod')})"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="3">
                <validation-provider
                  v-slot="{errors, reset}"
                  name="listeningIp"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="listeningIpLocal"
                    dense
                    outlined
                    color="primary"
                    :label="$t('words.listeningIp')"
                    :placeholder="$t('words.insertlisteningIp')"
                    :hide-details="errors.length==0"
                    :error-messages="$t('error_messages.' +errors[0], {field:$t('words.listeningIp')})"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="3">
                <validation-provider
                  v-slot="{errors, reset}"
                  name="listeningPortLocal"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="listeningPortLocal"
                    dense
                    outlined
                    color="primary"
                    :label="$t('words.listeningPort')"
                    :placeholder="$t('words.insertlisteningPort')"
                    :hide-details="errors.length==0"
                    :error-messages="$t('error_messages.' +errors[0], {field:$t('words.listeningPort')})"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="outboundTransport"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="outboundTransportLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.outboundTransport')"
              :placeholder="$t('words.insertoutboundTransport')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.outboundTransport')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="e"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="eLocal"
              dense
              outlined
              color="primary"
              label="e"
              :placeholder="$t('words.insertE')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:'e'})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="genesisUrl"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="genesisUrlLocal"
              dense
              outlined
              color="primary"
              label="Genesis Url"
              :placeholder="$t('words.insertGenesisUrl')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:'Genesis Url'})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12">

          <v-card>
            <v-row align="center">
              <v-col cols="3" align="center"><h4 class="title-h4">{{ $t('admin') }}</h4></v-col>
              <v-col cols="3">
                <validation-provider
                  v-slot="{errors, reset}"
                  name="AdminListeningIpLocal"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="AdminListeningIpLocal"
                    dense
                    outlined
                    color="primary"
                    :label="$t('words.listeningIp')"
                    :placeholder="$t('words.insertlisteningIp')"
                    :hide-details="errors.length==0"
                    :error-messages="$t('error_messages.' +errors[0], {field:$t('words.listeningIp')})"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="3">
                <validation-provider
                  v-slot="{errors, reset}"
                  name="Name"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="AdminListeningPortLocal"
                    dense
                    outlined
                    color="primary"
                    :label="$t('words.listeningPort')"
                    :placeholder="$t('words.insertlisteningPort')"
                    :hide-details="errors.length==0"
                    :error-messages="$t('error_messages.' +errors[0], {field:$t('words.listeningPort')})"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cosl="10">
          <v-text-field
            v-model="AdminApiKeyLocal"
            dense
            outlined
            color="primary"
            :label="$t('words.AdminApikey')"
            :placeholder="$t('words.insertAdminApikey')"
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="label"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="labelLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.label')"
              :placeholder="$t('words.insertlabel')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.label')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="imageurl"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="imageUrlLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.imageurl')"
              :placeholder="$t('words.insertimageurl')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.imageurl')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="seed"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="seedLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.seed')"
              :placeholder="$t('words.insertseed')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.seed')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="walletname"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="walletNameLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.walletname')"
              :placeholder="$t('words.insertwalletname')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.walletname')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-slot="{errors, reset}"
            name="walletkey"
            :rules="{required:true}"
          >
            <v-text-field
              v-model="walletKeyLocal"
              dense
              outlined
              color="primary"
              :label="$t('words.walletkey')"
              :placeholder="$t('words.insertwalletkey')"
              :hide-details="errors.length==0"
              :error-messages="$t('error_messages.' +errors[0], {field:$t('words.walletkey')})"
            >
            </v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
      <!-- Wallet type (toogle button) -->
      <v-row>
        <v-col cols="12">
          <v-switch
            inset
            v-model="replacePublicDidLocal"
            color="primary"
            :label="$t('words.replacePublicDid')"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-switch
            inset
            v-model="autoProvisionLocal"
            color="primary"
            :label="$t('words.autoProvision')"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-switch
            inset
            v-model="autoPingConnectionLocal"
            color="primary"
            :label="$t('words.autoPingConnection')"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-switch
            inset
            v-model="autoVerifyPresentationLocal"
            color="primary"
            :label="$t('words.autoVerifyPresentation')"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-switch
            inset
            v-model="publicInvitesLocal"
            color="primary"
            :label="$t('words.publicInvites')"
          ></v-switch>
        </v-col>
      </v-row>
    </template>
    <template v-if="AgentCustomLocal===false">
      <v-card class="my-10">
        <v-row justify="center" align="center">
          <v-col cols="10" class="mt-6">
            <validation-provider
              v-slot="{errors, reset}"
              name="nameUrl"
              :rules="{required:true}"
            >
              <v-text-field
                v-model="nameAgentLocal"
                dense
                outlined
                color="primary"
                :label="$t('words.name')"
                :placeholder="$t('words.insertName')"
                :hide-details="errors.length==0"
                :error-messages="$t('error_messages.' +errors[0], {field:$t('words.name')})"
              >
              </v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="10" class="mb-6">
            <validation-provider
              v-slot="{errors, reset}"
              name="valueUrl"
              :rules="{required:true}"
            >
              <v-text-field
                v-model="valueUrlLocal"
                dense
                outlined
                color="primary"
                label="Url"
                :placeholder="$t('words.insertUrl')"
                :hide-details="errors.length==0"
                :error-messages="$t('error_messages.' +errors[0], {field:'Url'})"
              >
              </v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-container>
</template>
<script>
import {ValidationProvider} from "vee-validate";

export default {
  data() {
    return {
      AgentCustomLocal: true,
      AgentCustomBackup: this.AgentCustomLocal,
      nameAgentLocal: undefined,
      nameBackup: this.nameAgentLocal,
      listeningMethodLocal: undefined,
      listeningMethodBackup: this.listeningMethodLocal,
      listeningIpLocal: undefined,
      listeningIpBackup: this.listeningIpLocal,
      listeningPortLocal: undefined,
      listeningPortBackup: this.listeningPortLocal,
      outboundTransportLocal: undefined,
      outboundTransportBackup: this.outboundTransportLocal,
      eLocal: undefined,
      eBackup: this.eLocal,
      genesisUrlLocal: undefined,
      genesisUrlbackup: this.genesisUrlLocal,
      AdminListeningIpLocal: undefined,
      AdminListeningIpBackup: this.AdminListeningIpLocal,
      AdminListeningPortLocal: undefined,
      AdminListeningPortBackup: this.AdminListeningPortLocal,
      AdminApiKeyLocal: undefined,
      AdminApiKeyBackup: this.AdminApiKeyLocal,
      labelLocal: undefined,
      labelBackup: this.labelLocal,
      imageUrlLocal: undefined,
      imageUrlBackup: this.imageUrlLocal,
      seedLocal: undefined,
      seedBackup: this.seedLocal,
      walletNameLocal: undefined,
      walletNameBackup: this.walletNameLocal,
      walletKeyLocal: undefined,
      walletKeyBackup: this.walletKeyLocal,
      replacePublicDidLocal: true,
      replacePublicDidBackup: this.replacePublicDidLocal,
      autoProvisionLocal: true,
      autoProvisionBackup: this.autoProvisionLocal,
      autoPingConnectionLocal: true,
      autoPingConnectionBackup: this.autoPingConnectionLocal,
      autoVerifyPresentationLocal: true,
      autoVerifyPresentationBackup: this.autoVerifyPresentationLocal,
      publicInvitesLocal: false,
      publicInvitesBackup: this.publicInvitesLocal,
      nameUrlLocal: undefined,
      nameUrlBackup: this.nameUrlLocal,
      valueUrlLocal: undefined,
      valueUrlBackup: this.valueUrlLocal,
    }
  },
  props: {
    title: {
      type: String, default() {
        return ''
      }
    },
    AgentCustom: {
      type: Boolean, default() {
        return true
      }
    },
    nameAgent: {
      type: String, default() {
        return ''
      }
    },
    listeningMethod: {
      type: String, default() {
        return ''
      }
    },
    listeningIp: {
      type: String, default() {
        return ''
      }
    },
    listeningPort: {
      type: Number, default() {
        return null
      }
    },
    outboundTransport: {
      type: String, default() {
        return ''
      }
    },
    e: {
      type: String, default() {
        return ''
      },
    },
    genesisUrl: {
      type: String, default() {
        return ''
      }
    },
    AdminListeningIp: {
      type: String, default() {
        return ''
      }
    },
    AdminListeningPort: {
      type: Number, default() {
        return null
      }
    },
    AdminApiKey: {
      type: String, default() {
        return ''
      }
    },
    label: {
      type: String, default() {
        return ''
      }
    },
    imageUrl: {
      type: String, default() {
        return ''
      }
    },
    seed: {
      type: String, default() {
        return ''
      }
    },
    walletName: {
      type: String, default() {
        return ''
      }
    },
    walletKey: {
      type: String, default() {
        return ''
      }
    },
    replacePublicDid: {
      type: Boolean, default() {
        return true
      }
    },
    autoProvision: {
      type: Boolean, default() {
        return true
      }
    },
    autoPingConnection: {
      type: Boolean, default() {
        return true
      }
    },
    autoVerifyPresentation: {
      type: Boolean, default() {
        return true
      }
    },
    publicInvites: {
      type: Boolean, default() {
        return false
      }
    },
    nameUrl: {
      type: String, default() {
        return ''
      }
    },
    valueUrl: {
      type: String, default() {
        return ''
      }
    },
  },
  methods: {
    changeView() {
      if (this.AgentCustomLocal == true) {
        return this.$t('words.instanceAgent')
      } else {
        return "Url Agent"
      }
    },
    cancelData() {
      if (this.AgentCustomLocal === true) {
        this.AgentCustomLocal = true
        this.nameAgentLocal = this.nameBackup
        this.listeningMethodLocal = this.listeningMethodBackup
        this.listeningIpLocal = this.listeningIpBackup
        this.listeningPortLocal = this.listeningPortBackup
        this.outboundTransportLocal = this.outboundTransportBackup
        this.eLocal = this.eBackup
        this.genesisUrlLocal = this.genesisUrlbackup
        this.AdminListeningIpLocal = this.AdminListeningIpBackup
        this.AdminListeningPortLocal = this.AdminListeningPortBackup
        this.AdminApiKeyLocal = this.AdminApiKeyBackup
        this.labelLocal = this.labelBackup
        this.imageUrlLocal = this.imageUrlBackup
        this.seedLocal = this.seedBackup
        this.walletNameLocal = this.walletNameBackup
        this.walletKeyLocal = this.walletKeyBackup
        this.replacePublicDidLocal = this.replacePublicDidBackup
        this.autoProvisionLocal = this.autoProvisionBackup
        this.autoPingConnectionLocal = this.autoPingConnectionBackup
        this.autoVerifyPresentationLocal = this.autoVerifyPresentationBackup
        this.publicInvitesLocal = this.publicInvitesBackup
      } else {
        this.nameUrlLocal = this.nameUrl
        this.valueUrlLocal = this.valueUrl
      }
    },
    returnOldData() {
      this.nameAgentLocal = this.nameBackup
      this.AgentCustomLocal = this.AgentCustomBackup
      this.listeningMethodLocal = this.listeningMethodBackup
      this.listeningIpLocal = this.listeningIpBackup
      this.listeningPortLocal = this.listeningPortBackup
      this.outboundTransportLocal = this.outboundTransportBackup
      this.eLocal = this.eBackup
      this.genesisUrlLocal = this.genesisUrlbackup
      this.AdminListeningIpLocal = this.AdminListeningIpBackup
      this.AdminListeningPortLocal = this.AdminListeningPortBackup
      this.AdminApiKeyLocal = this.AdminApiKeyBackup
      this.labelLocal = this.labelBackup
      this.imageUrlLocal = this.imageUrlBackup
      this.seedLocal = this.seedBackup
      this.walletNameLocal = this.walletNameBackup
      this.walletKeyLocal = this.walletKeyBackup
      this.replacePublicDidLocal = this.replacePublicDidBackup
      this.autoProvisionLocal = this.autoProvisionBackup
      this.autoPingConnectionLocal = this.autoPingConnectionBackup
      this.autoVerifyPresentationLocal = this.autoVerifyPresentationBackup
      this.publicInvitesLocal = this.publicInvitesBackup
      this.nameUrlLocal = this.nameUrlBackup
      this.valueUrlLocal = this.valueUrlBackup

    },
  },
  watch: {

    nameAgentLocal() {
      this.$emit('name-agent', this.nameAgentLocal)
    },
    AgentCustomLocal() {
      this.$emit('AgentCustom', this.AgentCustomLocal)
    },
    listeningMethodLocal() {
      this.$emit('listeningMethod', this.listeningMethodLocal)
    },
    listeningIpLocal() {
      this.$emit('listeningIp', this.listeningIpLocal)
    },
    listeningIPortLocal() {
      this.$emit('listeningPort', this.listeningPortLocal)
    },
    outboundTransportLocal() {
      this.$emit('outboundTransport', this.outboundTransportLocal)
    },
    eLocal() {
      this.$emit('e', this.eLocal)
    },
    genesisUrlLocal() {
      this.$emit('genesisUrl', this.genesisUrlLocal)
    },
    AdminListeningIpLocal() {
      this.$emit('AdminListeningIp', this.AdminListeningIpLocal)
    },
    AdminListeningPortLocal() {
      this.$emit('AdminListeningPort', this.AdminListeningPortLocal)
    },
    AdminApiKeyLocal() {
      this.$emit('AdminApiKey', this.AdminApiKeyLocal)
    },
    labelLocal() {
      this.$emit('label', this.labelLocal)
    },
    imageUrlLocal() {
      this.$emit('imageUrl', this.imageUrlLocal)
    },
    seedLocal() {
      this.$emit('seed', this.seedLocal)
    },
    walletNameLocal() {
      this.$emit('walletName', this.walletNameLocal)
    },
    walletKeyLocal() {
      this.$emit('walletKey', this.walletKeyLocal)
    },
    replacePublicDidLocal() {
      this.$emit('replacePublicDid', this.replacePublicDidLocal)
    },
    autoProvisionLocal() {
      this.$emit('autoProvision', this.autoProvisionLocal)
    },
    autoPingConnectionLocal() {
      this.$emit('autoPingConnection', this.autoPingConnectionLocal)
    },
    autoVerifyPresentationLocal() {
      this.$emit('autoVerifyPresentation', this.autoVerifyPresentationLocal)
    },
    publicInvitesLocal() {
      this.$emit('publicInvites', this.publicInvitesLocal)
    },
    nameUrlLocal() {
      this.$emit('nameUrl', this.nameUrlLocal)
    },
    valueUrlLocal() {
      this.$emit('valueUrl', this.valueUrlLocal)
    }
  },
  mounted() {
    this.AgentCustomLocal = this.AgentCustom
    this.AgentCustomBackup = this.AgentCustom
    this.nameBackup = this.nameAgent
    this.nameAgentLocal = this.nameAgent
    this.listeningMethodLocal = this.listeningMethod
    this.listeningMethodBackup = this.listeningMethod
    this.listeningIpLocal = this.listeningIp
    this.listeningIpBackup = this.listeningIp
    this.listeningPortLocal = this.listeningPort
    this.listeningPortBackup = this.listeningPort
    this.outboundTransportLocal = this.outboundTransport
    this.outboundTransportBackup = this.outboundTransport
    this.eLocal = this.e
    this.eBackup = this.e
    this.genesisUrlLocal = this.genesisUrl
    this.genesisUrlbackup = this.genesisUrl
    this.AdminListeningIpLocal = this.AdminListeningIp
    this.AdminListeningIpBackup = this.AdminListeningIp
    this.AdminListeningPortLocal = this.AdminListeningPort
    this.AdminListeningPortBackup = this.AdminListeningPort
    this.AdminApiKeyLocal = this.AdminApiKey
    this.AdminApiKeyBackup = this.AdminApiKey
    this.labelLocal = this.label
    this.labelBackup = this.label
    this.imageUrlLocal = this.imageUrl
    this.imageUrlBackup = this.imageUrl
    this.seedLocal = this.seed
    this.seedBackup = this.seed
    this.walletNameLocal = this.walletName
    this.walletNameBackup = this.walletName
    this.walletKeyLocal = this.walletKey
    this.walletKeyBackup = this.walletKey
    this.replacePublicDidLocal = this.replacePublicDid
    this.replacePublicDidBackup = this.replacePublicDid
    this.autoProvisionLocal = this.autoProvision
    this.autoProvisionBackup = this.autoProvision
    this.autoPingConnectionLocal = this.autoPingConnection
    this.autoPingConnectionBackup = this.autoPingConnection
    this.autoVerifyPresentationLocal = this.autoVerifyPresentation
    this.autoVerifyPresentationBackup = this.autoVerifyPresentation
    this.publicInvitesLocal = this.publicInvites
    this.publicInvitesBackup = this.publicInvites
    this.nameUrlLocal = this.nameUrl
    this.nameUrlBackup = this.nameUrl
    this.valueUrlLocal = this.valueUrl
    this.valueUrlBackup = this.valueUrl
  },
  components: {
    ValidationProvider
  }

}
</script>
