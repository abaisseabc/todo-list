<template>
  <div class="todo-list-main">
    <div class="add-task">
      <h1>План дел на ближайшее время (Todo List)</h1>
      <div class="add-task__main">
        <p class="add-task__paragraph">Введите задачу:</p>
        <input
            placeholder="Поле для ввода задачи"
            type="text"
            v-model="valueInput"
            @keydown.enter="addPostToTodoList"
            class="add-task__input"
        >
        <p class="add-task__paragraph">Введите дату: </p>
        <input 
          type="date"
          class="add-task__input"
          v-model="dateInput"
          @keydown.enter="addPostToTodoList"
        >
        <button
            class="add-task__btn"
            @click="addPostToTodoList"
        >Добавить</button>
      </div>
    </div>

    <vTodoListVue />
    
    <vModalError 
      v-if="modal"
      :modal_data="modalErrorText"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vTodoListVue from './components/v-todo-list.vue'
import vModalError from './components/v-modal-error.vue'

export default {
  name: 'App',
  components: {vTodoListVue, vModalError},
  data() {
    return {
      valueInput: '',
      dateInput: '',
      modal: false,
      modalErrorText: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_POST_FROM_USER'
    ]),
    addPostToTodoList() {
      if (this.valueInput !== '' && this.dateInput !== '') {
        let date = new Date();
        date = date.toISOString().split('T')[0];

        if (this.dateInput >= date) {
          const objPost = {
            id: Date.now(),
            post: this.valueInput,
            date: this.dateInput
          }

          this.GET_POST_FROM_USER(objPost);
        } else {
          document.body.style.overflow = 'hidden'
          this.modal = true;
          this.modalErrorText = 'Нельзя создавать дела на вчерашний день!'
        }
      } else {
        if (this.valueInput == '' && this.dateInput == '') {
          document.body.style.overflow = 'hidden'
          this.modal = true;
          this.modalErrorText = 'Поля были не заполнены или были введены некорректные данные!';
        } else if (this.valueInput == '') {
          document.body.style.overflow = 'hidden'
          this.modal = true;
          this.modalErrorText = 'Поле для ввода задачи не заполнено!';
        } else if (this.dateInput == '') {
          document.body.style.overflow = 'hidden'
          this.modal = true;
          this.modalErrorText = 'Дата не указана!';
        }
      }
      this.valueInput = '',
      this.dateInput = ''
    },
    closeModal() {
      this.modal = false
      this.modalErrorText = ''
      document.body.style.overflow = 'auto'
    }
  },
}
</script>

<style lang="scss">
</style>
