<template>
  <v-container>
    <v-row justify='center' align='center'>
      <v-col cols='12' md='9'>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="search"
          outlined
          hide-details
        >
        </v-text-field>
      </v-col>
      <v-col cols='12' md='9'>
        <v-data-table
          :headers='headersC'
          :items='arrayC'
          :search='searchC'
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="axiosCall()"
            >
              mdi-eye
            </v-icon>
          </template>
          <!-- se inserivo :search='search (del text-field non serviva nemmeno il watch) -->
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchC: '',
    };
  },
  props: {
    headersC: {
      type: Array, default() {
        return []
      }
    }, //modo corretto
    arrayC: {
      type: Array, default() {
        return []
      }
    },

  },
  watch: {
    search(newVal, oldVal) {
      this.getSearchC(newVal)
    }
  },
  methods: {
    getSearchC(newSearch) {
      this.searchC = newSearch
    },
    async axiosCall() {
      const response = await this.$axios.get("https://pokeapi.co/api/v2/pokemon");

      alert("messaggio axios:" + response.data.results);
    }
  }
};
</script>
