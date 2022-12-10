<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="center" class="poolListContainer">
      <v-col class="" cols="12" md="12" lg="12">
        <!--<v-list
          outlined
          color="#3CD4A0"
          class="listPool d-flex flex-column justify-space-around my-5">
          -->
        <v-row v-if="PoolList.length===0" align="center" justify="center">
          <v-col cols="10" align="center">
            <h2 class="title-h2 pa-4">{{ $t('words.noCard') }}</h2>
          </v-col>
        </v-row>

        <!--<v-list-item
          align="center"
          class="pa-1"

        > -->
        <v-row align="center" justify="center" v-for="(Pool,i) in PoolList" :key="i">
          <v-col cols="12">
            <pool
              :key="random"
              :index="i"
              :name-pool="Pool.name"
              :pool-json="Pool.genesys_txn"
              :agent-url="Pool.Agent.AgentUrl"
              :AuthorizationTokenList="Pool.Agent.AuthorizationToken"
              @cancelPool="cancelPoolItem"
              @name-pool="Pool.name=$event"
              @agent-url="Pool.Agent.AgentUrl=$event"
              @AuthorizationTokenList="Pool.Agent.AuthorizationToken=$event"
            >

            </pool>
          </v-col>
        </v-row>
        <!--</v-list-item>
      </v-list>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pool from "~/components/Pool";

export default {
  components: {pool},
  data() {
    return {
      random: 0,
      pool: undefined
    }
  },
  props: {
    PoolList: {
      type: Array, default() {
        return []
      }
    }
  },
  methods: {
    cancelPoolItem(index) {
      this.PoolList.splice(index, 1)
      this.random = Math.random()
    }
  }
}
</script>
