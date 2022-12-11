import { writable } from 'svelte/store'

export const todoList = writable([
  { key: 0, label: 'Run', done: false },
  { key: 1, label: 'Study', done: false },
  { key: 2, label: 'Eat', done: false },
])
