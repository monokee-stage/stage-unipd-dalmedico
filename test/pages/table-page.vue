<template>
  <table-search-component :headersC="headers" :arrayC='info'>
  </table-search-component>
</template>

<script>
import tableSearchComponent from '../components/table-search-component.vue';

export default {
  components: {tableSearchComponent},
  data() {
    return {
      headers: [
        // {
        //    text: 'prova table',
        //    filterable: false,
        //    value: 'name',
        // },
        // { text: 'colonna1', value: 'campo1'}, //numer0
        // { text: 'colonna2', value: 'campo2'}, //stringa
        // { text: 'colonna3', value: 'campo3'}, //numero
        // { text: 'colonna4', value: 'campo4'}, //numero
        {text: 'nameProva', value: 'name'},
        {text: 'urlProva', value: 'url'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      arrayProva: [
        {
          name: 'italia',
          campo1: 1,
          campo2: 'ciao',
          campo3: 25,
          campo4: 5.55,
        },
        {
          name: 'spagna',
          campo1: 2,
          campo2: 'hola',
          campo3: 71,
          campo4: 34.1,
        },
        {
          name: 'inghilterra',
          campo1: 3,
          campo2: 'Hello',
          campo3: 45,
          campo4: 5.55,
        },
        {
          name: 'francia',
          campo1: 4,
          campo2: 'bonjour',
          campo3: 45,
          campo4: 34.1,
        },
        {
          name: 'romania',
          campo1: 5,
          campo2: 'Buna ziua',
          campo3: 25,
          campo4: 89.2,
        },
        {
          name: 'repubblica ceca',
          campo1: 6,
          campo2: 'Ahoj',
          campo3: 83,
          campo4: 45,
        },
        {
          name: 'danimarca',
          campo1: 7,
          campo2: 'Hej',
          campo3: 5.55,
          campo4: 83
        },
      ],
      info: [],


    };
  },
  mounted() {
    this.AxiosProva();
  },
  methods: {
    async AxiosProva() {
      // this.$
      const response = await this.$axios.get("https://pokeapi.co/api/v2/pokemon");
      // const response = await this.$axios.post('https://www.monokee.com/api/authenticate_email',{"email":"sara.meneghetti@athesys.it","mobile":false}, 'Content-Type:application/json');


      //post(url,body,config)
      // body: dati di accesso, informazioni che mandi all' api
      // config:  Content-Type: application/json , api-key
      console.log(this.response);
      this.info = response.data.results;
      //
    }
  }
}
</script>
