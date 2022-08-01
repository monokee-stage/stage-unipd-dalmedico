<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="10" lg="10">
        <dialog-modified
          v-model="dialog"
          action-button="Add"
          @closeDialog="close"
          @actionDialog="Add"
        >
          <template v-slot:activator="{on,attrs}">
            <v-btn v-on="on" v-bind="attrs" class="primary-btn">Add Pool</v-btn>
          </template>
          <template v-slot:content="{dialogModified}"> <!--emptyForm,-->
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
                <!--:emptyForm="emptyForm"-->
              </v-col>
            </v-row>
            <v-container>
              <v-row justify="center">
                <v-col cols="10" md="10">
                  <v-switch
                    inset
                    color="primary"
                    v-model="customSovrin"
                    :label=changeMod()
                  >
                  </v-switch>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10" md="10">
                  <v-card
                    v-if="customSovrin==true"
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
                        ></v-switch>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
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
                          v-if="UploadFile===true"
                          hide-details
                          @change="showFiles()"
                        >
                        </v-file-input>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="11" md="11">
                        <v-textarea

                          label="Genesys Txn"
                          outlined
                          :value="data"
                          auto-grow
                          hide-details
                          color="primary"
                        >
                        </v-textarea>

                      </v-col>
                    </v-row>

                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </dialog-modified>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dialogModified from "@/components/DialogModified";
import inputDialog from "@/components/inputDialog";
import PoolList from "@/components/pool-list";

export default {
  data() {
    return {
      addPool: undefined,
      customSovrin: true,
      UploadFile: false,
      chosenFile: null, // <- initialize the v-model prop
      data: undefined,
      dialog: false,
    }
  },
  components: {
    dialogModified,
    inputDialog,
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
      } else {

        let reader = new FileReader();

        // Use the javascript reader object to load the contents
        // of the file in the v-model prop
        reader.readAsText(this.chosenFile);
        reader.onload = () => {
          this.data = reader.result;
        }
      }
    },
    close() {
      this.customSovrin = true;
      this.UploadFile = false;
      this.chosenFile = null;
      this.data = null;
      this.$refs.inputDialogData.cancelData()
    },
    Add() {
      alert('Add di AddPool')
      let NameNewPool = this.$refs.inputDialogData.namePool

      let GenesysPoolNew = this.chosenFile
      //this.$store.getters.PoolList.push({name: this.this.$refs.inputDialogData.namePool, genesys_txn: [GenesysPoolNew]})
      //this.PoolList.push({name:NameNewPool,genesys_txn: {this.chosenFile}})
      this.PoolList.push({name: NameNewPool, genesys_txn: [GenesysPoolNew]})
      //quando ci sara i ldatabase bastera fare il post con il push???

    }

  }

}
</script>
