<i18n>
  {
    "en": {
      "save": "Save",
      "cancel": "Cancel",
      "task_title": "Task Title"
    },
    "fr": {
      "save": "Enregistrer",
      "cancel": "Annuler",
      "task_title": "Titre de la tâche"
    }
  }
</i18n>  
<template>
  <div>
    <input v-validate="'required|max:10'" :class="{hasError:errors.has('inputTitle')} " v-model="title" type="text" name="inputTitle" :placeHolder="$t('task_title')">
    <span>{{ errors.first('inputTitle')}}</span>
    <div>
      <button type="button" name="save" @click="save" :title="$t('save')">
        <i class="fa fa-save"/>
      </button>
     <button type="button" name="cancel" @click="cancel" :title="$t('cancel')">
        <i class="fa fa-times"/>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "task-edit-component",
  props :{
    editedTitle:{
      type: String,
      default: ""
    },
    editediD:{
      type: String,
      default: ""
    }
  },
  watch :{
    editedTitle(value){
      this.title = value;
    }
  },
  data() {
    return {
      title: "Task 1"
    };
  },
  created() {
    this.$i18n.locale=this.getLanguage
  },
  computed: {
    getLanguage(){
      return this.$store.getters.getLanguage;
    }
  },
  methods: {
    save() {
      console.log("saving !");
    },
    cancel() {
      console.log("jean-jacques !");
    }
  }
};
</script>
<style>
.hasError {
  color: red;
}
</style>
