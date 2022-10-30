<template>
  <div class="done">
    <button @click="completeTask">Выполнено</button>
  </div>
</template>

<script>
export default {
    methods: {
        completeTask() {
            this.$emit('completeTask')
        },
    }
}
</script>

<style>

</style>