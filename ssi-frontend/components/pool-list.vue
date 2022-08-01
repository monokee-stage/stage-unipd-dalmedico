<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="center">
      <v-col class="" cols="12" md="7" lg="5">

        <v-list outlined color="#3CD4A0" class="listPool d-flex flex-column justify-space-around my-5">


          <!--v list-group for(item,i) in items -->
          <v-list-item
            align="center"
            class="pa-1"
            v-for="(Pool,i) in PoolList"
            :key="i"
          >
            <v-row align="center" justify="center">
              <v-col cols="12">
                <!--
                <pool
                  :namePool="Pool.name"
                  :pool-json="Pool.genesys_txn"
                ></pool>
                -->
                <pool-new
                  :index="i"
                  :name-pool="Pool.name"
                  :pool-json="Pool.genesys_txn"
                  @cancelPool="cancelPoolItem"
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
//import pool from './pool'
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

<style>

</style>
