<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <dialog-modified
          action-button="Save"
        >
          <template v-slot:activator="{on,attrs}">

            <v-card v-on="on" class="card-style my-1 mx-3">
              <v-row align="center" justify="center">
                <v-col cols="8" md="8">
                  <v-row align="center" justify="space-around">
                    <v-col cols="3" md="3" class="ml-2">
                      <v-icon class="">mdi-alert-circle</v-icon>
                    </v-col>
                    <v-col cols="8" md="8" align="start">
                      <h2 class="title-h2">{{ namePool }}</h2>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" md="4">
                  <v-row justify="center">
                    <v-col class="" align="end">

                      <v-btn
                        class="v-btn-icon"
                        fab
                        x-small
                        @click.stop="cancelPool()"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </template>
          <template v-slot:content>
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
                        color="primary"
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
                        color="primary"
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
                        background="secondary"
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

                  >

                    <template v-slot:item.AllData="{item}">

                      <v-icon
                        @click="showData(item)"
                      >mdi-eye
                      </v-icon>

                    </template>


                  </v-data-table>
                  <v-dialog
                    v-model="allDatadialog"
                    fullscreen
                  >
                    <v-card>
                      <v-toolbar
                        dark
                        color="primary"
                      >
                        <v-btn
                          icon
                          dark
                          @click="allDatadialog = false"
                        >
                          <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ element.txn.data.data.alias }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                      </v-toolbar>
                      <v-container>
                        <v-list>

                          <v-list-item
                            v-for="(item, i) in button_table"
                            :key="i"
                          >
                            <v-row justify="center">
                              <v-col cols="10" md="10">

                                <v-card class="card-style my-4">
                                  <v-row>
                                    <v-col align="center" cols="4" md="4">
                                      <h3 class="title-h3">{{ item.name }}</h3>
                                    </v-col>
                                    <v-col cols="7" md="7">
                                      <span>{{ SingleData(item) }}</span>
                                    </v-col>
                                  </v-row>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-list-item>
                        </v-list>
                      </v-container>

                    </v-card>
                  </v-dialog>
                  <v-textarea
                    label="Genesys Txn"
                    outlined
                    readonly
                    v-if="switchMod===false"
                    :value="JSON.stringify(poolJson, null, 2)"
                    rows="20"
                  >
                  </v-textarea>
                </v-container>
              </v-col>
            </v-row>
          </template>
        </dialog-modified>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dialogModified from "~/components/DialogModified";
import inputDialog from "~/components/inputDialog";
import cardModified from "@/components/cardModified";

export default {
  data() {
    return {
      search: undefined,
      switchMod: true,
      chooseMod: undefined,
      headerdinamic: [],
      buttonIndex: [],
      table: [],
      allDatadialog: false,
      element: {
        "reqSignature": {},
        "txn": {
          "data": {
            "data": {
              "alias": "",
              "blskey": "",
              "blskey_pop": "",
              "client_ip": "",
              "client_port": null,
              "node_ip": "",
              "node_port": null,
              "services": [
                "VALIDATOR"
              ]
            },
            "dest": ""
          },
          "metadata": {
            "from": ""
          },
          "type": ""
        },
        "txnMetadata": {
          "seqNo": null,
          "txnId": ""
        },
        "ver": ""
      },
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
        },

      ],
    }
  },
  computed: {
    header() {
      let headerSort = this.buttonIndex.sort()
      let arraydinamico = [
        {
          text: 'Alias',
          value: 'txn.data.data.alias',
          weight: 'bold'
        },


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
      arraydinamico.push(
        {
          text: 'All Data',
          value: 'AllData',
          width: '5%',
          align: 'end',
        }
      );
      return arraydinamico
    }
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
    },
    showData(item) {
      this.allDatadialog = true
      this.element = this.poolJson.find(element => element.txn.data.data.alias == item.txn.data.data.alias)
      console.log(this.element)
      return this.element
    },
    SingleData(item) {

      const value = item.value.split('.')
      let result = this.element
      value.forEach((el) => {
        result = result[el]
      })
      return result
    }

  },

  components: {dialogModified, inputDialog, cardModified}
}
</script>
