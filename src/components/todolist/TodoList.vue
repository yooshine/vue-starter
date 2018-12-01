<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="saveTodo">
    </header>
    <section class="main" v-show="todos.length">
      <input id="toggle-all" class="toggle-all" type="checkbox" :value="this.remaining === 0" @change="completeAllTodos">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo == editedTodo}">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" @change="setComplete(todo, $event)">
            <label @dblclick="editTodo(todo)">{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
        </li>
      </ul>
    </section>
    <footer class="footer" v-if="todos.length > 0">
      <span class="todo-count">
        <strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected: visibility == 'all'}" @click="switchTodos('all', $event)">All</a></li>
        <li><a href="#/active" :class="{selected: visibility == 'active'}" @click="switchTodos('active', $event)">Active</a></li>
        <li><a href="#/completed" :class="{selected: visibility == 'completed'}" @click="switchTodos('completed', $event)">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
export { default } from './index'
</script>

<style>

</style>
