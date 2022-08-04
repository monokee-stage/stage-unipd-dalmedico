<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="center">
      <v-col class="" cols="12" md="12" lg="12">
        <v-list outlined color="#3CD4A0" class="listPool d-flex flex-column justify-space-around my-5">
          <v-list-item
            align="center"
            class="pa-1"
            v-for="(Pool,i) in PoolList"
            :key="i"
          >
            <v-row align="center" justify="center">
              <v-col cols="12">
                <pool-new
                  :index="i"
                  :name-pool="Pool.name"
                  :pool-json="Pool.genesys_txn"
                  :agent-url="Pool.Agent.AgentUrl"
                  :token="Pool.Agent.AuthorizationToken"
                  @cancelPool="cancelPoolItem"
                  @name-pool="Pool.name=$event"
                  @agent-url="Pool.Agent.AgentUrl=$event"
                >
                </pool-new>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import poolNew from "./poolNew";

export default {
  components: {poolNew},
  data() {
    return {}
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
    }
  }
}
</script>
