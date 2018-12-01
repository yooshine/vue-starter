export const setTodos = (state, todos = []) => {
  state.todos = todos
}

export const setEditedTodo = (state, todo = {}) => {
  state.editedTodo = todo
}

export const setVisibility = (state, visibility = 'all') => {
  state.visibility = visibility
}

export const setAllDone = (state, event) => {
  state.todos = state.todos.map(todo => ({ ...todo, completed: event.target.checked }))
}

export const setTodoDone = (state, { todo, event }) => {
  const idx = state.todos.findIndex(item => todo.id === item.id)

  if (idx >= 0) {
    state.todos[idx].completed = event.target.checked
  }
}
