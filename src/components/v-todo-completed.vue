<template>
  <div class="v-todo-completed">
    <p>{{index}}. {{data_task.post}}</p>
    <p class="date_paragraph">{{data_task.date}}</p>
    <div class="v-todo-completed__btns">
      <vDeleteVue 
        @deletePost="deletePost"
      />
    </div>
  </div>
</template>

<script>
import vDeleteVue from './v-delete-btn.vue';

export default {
  components: {vDeleteVue},
  props: {
    data_task: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    deletePost() {
      this.$emit('deletePost')
    }
  }
}
</script>

<style>

</style>