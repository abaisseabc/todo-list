<template>
  <div class="delete">
    <button @click="deletePost">Удалить</button>
  </div>
</template>

<script>
export default {
    methods: {
        deletePost() {
            this.$emit('deletePost')
        },
    }
}
</script>

<style>

</style>