import { createStore } from 'vuex'
import getters from './getters/getters'
import actions from './actions/actions'
import mutations from './mutations/mutations'

let post = window.localStorage.getItem('post');
let task = window.localStorage.getItem('task');
let untask = window.localStorage.getItem('untask')

export default createStore({
  state: {
    posts: post ? JSON.parse(post) : [],
    completed_tasks: task ? JSON.parse(task) : [],
    unfinished_tasks: untask ? JSON.parse(untask) : []
  },
  getters,
  mutations,
  actions,
})
