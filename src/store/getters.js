import * as filters from '../utils/filters'

export const todos = state => state => { console.log(state.todos); return state.todos }
export const filteredTodos = state => filters[state.visibility](state.todos)
export const remaining = state => state.todos.filter(todo => !todo.completed).length
