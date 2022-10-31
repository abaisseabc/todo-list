<template @keydown.esc="closeModal">
  <div class="v-modal-error" ref="v-modal-error">
    <div class="modal-error__content">
      <button 
        @click="closeModal"
        class="modal-error__btn"
      >Закрыть</button>
      <p>{{modal_data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modal_data: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  },
  mounted() {
        let context = this;
        document.addEventListener('click', function(item) {
            if (item.target == context.$refs['v-modal-error']) {
                context.closeModal();
            }
        });
    }
}
</script>

<style>
  
</style>