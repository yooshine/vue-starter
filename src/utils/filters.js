export const all = todos => todos
export const active = todos => todos.filter(todo => !todo.completed)
export const completed = todos => todos.filter(todo => todo.completed)
