<template>
  <validation-observer v-slot="{ invalid }">
    <v-card tile outlined>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <validation-provider
                v-slot="{ errors }"
                name="username"
                :rules="{
                  required: true,
                }"
              >
                <v-text-field
                  v-model="username"
                  dense
                  outlined
                  label="Username"
                  :hide-details="errors.length == 0"
                  error-messages="errors[0]"
                >
                </v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="12" md="6">
              <validation-provider
                v-slot="{ errors }"
                name="targets"
                :rules="{
                  required: true,
                }"
              >
                <v-select
                  v-model="selectedTargets"
                  multiple
                  outlined
                  :hide-details="errors.length == 0"
                  deletable-chips
                  small-chips
                  dense
                  hide-no-data
                  :items="targets"
                  label="targets"
                  :error-messages="errors[0]"
                >
                </v-select>
              </validation-provider>
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <validation-provider
                v-slot="{ errors }"
                name="password"
                immediate
                :rules="{
                  required: target.enableCalculatedPassword ? false : true,
                  regex: passwordRegex,
                }"
              >
                <v-text-field
                  v-model="target.password"
                  dense
                  placeholder="Calculated"
                  persistent-placeholder
                  clearable
                  outlined
                  :type="target.showPassword ? 'text' : 'password'"
                  :append-icon="target.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  style="margin-top: 26px"
                  label="password"
                  :error-messages="errors[0]"
                  @click:append="target.showPassword = !target.showPassword"
                >
                </v-text-field>
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer/>
            <v-col cols="auto">
              <v-btn :disabled="invalid">Confirm</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </validation-observer>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from "vee-validate";
import {required, regex} from "vee-validate/dist/rules.umd";
// extend("required", {
//   ...required,
//   message: "required",
// });
// extend("regex", {
//   ...regex,
//   message: "password_regex",
// });
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
};
</script>
