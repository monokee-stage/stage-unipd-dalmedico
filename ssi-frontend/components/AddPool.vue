<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <v-dialog
          v-model="addPool"
          hide-overlay
          width="80%"
        >
          <template v-slot:activator="{on, attrs}">

            <v-btn class="primary-btn" v-on="on" v-bind="attrs">Add Pool</v-btn>
          </template>
          <v-card class="card-style">
            <!-- DA QUI è UN COMPONENTE-->
            <v-row justify="center">
              <v-col cols="10" md="10">
                <input-dialog></input-dialog>
              </v-col>
            </v-row>
            <v-container>

              <v-row justify="center">
                <v-col cols="10" md="10">
                  <v-switch
                    inset
                    color="success"
                    v-model="customSovrin"
                    :label=changeMod()
                  >
                  </v-switch>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10" md="10">
                  <v-card>
                    <v-row justify="center">
                      <v-col cols="10">
                        <v-card-title>Genesis Txn</v-card-title>

                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="11" md="11">
                        <v-switch
                          v-model="UploadFile"
                          color="success"
                          inset
                          :label="$t('words.UploadFile')"
                        ></v-switch>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="11" md="11">
                        <v-file-input
                          v-model="chosenFile"
                          color="#3CD4A0"
                          :label="$t('words.UploadFile')"
                          :placeholder="$t('words.insertFile')"
                          prepend-inner-icon="mdi-cloud-upload"
                          outlined
                          accept=".json, .txt"
                          prepend-icon=""
                          show-size
                          v-if="UploadFile===true"
                          hide-details
                        >
                        </v-file-input>


                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="11" md="11">

                        <v-btn
                          class="primary-btn"
                          v-if="UploadFile===true && chosenFile"
                          @click="showFiles">read file
                        </v-btn>
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
                        >
                        </v-textarea>

                      </v-col>
                    </v-row>

                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <!--  FINO A QUI è UN COMPONENTE FIGLIO DI DIALOG-->
            <v-container class="container-dialog"></v-container>
            <v-row justify="center">
              <v-col class="d-flex justify-sm-end justify-xs-center my-8" cols="10" md="10">
                <v-btn @click="closeDialog" class="secondary-btn mr-3">
                  cancel
                </v-btn>
                <v-btn class="primary-btn">
                  add
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import inputDialog from "./inputDialog";
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  data() {
    return {
      addPool: undefined,
      customSovrin: true,
      UploadFile: false,
      chosenFile: null, // <- initialize the v-model prop
      data: null
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    inputDialog
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
        this.data = "No File Chosen"
      }
      let reader = new FileReader();

      // Use the javascript reader object to load the contents
      // of the file in the v-model prop
      reader.readAsText(this.chosenFile);
      reader.onload = () => {
        this.data = reader.result;

      }
    },
    closeDialog() {
      this.customSovrin = true
      this.UploadFile = false
      this.chosenFile = null
      this.data = null
      this.addPool = false
    },
  },


  // Use the javascript reader object to load the contents
  //of the file in the v-model prop
  //reader.readAsText(this.files);
  //reader.onload = () => {
  //this.data = reader.result;
  //}
  //console.log(this.files)
  //console.log(reader)
  //this.data = JSON.stringify(this.files)
  //reader.readAsText(this.files)
  //reader.onload = () => {
  //this.data = reader.result

  //console.log(this.data)
  //}
  //console.log(this.data)
  //return this.data

  //}
  //}

}
</script>
