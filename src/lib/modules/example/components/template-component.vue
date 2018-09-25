<template>
   <div aeris-template-component-host="">
      <div aeris-ciblage-css="">
         <ul>
            <li> compil et affichage : {{ message }}</li>
            <li> Test store : {{ storeMessage }}</li>
         </ul>
      </div>
   </div>
</template>
<script>
export default {
  name: "template-component",

  props: {
    message: {
      type: String,
      default: "Je ne veux pas ce message"
    }
  },

  data() {
    return {};
  },

  watch: {
    message(value) {
      this.message = value;
    }
  },

  computed: {
    storeMessage() {
      return this.$store.getters.getMessage;
    }
  },

  created: function() {
    // to catch in the console in order to debug
    console.log("template component created");
  }
};
</script>
<style>
[aeris-template-component-host] [aeris-ciblage-css] {
  margin: 0 auto;
  max-width: 1000px;
  background-color: honeydew;
}
</style>
