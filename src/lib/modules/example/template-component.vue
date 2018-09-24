<template>
   <div aeris-template-component-host="">
      <div aeris-ciblage-css="">
         Test compil et affichage : {{ message }}
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

  created: function() {}
};
</script>
<style>
[aeris-template-component-host] [aeris-ciblage-css] {
  margin: 0 auto;
  max-width: 1000px;
  background-color: honeydew;
}
</style>
