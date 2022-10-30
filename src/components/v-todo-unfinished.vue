<template>
  <div class="todo-unfinished">
    <p>{{data_untask.post}}</p>
    <div class="todo-unfinished__btns">
      <vDoneBtnVue
          @click="completeTask"
      />
      <vDeleteVue
          @deletePost="deletePost"
      />
    </div>
  </div>
</template>

<script>
import vDeleteVue from './v-delete-btn.vue';
import vDoneBtnVue from './v-done-btn.vue';

export default {
    components: {vDeleteVue, vDoneBtnVue},
    props: {
        data_untask: {
            type: Object
        }
    },
    methods: {
        deletePost() {
            this.$emit('deletePost')
        },
        completeTask() {
            this.$emit('completeTask')
        }
    }
}
</script>

<style>

</style>