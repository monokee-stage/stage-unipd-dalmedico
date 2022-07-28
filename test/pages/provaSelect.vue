<template>
  <v-select
    v-model="logFilter.type"
    dense
    hide-details
    :items="$t('dashboard.domain_logs.filter.type.array')"
    item-text="code"
    item-value="slug"
  ></v-select>
  <!-- booleani passati sempre con i due punti davanti -->
</template>
<script>
export default {
  name: "provaSelect",
  data() {
    return {
      type: {
        array: [
          {slug: "all", code: "All"},
          {slug: "group", code: "Group"},
          {slug: "access", code: "Access"},
          {slug: "role", code: "Role"},
          {slug: "invitation", code: "Invitation"},
          {slug: "user", code: "User"},
          {slug: "application", code: "Application"},
        ],
      },
    };
  },
};
</script>
