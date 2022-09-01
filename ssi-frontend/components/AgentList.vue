<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="center" class="poolListContainer">
      <v-col class="" cols="12" md="12" lg="12">
        <!--<v-list
          outlined
          color="#3CD4A0"
          class="listPool d-flex flex-column justify-space-around my-5">
          -->
        <v-row v-if="AgentList.length===0" align="center" justify="center">
          <v-col cols="10" align="center">
            <h2 class="title-h2 pa-4">{{ $t('words.noAgent') }}</h2>
          </v-col>
        </v-row>

        <!--<v-list-item
          align="center"
          class="pa-1"

        > -->
        <v-row align="center" justify="center" v-for="(Agent,i) in AgentList" :key="i">
          <v-col cols="12">
            <!--:agent-url="Pool.Agent.AgentUrl"
              :AuthorizationTokenList="Pool.Agent.AuthorizationToken"
               @agent-url="Pool.Agent.AgentUrl=$event"
              @AuthorizationTokenList="Pool.Agent.AuthorizationToken=$event"
              -->
            <agent
              :key="random"
              :index="i"
              :title="Agent.name"
              :agent-custom="Agent.agentCustom"
              :name-agent="Agent.name"
              :listening-method="Agent.data.inboundTransport.listeningMethod"
              :listening-ip="Agent.data.inboundTransport.listeningIp"
              :listening-port="Agent.data.inboundTransport.listeningPort"
              :outbound-transport="Agent.data.outboundTransport"
              :e="Agent.data.e"
              :genesis-url="Agent.data.genesisUrl"
              :admin-listening-ip="Agent.data.admin.listeningIp"
              :admin-listening-port="Agent.data.admin.listeningPort"
              :admin-api-key="Agent.data.adminApiKey"
              :label="Agent.data.label"
              :image-url="Agent.data.imageUrl"
              :seed="Agent.data.seed"
              :wallet-name="Agent.data.walletName"
              :wallet-key="Agent.data.walletKey"
              :replace-public-did="Agent.data.replacePublicDid"
              :auto-provision="Agent.data.autoProvision"
              :auto-ping-connection="Agent.data.autoPingConnection"
              :auto-verify-presentation="Agent.data.autoVerifyPresentation"
              :public-invites="Agent.data.publicInvites"
              :name-url="Agent.url.name"
              :value-url="Agent.url.value"
              @agent-custom="Agent.agentCustom=$event"
              @name-agent="Agent.name=$event"
              @listening-method="Agent.data.inboundTransport.listeningMethod=$event"
              @listening-ip="Agent.data.inboundTransport.listeningIp=$event"
              @listening-port="Agent.data.inboundTransport.listeningPort=$event"
              @outbound-transport="Agent.data.outboundTransport=$event"
              @e="Agent.data.e=$event"
              @genesis-url="Agent.data.genesisUrl=$event"
              @admin-listening-ip="Agent.data.admin.listeningIp=$event"
              @admin-listening-port="Agent.data.admin.listeningPort=$event"
              @admin-api-key="Agent.data.adminApiKey=$event"
              @label="Agent.data.label=$event"
              @image-url="Agent.data.imageUrl=$event"
              @seed="Agent.data.seed=$event"
              @wallet-name="Agent.data.walletName=$event"
              @wallet-key="Agent.data.walletKey=$event"
              @replace-public-did="Agent.data.replacePublicDid=$event"
              @auto-provision="Agent.data.autoProvision=$event"
              @auto-ping-connection="Agent.data.autoPingConnection=$event"
              @auto-verify-presentation="Agent.data.autoVerifyPresentation=$event"
              @public-invites="Agent.data.publicInvites=$event"
              @name-url="Agent.url.name=$event"
              @value-url="Agent.url.value=$event"
              @cancelAgent="cancelAgentItem"
            >
            </agent>
            <!--:key="random"
              :index="i"
              :name-agent="Agent.name"
              :AgentCustom="Agent.agentCustom"
              :agent-json="Agent.data"


              @cancelAgent="cancelAgentItem"
              @name-agent="Agent.name=$event"
              @AgentCustom="Agent.agentCustom=$event"
              @agent-json="Agent.data=$event"-->
          </v-col>
        </v-row>
        <!--</v-list-item>
      </v-list>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Agent from "./Agent";

export default {
  components: {Agent},
  data() {
    return {
      random: 0,
    }
  },
  props: {
    AgentList: {
      type: Array, default() {
        return []
      }
    }
  },
  methods: {
    cancelAgentItem(index) {
      this.AgentList.splice(index, 1)
      this.random = Math.random()
    }
  }
}
</script>
