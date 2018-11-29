import todoStorage from '../../utils/storage'

const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(todo => !todo.completed)
  },
  completed (todos) {
    return todos.filter(todo => todo.completed)
  }
}

export default {
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    }
  },

  directives: {
    'todo-focus' (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },

  watch: {
    todos: {
      handler: todoStorage.save,
      deep: true
    }
  },

  computed: {
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return filters.active(this.todos).length
    },
    allDone: {
      get () {
        return this.remaining === 0
      },
      set (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  methods: {
    pluralize (word, count) {
      return word + (count === 1 ? '' : 's')
    },

    addTodo () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({ id: this.todos.length + 1, title: value, completed: false })
      this.newTodo = ''
    },

    removeTodo (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },

    editTodo (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted () {
      this.todos = filters.active(this.todos)
    },

    switchTodos (val, e) {
      e.preventDefault()
      this.visibility = val
    }
  }
}
