<template>
  <v-container>
    <dialog-modified
      v-model="dialog"
      action-button="Add"
      @closeDialog="close"
      @actionDialog="Add"
    >
      <template v-slot:activator="{on,attrs}">
        <v-btn v-on="on" v-bind="attrs" class="primary-btn">Add Pool</v-btn>
      </template>
      <template v-slot:content="{dialogModified}">
        <v-form
          ref="form"
        ></v-form>
        <v-row justify="center">
          <v-col cols="10" md="10" lg="10">
            <input-dialog
              title="Add Pool"
              ref="inputDialogData"
              :dialogModified="dialogModified"
            ></input-dialog>
          </v-col>
        </v-row>
        <v-container>
          <v-row justify="center">
            <v-col cols="10" md="10" align="center">
              <v-btn-toggle
                v-model="customIndex"
                dense
                class="secondary-btn mb-5"
                background="secondary"
                borderless
              >
                <v-btn
                  v-for="(customIndex,i) in customButtons"
                  :key="i"
                  small
                >
                  {{ customIndex }}
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="10" md="10">
              <v-card
                v-if="customIndex==2"
              >
                <v-row justify="center">
                  <v-col cols="10">
                    <v-card-title>Genesis Txn</v-card-title>

                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="11" md="11">
                    <v-switch
                      v-model="UploadFile"
                      color="primary"
                      inset
                      :label="$t('words.UploadFile')"
                      hide-details
                    ></v-switch>
                  </v-col>
                </v-row>
                <v-row justify="center" v-if="UploadFile===true">
                  <v-col cols="11" md="11">
                    <v-file-input
                      v-model="chosenFile"
                      color="primary"
                      :label="$t('words.UploadFile')"
                      :placeholder="$t('words.insertFile')"
                      prepend-inner-icon="mdi-cloud-upload"
                      outlined
                      accept=".json, .txt"
                      prepend-icon=""
                      show-size

                      hide-details
                      @change="showFiles()"
                    >
                    </v-file-input>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="11" md="11">
                    <validation-provider
                      v-slot="{errors}"
                      name="AuthorizationToken"
                      :rules="{required:true}"
                    >
                      <v-textarea
                        v-model="Filetext"
                        label="Genesys Txn"
                        outlined
                        :value="data"
                        auto-grow
                        hide-details
                        color="primary"
                      >
                      </v-textarea>
                    </validation-provider>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </dialog-modified>

  </v-container>
</template>

<script>
import dialogModified from "@/components/DialogModified";
import inputDialog from "@/components/inputDialog";
import PoolList from "@/components/PoolList";
import {ValidationProvider} from "vee-validate";

export default {
  data() {
    return {
      addPool: undefined,
      customSovrin: true,
      UploadFile: false,
      chosenFile: null,
      data: undefined,
      dialog: false,
      Filetext: undefined,
      customIndex: 2,
      customButtons: ['Sovrin', 'mainnet indicio', 'custom']
    }
  },
  components: {
    dialogModified,
    inputDialog,
    ValidationProvider
  },
  props: {
    PoolList: {
      type: Array, default() {
        return []
      }
    }
  },
  methods: {
    changeMod() {
      if (this.customSovrin == true) {
        return this.$t('words.custom')
      } else {
        return "Sovrin"
      }
    },
    showFiles() {
      if (!this.chosenFile) {
        this.data = ""
        this.Filetext = ''
      } else {
        let reader = new FileReader();
        reader.readAsText(this.chosenFile);
        reader.onload = () => {
          this.Filetext = reader.result;
        }
      }
    },
    close() {
      this.customSovrin = true;
      this.UploadFile = false;
      this.chosenFile = null;
      this.data = null;
      this.$refs.inputDialogData.cancelData()
      this.Filetext = null
    },
    Add() {
      let NameNewPool = this.$refs.inputDialogData.namePoolLocal
      let AgentUrl = this.$refs.inputDialogData.AgentUrlLocal
      let AuthorizationToken = this.$refs.inputDialogData.AuthorizationTokenListLocal
      let array = []
      let count = 0;
      let obj = ''
      this.Filetext = this.Filetext.replace(/\n/gm, '').replace(/\\/gm, '')
      for (let i = 0; i < this.Filetext.length; i++) {
        obj = obj + this.Filetext[i]
        if (this.Filetext[i] == '{') count++
        else {
          if (this.Filetext[i] == '}') count--
        }
        if (count == 0) {
          array.push(JSON.parse(obj))
          obj = ''
        }
      }
      let object = {
        "name": NameNewPool,
        "genesys_txn": array,
        "Agent": {
          "AgentUrl": AgentUrl,
          "AuthorizationToken": AuthorizationToken
        }
      }
      this.PoolList.push(object)
      this.close()
    }
  }
}
</script>
