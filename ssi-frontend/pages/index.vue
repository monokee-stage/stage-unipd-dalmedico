<template>
  <v-container class="index-container" fluid mt-5 style="min-height:50vh">


    <v-card class="card-style mx-5" min-height="70vh">


      <v-row align="center" justify="space-around" class="justify-center">
        <v-col cols="12" md="5" lg="4" align="center">
          <h1 class="title-h1">Pool Configuration</h1>
        </v-col>
        <v-col cols="12" md="5" lg="4" align="center">
          <add-pool-prova></add-pool-prova>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <pool-list></pool-list>
      </v-row>

    </v-card>

  </v-container>
</template>

<script>
import poolList from "~/components/pool-list";
import addPoolProva from "~/components/addPoolProva";

export default {
  layout: 'easySidebar',
  data() {
    return {
      addPool: undefined,
    }
  },
  components: {poolList, addPoolProva}
}
</script>
