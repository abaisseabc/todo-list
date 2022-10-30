<template>
  <div class="v-todo-completed">
    <p>{{data_task.post}}</p>
    <vDeleteVue 
      @deletePost="deletePost"
    />
  </div>
</template>

<script>
import vDeleteVue from './v-delete-btn.vue';

export default {
  components: {vDeleteVue},
  props: {
    data_task: {
      type: Object
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