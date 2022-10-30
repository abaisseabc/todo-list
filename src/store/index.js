import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    completed_tasks: [],
    unfinished_tasks: []
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    COMPLETED_TASKS(state) {
      return state.completed_tasks;
    },
    UNFINISHED_TASKS(state) {
      return state.unfinished_tasks;
    }
  },
  mutations: {
    PUSH_POST_TO_ARRAY_POSTS: (state, post) => {
      state.posts.push(post);
    },
    DELETE_POST_FROM_ARRAY_POSTS: (state, post) => {
      let filterPosts = state.posts.filter(item => {return item.id != post.id});
      state.posts = filterPosts;
    },
    ADD_COMPLETE_TASKS_TO_ARRAY_COMPLETED_TASKS: (state, task) => {
      let filterPosts = state.posts.filter(item => {return item.id != task.id});
      state.posts = filterPosts;

      state.completed_tasks.push(task);

      let filteredUnfinishedTasks = state.unfinished_tasks.filter(item => {return item.id != task.id});
      state.unfinished_tasks = filteredUnfinishedTasks;
    },
    ADD_UNFINISHED_TASK_TO_ARRAY_UNFINISHED_TASKS: (state, unTask) => {
      let filterPosts = state.posts.filter(item => {return item.id != unTask.id});
      state.posts = filterPosts;
      state.unfinished_tasks.push(unTask);
    },
    DELETE_TASK_IN_ARRAY_COMPLETED_TASKS: (state, task) => {
      let filterPosts = state.completed_tasks.filter(item => {return item.id != task.id});
      state.completed_tasks = filterPosts;
    },
    DELETE_UNTASK_IN_ARRAY_UNFINISHED_TASKS: (state, unTask) => {
      let filterPosts = state.unfinished_tasks.filter(item => {return item.id != unTask.id});
      state.unfinished_tasks = filterPosts;
    }
  },
  actions: {
    GET_POST_FROM_USER({commit}, post) {
      commit('PUSH_POST_TO_ARRAY_POSTS', post);
    },
    DELETE_POST({commit}, post) {
      commit('DELETE_POST_FROM_ARRAY_POSTS', post);
    },
    COMPLETE_TASKS({commit}, task) {
      commit('ADD_COMPLETE_TASKS_TO_ARRAY_COMPLETED_TASKS', task);
    },
    ADD_UNFINISHED_TASKS({commit}, unTask) {
      commit('ADD_UNFINISHED_TASK_TO_ARRAY_UNFINISHED_TASKS', unTask);
    },
    DELETE_TASK({commit}, task) {
      commit('DELETE_TASK_IN_ARRAY_COMPLETED_TASKS', task);
    },
    DELETE_UNTASK({commit}, unTask) {
      commit('DELETE_UNTASK_IN_ARRAY_UNFINISHED_TASKS', unTask);
    }
  },
})
