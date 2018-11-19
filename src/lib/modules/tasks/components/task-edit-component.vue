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
    editedId:{
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
    this.$i18n.locale=this.getLanguage;
  },
  computed: {
    getLanguage(){
      return this.$store.getters.getLanguage;
    }
  },
  methods: {
    save() {
      this.$validator.validate().then(result =>{
        if(result){
          if(this.editedId){
        console.log("save edit task");
      let url = "https://services.aeris-data.fr/todolist/todo/save";
      this.$http.post(url, {title: this.title}).then(
        response =>{
          console.log("task saved");
        },
        error =>{
          console.log("error while saving task to database");
        }
      )
      }
      else{
      let url = "https://services.aeris-data.fr/todolist/todo/edit/";
      this.$http.put(url+ this.editedId,{title: this.title}).then(
        response =>{
          console.log("task title modified");
        },
        error =>{
          console.log("error while editing");
        }
        )
      }    
    }
  }
)    
},
    cancel() {
      console.log("jean-jacques !");
      this.$emit("closeEdit");
    }
  }
};
</script>
<style>
.hasError {
  color: red;
}
</style>
