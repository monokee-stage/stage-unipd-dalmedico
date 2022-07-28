<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="11">
        <v-dialog>
          <template v-slot:activator="{on,attrs}">

            <v-card class="card-style px-3 my-1 mx-3" m-2 v-bind="attrs">
              <v-row align="center" justify="space-around">
                <v-col cols="6" md="4">
                  <v-row align="center" justify="space-around">


                    <v-col cols="3" md="3">
                      <v-icon class="">mdi-alert-circle</v-icon>
                    </v-col>
                    <v-col cols="8" md="8">
                      <h2 class="title-h2">{{ namePool }}</h2>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" md="4">
                  <v-row justify="center">

                    <v-col class="" cols="3" align="end">

                      <v-btn
                        class="v-btn-icon"
                        fab
                        x-small
                        v-on="on"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col class="" cols="3" align="start">

                      <v-btn
                        class="v-btn-icon"
                        fab
                        x-small
                        @click="cancelPool"

                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>

          </template>

          <v-card>
            <v-container>
              <ValidationObserver v-slot="{invalid}">


                <v-row justify="center">
                  <v-col cols="10" md="10">
                    <input-dialog
                      :name-pool="namePool"
                      :title="namePool"
                    ></input-dialog>
                    <v-container class="container-dialog" outlined>
                      <v-row align="center" justify="space-between">
                        <v-col cols="3">
                          <h2 class="title-h2">Genesis Txn</h2>

                        </v-col>
                        <v-col cols="4">
                          <v-switch
                            v-model="switchMod"
                            color="success"
                            inset
                            :label=changeMod()
                          ></v-switch>
                        </v-col>
                        <v-col>
                          <v-text-field
                            v-model="search"
                            prepend-inner-icon="mdi-magnify"
                            :label="$t('words.search')"
                            outlined
                            hide-details
                            dense
                            v-if="switchMod===true"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" md="12" align="center">
                          <v-btn-toggle
                            v-model="buttonIndex"
                            dense
                            multiple
                            class="secondary-btn mb-5 "
                            background-color="#3CD4A0"
                            v-if="switchMod===true"
                            borderless
                          >
                            <v-btn
                              v-for="(buttonTable,i) in button_table"

                              :key="i"
                              small>
                              {{ buttonTable.name }}
                            </v-btn>
                          </v-btn-toggle>

                        </v-col>
                      </v-row>
                      <v-data-table
                        :search="search"
                        :headers="header"
                        :items="poolJson"
                        v-if="switchMod===true && header.length>0"
                      ></v-data-table>
                      <v-textarea
                        label="Genesys Txn"
                        outlined
                        readonly
                        v-if="switchMod===false"
                        :value="JSON.stringify(poolJson, null, 2)"
                        rows="20"
                      >
                      </v-textarea>
                      <v-row justify="end">
                        <v-col align="end" cols="4" md="6" class="my-8">
                          <v-btn class="secondary-btn mr-3">
                            cancel
                          </v-btn>
                          <v-btn class="primary-btn">
                            save
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>

              </ValidationObserver>
            </v-container>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import dialogModified from "@/components/DialogModified";
import inputDialog from "./inputDialog";
import {ValidationObserver, ValidationProvider} from "vee-validate";


export default {

  data() {
    return {
      dialog: false,

      search: undefined,
      switchMod: true,
      chooseMod: undefined,
      headerdinamic: [],
      buttonIndex: [],
      table: [],
      button_table: [
        {
          'key': '0',
          'name': 'client_ip',
          'value': 'txn.data.data.client_ip',
        },
        {
          'key': '1',
          'name': 'client_port',
          'value': 'txn.data.data.client_port',
        },
        {
          'key': '2',
          'name': 'node_ip',
          'value': 'txn.data.data.node_ip'
        },
        {
          'key': '3',
          'name': 'node_port',
          'value': 'txn.data.data.node_port'
        },
        {
          'key': '4',
          'name': 'DID',
          'value': 'txn.metadata.from'
        }, {
          'key': '5',
          'name': 'dest',
          'value': 'txn.data.dest'
        }, {
          'key': '6',
          'name': 'seq.No',
          'value': 'txnMetadata.seqNo'
        }, {
          'key': '7',
          'name': 'TxnId',
          'value': 'txnMetadata.txnId'
        }, {
          'key': '8',
          'name': 'ver',
          'value': 'ver'
        }, {
          'key': '9',
          'name': 'type',
          'value': 'txn.type'
        }
      ],
    }
  },

  computed: {
    //SortArray() {
    //return this.button_table.sort()

    //},

    header() {
      let headerSort = this.buttonIndex.sort()
      let arraydinamico = [
        {
          text: 'Alias',
          value: 'txn.data.data.alias',
          weight: 'bold'
        }
      ]
      for (let i = 0; i < headerSort.length; i++) {
        const element = this.button_table.find(element => element.key == headerSort[i])
        arraydinamico.push(
          {
            text: element.name,
            value: element.value,
            align: 'start',
            sortable: false,
            weight: "bold"
          }
        )
      }
      return arraydinamico
      //let headersSort = JSON.parse(localStorage.getItem('value'))
//      if (!headersSort) {
      //      this.headerdinamic = this.button_table.value
      //  } else {
      //  this.headerdinamic = headersSort
      //}
    },
    //fare direttamnete computed per le colonne
    // che a partire dal button_table
    // prima le riordina e poi fa l' oggetto per le colonne
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    inputDialog,
    dialogModified
  },
  props: {
    alias: String,
    namePool: String,
    poolJson: {
      type: Array, default() {
        return [];
      }
    },
  },
  methods: {

    changeMod() {
      if (this.switchMod == true) {
        return this.$t('words.table')
      } else {
        return "Json"
      }
    },

    cancelPool() {
      alert('cancellata Pool')
    }

  },
}
</script>
