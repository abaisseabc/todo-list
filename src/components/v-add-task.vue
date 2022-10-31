<template>
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

    <vModalErrorVue 
      v-if="modal"
      :modal_data="modalErrorText"
      @closeModal="closeModal"
    />
</template>

<script>
import { mapActions } from 'vuex'
import vModalErrorVue from './v-modal-error.vue';
export default {
    components: {vModalErrorVue},
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
                    document.body.style.overflow = 'hidden'
                    this.modal = true;

                    if (this.valueInput == '' && this.dateInput == '') {
                        this.modalErrorText = 'Поля были не заполнены или были введены некорректные данные!';
                    } 
                    else if (this.valueInput == '') {
                        this.modalErrorText = 'Поле для ввода задачи не заполнено!';
                    } 
                    else if (this.dateInput == '') {
                        this.modalErrorText = 'Дата не указана!';
                    }
                }
            this.valueInput = '',
            this.dateInput = ''
        },
        closeModal() {
            document.body.style.overflow = 'auto'
            this.modal = false
            this.modalErrorText = ''
        }
    }
}
</script>

<style>

</style>