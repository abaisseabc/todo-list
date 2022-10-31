export default {

    PUSH_POST_TO_ARRAY_POSTS: (state, post) => {
        state.posts.push(post);
        window.localStorage.setItem('post', JSON.stringify(state.posts));
    },

    DELETE_POST_FROM_ARRAY_POSTS: (state, post) => {
      let filterPosts = state.posts.filter(item => {return item.id != post.id});
      state.posts = filterPosts;
  
      window.localStorage.setItem('post', JSON.stringify(state.posts));
    },

    ADD_COMPLETE_TASKS_TO_ARRAY_COMPLETED_TASKS: (state, task) => {
      let filterPosts = state.posts.filter(item => {return item.id != task.id});
      state.posts = filterPosts;
      window.localStorage.setItem('post', JSON.stringify(state.posts));
  
      state.completed_tasks.push(task);
      window.localStorage.setItem('task', JSON.stringify(state.completed_tasks));
  
      let filteredUnfinishedTasks = state.unfinished_tasks.filter(item => {return item.id != task.id});
      state.unfinished_tasks = filteredUnfinishedTasks;
      window.localStorage.setItem('untask', JSON.stringify(state.unfinished_tasks));
    },

    ADD_UNFINISHED_TASK_TO_ARRAY_UNFINISHED_TASKS: (state, unTask) => {
      let filterPosts = state.posts.filter(item => {return item.id != unTask.id});
      state.posts = filterPosts;
      window.localStorage.setItem('post', JSON.stringify(state.posts));
  
      state.unfinished_tasks.push(unTask);
      window.localStorage.setItem('untask', JSON.stringify(state.unfinished_tasks));
    },

    DELETE_TASK_IN_ARRAY_COMPLETED_TASKS: (state, task) => {
      let filterPosts = state.completed_tasks.filter(item => {return item.id != task.id});
      state.completed_tasks = filterPosts;
      window.localStorage.setItem('task', JSON.stringify(state.completed_tasks));
    },
      
    DELETE_UNTASK_IN_ARRAY_UNFINISHED_TASKS: (state, unTask) => {
      let filterPosts = state.unfinished_tasks.filter(item => {return item.id != unTask.id});
      state.unfinished_tasks = filterPosts;
      window.localStorage.setItem('untask', JSON.stringify(state.unfinished_tasks));
    }
    
}