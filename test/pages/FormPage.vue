<template>
  <!-- form-component -->
  <FormComponent @random="getRandom($event)" link='/'/>
</template>

<script>
import FormComponent from '../components/formComponent'

export default {
  name: 'FormPage',

  components: {
    FormComponent
  },
  methods: {
    getRandom(prova) {
      alert(Math.random() * 100)
      console.log(prova)
    }
  },
}
</script>
