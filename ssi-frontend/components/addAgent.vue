<template>
  <v-container>
    <dialog-modified
      v-model="dialog"
      action-button="Add"
      @closeDialog="close"
      @actionDialog="Add"
    >
      <template v-slot:activator="{on,attrs}">
        <v-btn v-on="on" v-bind="attrs" class="primary-btn">Add Pool</v-btn>
      </template>
      <template v-slot:content="{dialogModified}">
        <form-agent
          title="Add Agent"
          ref="formData"
          :dialogModified="dialogModified"
        ></form-agent>
      </template>
    </dialog-modified>
  </v-container>
</template>
<script>
import dialogModified from "@/components/DialogModified";
import {ValidationProvider} from "vee-validate";
import formAgent from "@/components/formAgent";

export default {
  data() {
    return {
      addAgent: undefined,
      dialog: false,

    }
  },
  props: {
    AgentList: {
      type: Array, default() {
        return []
      }
    },
  },
  methods: {
    close() {
      //this.customSovrin = true;
      //this.UploadFile = false;
      //this.chosenFile = null;
      //this.data = null;
      this.$refs.formData.cancelData()
      //this.Filetext = null
    },
    Add() {
      let NameNewAgent = this.$refs.formData.nameAgentLocal
      let AgentCustomNew = this.$refs.formData.AgentCustomLocal
      let listeningMethodNew = this.$refs.formData.listeningMethodLocal
      let listeningIpNew = this.$refs.formData.listeningIpLocal
      let listeningPortNew = this.$refs.formData.listeningPortLocal
      let outboundTransportNew = this.$refs.formData.outboundTransportLocal
      let eNew = this.$refs.formData.eLocal
      let genesisUrlNew = this.$refs.formData.genesisUrlLocal
      let AdminListeningIpNew = this.$refs.formData.AdminListeningIpLocal
      let AdminListeningPortNew = this.$refs.formData.AdminListeningPortLocal
      let AdminApiKeyNew = this.$refs.formData.AdminApiKeyLocal
      let labelNew = this.$refs.formData.labelLocal
      let imageUrlNew = this.$refs.formData.imageUrlLocal
      let seedNew = this.$refs.formData.seedLocal
      let walletNameNew = this.$refs.formData.walletNameLocal
      let walletKeyNew = this.$refs.formData.walletKeyLocal
      let replacePublicDidNew = this.$refs.formData.replacePublicDidLocal
      let autoProvisionNew = this.$refs.formData.autoProvisionLocal
      let autoPingConnectionNew = this.$refs.formData.autoPingConnectionLocal
      let autoVerifyPresentationNew = this.$refs.formData.autoVerifyPresentationLocal
      let publicInvitesNew = this.$refs.formData.publicInvitesLocal
      //let AgentUrl = this.$refs.formData.AgentUrlLocal
      //let array = []
      //let count = 0;
      //let obj = ''
      //this.Filetext = this.Filetext.replace(/\n/gm, '').replace(/\\/gm, '')
      //for (let i = 0; i < this.Filetext.length; i++) {
      //  obj = obj + this.Filetext[i]
      //  if (this.Filetext[i] == '{') count++
      //  else {
      //   if (this.Filetext[i] == '}') count--
      // }
      // if (count == 0) {
      //   array.push(JSON.parse(obj))
      //   obj = ''
      // }
      // }

      let object = {
        "name": NameNewAgent,
        "agentCustom": AgentCustomNew,
        "data": {
          "inboundTransport": {
            "listeningMethod": listeningMethodNew,
            "listeningIp": listeningIpNew,
            "listeningPort": listeningPortNew,
          },
          "outboundTransport": outboundTransportNew,
          "e": eNew,
          "genesisUrl": genesisUrlNew,
          "admin": {
            "listeningIp": AdminListeningIpNew,
            "listeningPort": AdminListeningPortNew,
          },
          "adminApiKey": AdminApiKeyNew,
          "label": labelNew,
          "imageUrl": imageUrlNew, // da modificare?
          "seed": seedNew,
          "walletName": walletNameNew,
          "walletKey": walletKeyNew,
          "walletType": "indy",
          "replacePublicDid": replacePublicDidNew,
          "autoProvision": autoProvisionNew,
          "autoPingConnection": autoPingConnectionNew,
          "autoVerifyPresentation": autoVerifyPresentationNew,
          "publicInvites": publicInvitesNew,
        }
      }
      this.AgentList.push(object)
      this.close()
    }
  },


  components: {
    ValidationProvider,
    formAgent,
    dialogModified,
  }
}
</script>

<!--"name": NameNewAgent,
        "genesys_txn": array,
        "Agent": {
          "AgentUrl": AgentUrl
        }-->
