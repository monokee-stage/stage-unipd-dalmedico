<template>
  <v-container class="index-container" fluid mt-5 style="min-height:50vh">
    <v-card class="card-style mx-5" min-height="70vh">
      <v-row align="center" justify="space-around" class="justify-center">
        <v-col cols="12" md="5" lg="4" align="center">
          <h1 class="title-h1">Agent Administration</h1>
        </v-col>
        <v-col cols="12" md="5" lg="4" align="center">
          <add-agent
            :AgentList="AgentList"
          ></add-agent>
        </v-col>
      </v-row>
      <v-row class="mt-5" justify="center">
        <v-col cols="8">
          <agent-list
            :AgentList="AgentList"
          ></agent-list>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import AgentList from "~/components/AgentList";
import addAgent from "~/components/addAgent";

export default {
  layout: 'easySidebar',
  data() {
    return {
      addAgent: undefined,
      AgentList: [
        {
          name: "Agent1",
          agentCustom: true,
          data: {
            "inboundTransport": {
              "listeningMethod": "http",
              "listeningIp": "0.0.0.0 ",
              "listeningPort": 8103,
            },
            "outboundTransport": "http",
            "e": "http://mkagent.test.ssi.monokee.com:8103",
            "genesisUrl": "http://pool.test.indy.monokee.com:9000/genesis",
            "admin": {
              "listeningIp": "0.0.0.0",
              "listeningPort": 8105,
            },
            "adminApiKey": "F9KxjsYGtm7kcqgfwpbf",
            "label": "MK Agent (role: Endorser) - DID: D198m2bpgz2Dr4sB8GXA4c",
            "imageUrl": "https://monokee.com/wp-content/uploads/2021/10/monkee-logo-sito.png", // da modificare?
            "seed": "Endorser_MonoKee_Agent_jnudxxtlu",
            "walletName": "Endorser_MonoKee_Agent_Wallet",
            "walletKey": "monokee_agent_wallet_key_secret_password",
            "walletType": "indy",
            "replacePublicDid": true,
            "autoProvision": true,
            "autoPingConnection": true,
            "autoVerifyPresentation": true,
            "publicInvites": false,
          },
          url: {
            "name": "",
            "value": ""
          }
        },
        {
          name: "Agent2",
          agentCustom: true,
          data: {
            "inboundTransport": {
              "listeningMethod": "http",
              "listeningIp": "0.0.0.0 ",
              "listeningPort": 8103,
            },
            "outboundTransport": "http",
            "e": "http://mkagent.test.ssi.monokee.com:8103",
            "genesisUrl": "http://pool.test.indy.monokee.com:9000/genesis",
            "admin": {
              "listeningIp": "0.0.0.0",
              "listeningPort": 8105,
            },
            "adminApiKey": "F9KxjsYGtm7kcqgfwpbf",
            "label": "MK Agent (role: Endorser) - DID: D198m2bpgz2Dr4sB8GXA4c",
            "imageUrl": "https://monokee.com/wp-content/uploads/2021/10/monkee-logo-sito.png", // da modificare?
            "seed": "Endorser_MonoKee_Agent_jnudxxtlu",
            "walletName": "Endorser_MonoKee_Agent_Wallet",
            "walletKey": "monokee_agent_wallet_key_secret_password",
            "walletType": "indy",
            "replacePublicDid": true,
            "autoProvision": true,
            "autoPingConnection": true,
            "autoVerifyPresentation": true,
            "publicInvites": false,
          },
          url: {
            "name": "",
            "value": ""
          }
        },
        {
          name: "Agent3",
          agentCustom: false,
          data: {
            "inboundTransport": {
              "listeningMethod": "",
              "listeningIp": "",
              "listeningPort": null,
            },
            "outboundTransport": "",
            "e": "",
            "genesisUrl": "",
            "admin": {
              "listeningIp": "",
              "listeningPort": null,
            },
            "adminApiKey": "",
            "label": "",
            "imageUrl": "", // da modificare?
            "seed": "",
            "walletName": "",
            "walletKey": "",
            "walletType": "",
            "replacePublicDid": false,
            "autoProvision": false,
            "autoPingConnection": false,
            "autoVerifyPresentation": false,
            "publicInvites": false,
          },
          url: {
            "name": "Agent3",
            "value": "http://pool.test.indy.monokee.com:9000/genesis"
          }
        }
      ]
    }
  },
  components: {
    AgentList,
    addAgent
  }
}
</script>
