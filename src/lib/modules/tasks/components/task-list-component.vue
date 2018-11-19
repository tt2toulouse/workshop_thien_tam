<i18n>
{
    "en": {
        "todolist" :"Todo list",
        "add" :"Add"
    },
    "fr": {
        "todolist" :"Liste de tâche",
        "add" :"Ajouter"
    }
  }
</i18n>
<template>
    <section>
        <button v-show="getLanguage ==='fr'" name="lang" title="En / Fr" @click="switchLang('en')">
            EN
        </button>
        <button v-show="getLanguage ==='en'" name="lang" title="En / Fr" @click="switchLang('fr')">
            FR
        </button>

        <h2>
            {{$t('todolist')}}
        </h2>

        <button :title="$t('add')" name="add" @click="addNewTask">
            <i class="fa fa-plus"/>
        </button>

        <section>
            <task-edit-component v-show="showNewTask" @closeEdit="addNewTask"/>
        </section>

        <section>
            <task-display-component v-for="task in tasks" :task="task" :key="task.id"/>
        </section>
    </section>
</template>
<script>
    export default {
        name: "task-list-component",
        props:{

            
        },
        watch : {
            getLanguage(language){
                this.$i18n.locale= language;
            }
        },
        created() {
            this.$i18n.locale=this.getLanguage;
            this.getTasksFromREST()
        },
        computed: {
            getLanguage(){
            return this.$store.getters.getLanguage;
            }
        },
        data(){
            return {
                showNewTask : false,
                tasks : []
            
            }
        },
        methods: {
            switchLang(language){
                this.$store.commit('mutateLanguage', language);
            },
            addNewTask(){
                this.showNewTask = !this.showNewTask;
            },
            getTasksFromREST(){
                let url = "https://services.aeris-data.fr/todolist/todo/all";
                this.$http.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    }
                }).then(
                    response =>{
                        this.tasks = response.data
                    },
                    error =>{
                        console.log("test")
                    }
                )
            }
        }
    };
</script>

<style scoped>
</style>