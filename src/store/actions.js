import * as request from '../utils/request'

export const getTodos = async ({ commit, getters }) => {
  const todos = await request.getTodos()

  commit('setTodos', todos)
}

export const addTodo = ({ dispatch, state }, todo = '') => {
  const value = todo.trim()

  if (!value) return

  request.addTodo(value)
  dispatch('getTodos')
}

export const removeTodo = async ({ dispatch, state }, todo) => {
  await request.removeTodo(todo)
  dispatch('getTodos')
}

export const removeCompleted = async ({ dispatch }) => {
  await request.removeCompleted()
  dispatch('getTodos')
}

export const updateTodo = async ({ dispatch }, todo) => {
  const title = todo.title.trim()

  if (!title) {
    await this.removeTodo(todo)
  } else {
    await request.updateTodo(todo)
  }

  dispatch('getTodos')
}

export const completeTodo = async ({ dispatch }, { todo, event }) => {
  console.log(todo, event)
  await request.completeTodo(todo, event.target.checked)
  dispatch('getTodos')
}

export const completeAllTodos = async ({ dispatch }, event) => {
  await request.completeAllTodos(event.target.checked)
  dispatch('getTodos')
}
