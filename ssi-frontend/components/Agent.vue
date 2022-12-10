<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <dialog-modified
          action-button="Save"
          @closeDialog="cancel()"
          @actionDialog="save()"
          v-if="hide"
        >
          <template v-slot:activator="{on,attrs}">
            <v-card v-on="on" class="card-style mx-3">

              <v-row align="center" justify="center">
                <v-col cols="8" md="8">
                  <v-row align="center" justify="space-around">
                    
                    <v-col cols="8" md="8" align="start">
                      <h2 class="title-h2">{{ nameAgentLocal }}</h2>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" md="4">
                  <v-row justify="center">
                    <v-col class="" align="end">
                      <v-btn
                        class="v-btn-icon mr-3"
                        fab
                        x-small
                        @click.stop="cancelAgent"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-card>
          </template>
          <template v-slot:content>
            <v-row justify="center">
              <v-col cols="10" md="10">
                <formAgent
                  :title="nameAgentLocal"
                  :AgentCustom="AgentCustomLocal"
                  :name-agent="nameAgentLocal"
                  :listening-method="listeningMethodLocal"
                  :listening-ip="listeningIpLocal"
                  :listening-port="listeningPortLocal"
                  :outbound-transport="outboundTransportLocal"
                  :e="eLocal"
                  :genesis-url="genesisUrlLocal"
                  :admin-listening-ip="AdminListeningIpLocal"
                  :admin-listening-port="AdminListeningPortLocal"
                  :admin-api-key="AdminApiKeyLocal"
                  :label="labelLocal"
                  :image-url="imageUrlLocal"
                  :seed="seedLocal"
                  :wallet-name="walletNameLocal"
                  :wallet-key="walletKeyLocal"
                  :replace-public-did="replacePublicDidLocal"
                  :auto-provision="autoProvisionLocal"
                  :auto-ping-connection="autoPingConnectionLocal"
                  :auto-verify-presentation="autoVerifyPresentationLocal"
                  :public-invites="publicInvitesLocal"
                  :name-url="nameUrlLocal"
                  :value-url="valueUrlLocal"
                  @agent-custom="AgentCustomLocal"
                  @name-agent="nameAgentLocal=$event"
                  @listeningMethod="listeningMethodLocal=$event"
                  @listeningIp="listeningIpLocal=$event"
                  @listeningPort="listeningPortLocal=$event"
                  @outbound-transport="outboundTransportLocal=$event"
                  @e="eLocal=$event"
                  @genesis-url="genesisUrlLocal=$event"
                  @admin-listening-ip="AdminListeningIpLocal=$event"
                  @admin-listening-port="AdminListeningPortLocal=$event"
                  @admin-api-key="AdminApiKeyLocal=$event"
                  @label="labelLocal=$event"
                  @image-url="imageUrlLocal=$event"
                  @seed="seedLocal=$event"
                  @wallet-name="walletNameLocal=$event"
                  @wallet-key="walletKeyLocal=$event"
                  @replace-public-did="replacePublicDidLocal=$event"
                  @auto-provision="autoProvisionLocal=$event"
                  @auto-ping-connection="autoPingConnectionLocal=$event"
                  @auto-verify-presentation="autoVerifyPresentationLocal=$event"
                  @public-invites="publicInvitesLocal=$event"
                  @name-url="nameUrlLocal=$event"
                  @value-url="valueUrlLocal=$event"
                  ref="inputDialogData"
                ></formAgent>
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
import formAgent from "@/components/formAgent";

export default {
  data() {
    return {
      hide: true,
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
      valueUrlBackup: this.valueUrlLocal
    }
  },
  methods: {
    cancelAgent() {
      this.hide = false
      this.$emit('cancelAgent', this.index)
    },
    cancel() {
      this.$refs.inputDialogData.returnOldData()

    },
    save() {
      //If url o custom
    },
  },
  props: {
    index: {
      type: Number, default() {
        return 0;
      }
    },
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
        return ''
      }
    },
    outboundTransport: {
      type: String, default() {
        return 0
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
        return 0
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
    }
  },
  watch: {
    nameAgentLocal() {
      this.$emit('name-agent', this.nameAgentLocal)
    },
    AgentCustomLocal() {
      this.$emit('agent-custom', this.AgentCustomLocal)
    },
    listeningMethodLocal() {
      this.$emit('listening-method', this.listeningMethodLocal)
    },
    listeningIpLocal() {
      this.$emit('listening-ip', this.listeningIpLocal)
    },
    listeningIPortLocal() {
      this.$emit('listening-port', this.listeningPortLocal)
    },
    outboundTransportLocal() {
      this.$emit('outbound-transport', this.outboundTransportLocal)
    },
    eLocal() {
      this.$emit('e', this.eLocal)
    },
    genesisUrlLocal() {
      this.$emit('genesis-url', this.genesisUrlLocal)
    },
    AdminListeningIpLocal() {
      this.$emit('AdminListening-ip', this.AdminListeningIpLocal)
    },
    AdminListeningPortLocal() {
      this.$emit('AdminListening-port', this.AdminListeningPortLocal)
    },
    AdminApiKeyLocal() {
      this.$emit('admin-api-key', this.AdminApiKeyLocal)
    },
    labelLocal() {
      this.$emit('label', this.labelLocal)
    },
    imageUrlLocal() {
      this.$emit('image-url', this.imageUrlLocal)
    },
    seedLocal() {
      this.$emit('seed', this.seedLocal)
    },
    walletNameLocal() {
      this.$emit('wallet-name', this.walletNameLocal)
    },
    walletKeyLocal() {
      this.$emit('wallet-key', this.walletKeyLocal)
    },
    replacePublicDidLocal() {
      this.$emit('replace-public-did', this.replacePublicDidLocal)
    },
    autoProvisionLocal() {
      this.$emit('auto-provision', this.autoProvisionLocal)
    },
    autoPingConnectionLocal() {
      this.$emit('auto-ping-connection', this.autoPingConnectionLocal)
    },
    autoVerifyPresentationLocal() {
      this.$emit('auto-verify-presentation', this.autoVerifyPresentationLocal)
    },
    publicInvitesLocal() {
      this.$emit('public-invites', this.publicInvitesLocal)
    },
    nameUrlLocal() {
      this.$emit('name-url', this.nameUrlLocal)
    },
    valueUrlLocal() {
      this.$emit('value-url', this.valueUrlLocal)
    }
  },
  mounted() {
    this.AgentCustomLocal = this.AgentCustom
    this.nameAgentLocal = this.nameAgent
    this.listeningMethodLocal = this.listeningMethod
    this.listeningIpLocal = this.listeningIp
    this.listeningPortLocal = this.listeningPort
    this.outboundTransportLocal = this.outboundTransport
    this.eLocal = this.e
    this.genesisUrlLocal = this.genesisUrl
    this.AdminListeningIpLocal = this.AdminListeningIp
    this.AdminListeningPortLocal = this.AdminListeningPort
    this.AdminApiKeyLocal = this.AdminApiKey
    this.labelLocal = this.label
    this.imageUrlLocal = this.imageUrl
    this.seedLocal = this.seed
    this.walletNameLocal = this.walletName
    this.walletKeyLocal = this.walletKey
    this.replacePublicDidLocal = this.replacePublicDid
    this.autoProvisionLocal = this.autoProvision
    this.autoPingConnectionLocal = this.autoPingConnection
    this.autoVerifyPresentationLocal = this.autoVerifyPresentation
    this.publicInvitesLocal = this.publicInvites
    this.nameUrlLocal = this.nameUrl
    this.valueUrlLocal = this.valueUrl
  },
  components: {
    dialogModified,
    formAgent
  }
}
</script>
