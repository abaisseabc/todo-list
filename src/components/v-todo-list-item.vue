<template>
  <div class="todo-list-item">
    <p>{{data_post.post}}</p>
    <p class="date_paragraph">{{data_post.date}}</p>
    <div class="todo-list-item__btns">
      <vDeleteVue
          @deletePost="deletePost"
      />
      <vDoneBtnVue
          @completeTask="completeTask"
      />
      <button @click="unfinishedTask">Не выполнено</button>
    </div>
  </div>
</template>

<script>
import vDeleteVue from './v-delete-btn.vue';
import vDoneBtnVue from './v-done-btn.vue';

export default {
    components: {vDeleteVue, vDoneBtnVue},
    props: {
        data_post: {
            type: Object
        }
    },
    methods: {
        deletePost() {
            this.$emit('deletePost')
        },
        completeTask() {
            this.$emit('completeTask')
        },
        unfinishedTask() {
            this.$emit('unfinishedTask')
        }
    }
}
</script>

<style>

</style>