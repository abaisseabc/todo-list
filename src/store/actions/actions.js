export default {

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
  
}