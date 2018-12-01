import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

const state = mapState(['visibility', 'editedTodo'])
const getters = mapGetters(['todos', 'filteredTodos', 'remaining'])
const actions = mapActions([
  'getTodos',
  'addTodo',
  'removeTodo',
  'updateTodo',
  'removeCompleted',
  'completeTodo',
  'completeAllTodos'
])
const mutations = mapMutations(['setEditedTodo', 'setVisibility', 'setAllDone', 'setTodoDone'])

export default {
  data () {
    return {
      newTodo: '',
      cacheTodoBeforeEdit: null
    }
  },

  directives: {
    'todo-focus' (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },

  computed: {
    ...state,
    ...getters
  },

  created () {
    this.getTodos()
  },

  methods: {
    ...actions,
    ...mutations,

    pluralize (word, count) {
      return word + (count === 1 ? '' : 's')
    },

    async saveTodo () {
      await this.addTodo(this.newTodo)
      this.newTodo = ''
    },

    editTodo (todo) {
      this.cacheTodoBeforeEdit = { ...todo }
      this.setEditedTodo(todo)
    },

    setComplete (todo, event) {
      this.completeTodo({ todo, event })
    },

    doneEdit (todo) {
      if (!this.editedTodo) return

      this.setEditedTodo(null)
      this.updateTodo(todo)
    },

    cancelEdit (todo) {
      this.setEditedTodo(null)
      todo.title = this.cacheTodoBeforeEdit.title
    },

    switchTodos (val, e) {
      e.preventDefault()
      this.setVisibility(val)
    }
  }
}
