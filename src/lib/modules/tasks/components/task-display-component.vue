<i18n>
    {
    "en": {
      "edit": "Edit",
      "delete": "Delete"
    },
    "fr": {
      "edit": "Editer",
      "delete": "Supprimer"
    }
  }
</i18n>
<template>
    <article>
        <div v-show="!editMode">
            <div>
                <h3>{{task.title}}</h3>
                <label>{{task.date}}</label>
            </div>
            <aside> 
                <input type="checkbox" :id="task.id" v-model="task.done" @change="doneStateChanged">
                <div>
                    <button :title="$t('edit')" name="edit" type="button" @click="editTask">
                        <i class="fa fa-edit" />
                    </button>
                    <button :title="$t('delete')" name="delete" type="button" @click="deleteTask">
                        <i class="fa fa-trash-o" />
                    </button>
                </div>
            </aside>
        </div>
        <div v-show="editMode">
            <task-edit-component :editedTitle ="task.name" :editedId="task.id" @closeEdit="closeEdit"/>
        </div>
    </article>
</template>
<script>
export default {
    name: "task-display-component",
    props :{
        task:{
            type : Object,
            default :{
                    id: "id",
                    title: "Task 1",
                    date: "26/10/2018",
                    done: true
                }
            }
        },
        data(){
            return {
                editMode : false
            }
        },
        created() {
            this.$i18n.locale=this.getLanguage;
            },
        computed: {
            getLanguage(){
                return this.$store.getters.getLanguage;
            }
            },
        methods:{
            doneStateChanged(){
                console.log("state changed");
            },
            editTask(){
                this.editMode = true;
                console.log("editing task");
            },
            deleteTask(){
                console.log("delete selected task");
                let url = "https://services.aeris-data.fr/todolist/todo/delete/"
                this.$http.delete(url+this.task.id).then(
                    response =>{
                        console.log("selected task deleted");
                    },
                    error =>{
                        console.log("error while deleting task");
                    }
                )
            },
            closeEdit(){
                this.editMode= false;
            }
        }
    }

</script>
<style scoped>
</style>