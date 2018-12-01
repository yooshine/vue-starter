const STORAGE_KEY = 'todos-vuejs'

const getTodosFromStorage = () => {
  const todos = localStorage.getItem(STORAGE_KEY)

  return !todos ? [] : JSON.parse(todos)
}

const saveTodoToStorage = todos => {
  todos = todos.map((todo, idx) => {
    return {
      ...todo,
      id: idx
    }
  })
  const stringifiedTodos = JSON.stringify(todos)

  localStorage.setItem(STORAGE_KEY, stringifiedTodos)
}

export const getTodos = () => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()

    resolve(todos)
  })
}

export const addTodo = (todo = '') => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()

    todos.push({
      id: todos.length + 1,
      title: todo,
      completed: false
    })

    saveTodoToStorage(todos)
    resolve()
  })
}

export const updateTodo = todo => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()
    const idx = todos.findIndex(item => item.id === todo.id)

    if (idx >= 0) {
      todos[idx] = todo
      saveTodoToStorage(todos)
      resolve()
    }

    reject(Error('todo not found'))
  })
}

export const removeTodo = (todo) => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()
    const idx = todos.findIndex(item => item.id === todo.id)

    if (idx >= 0) {
      todos.splice(idx, 1)
      saveTodoToStorage(todos)
      resolve()
    }

    reject(Error('todo not found'))
  })
}

export const removeCompleted = () => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()
    const activeTodos = todos.filter(item => !item.completed)

    saveTodoToStorage(activeTodos)
    resolve()
  })
}

export const completeTodo = (todo, status) => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage()
    const idx = todos.findIndex(item => item.id === todo.id)

    todos[idx].completed = status

    saveTodoToStorage(todos)
    resolve()
  })
}

export const completeAllTodos = status => {
  return new Promise((resolve, reject) => {
    const todos = getTodosFromStorage().map(todo => {
      return {
        ...todo,
        completed: status
      }
    })

    saveTodoToStorage(todos)
    resolve()
  })
}
