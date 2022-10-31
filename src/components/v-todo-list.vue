<template>
  <div class="todo-list">
    <div 
        class="todo-list__empty" 
        v-if="POSTS.length === 0"
    >
      <p>Ваш список задач пуст</p>
    </div>

    <vTodoListItemVue 
        class="todo-list__normal"
        v-for="post in POSTS"
        :key="post.id"
        :data_post="post"
        @deletePost="deletePost(post)"
        @completeTask="completeTask(post)"
        @unfinishedTask="unfinishedTask(post)"
    />

    <div class="todo-list__compeleted-tasks" v-if="COMPLETED_TASKS.length > 0">
        <h1>Выполенные задачи: {{COMPLETED_TASKS.length}}</h1>
        <vTodoCompletedVue 
            v-for="task in COMPLETED_TASKS"
            :key="task.id"
            :data_task="task"
            @deletePost="deleteTask(task)"
        />
    </div>

    <div class="todo-list__unfinished-tasks" v-if="UNFINISHED_TASKS.length > 0">
        <h1>Не выполненные задачи: {{UNFINISHED_TASKS.length}}</h1>
        <vTodoUnfinishedVue 
            v-for="unTask in UNFINISHED_TASKS"
            :key="unTask.id"
            :data_untask="unTask"
            @deletePost="deleteUntask(unTask)"
            @completeTask="completeTask(unTask)"
        />
    </div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vTodoListItemVue from './v-todo-list-item.vue';
import vTodoCompletedVue from './v-todo-completed.vue';
import vTodoUnfinishedVue from './v-todo-unfinished.vue';

export default {
    components: {vTodoListItemVue, vTodoCompletedVue, vTodoUnfinishedVue},
    data() {
        return {
            empty: true
        }
    },
    computed: {
        ...mapGetters([
            'POSTS',
            'COMPLETED_TASKS',
            'UNFINISHED_TASKS'
        ]),
    },
    methods: {
        ...mapActions([
            'DELETE_POST',
            'COMPLETE_TASKS',
            'ADD_UNFINISHED_TASKS',
            'DELETE_TASK',
            'DELETE_UNTASK'
        ]),
        deletePost(post) {
           this.DELETE_POST(post);
        },
        unfinishedTask(unTask) {
            this.ADD_UNFINISHED_TASKS(unTask);
        },
        deleteTask(task) {
            this.DELETE_TASK(task);
        },
        deleteUntask(unTask) {
            this.DELETE_UNTASK(unTask);
        },
        completeTask(task) {
            this.COMPLETE_TASKS(task);
        },
    },
}
</script>

<style>

</style>