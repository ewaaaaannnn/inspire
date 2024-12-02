import { AppState } from "../AppState.js";
import { Todo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";


class TodoService {


  async fetchTodos() {
    const response = await api.get('api/todos')
    const todos = response.data.map(todoData => new Todo(todoData))
    AppState.toDoList = todos
  }

  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    const createdTodo = new Todo(response.data)
    AppState.toDoList.push(createdTodo)
  }

  async deleteTodo(todoID) {
    const response = await api.delete(`api/todos/${todoID}`)
    const todoToRemove = AppState.toDoList.find(todo => todo.id == todoID)
    const indexToRemove = AppState.toDoList.indexOf(todoToRemove)
    AppState.toDoList.splice(indexToRemove, 1)
  }

  async completeTodo(todoID) {
    const completeTodo = AppState.toDoList.find(todo => todo.id == todoID)
    completeTodo.completed = !completeTodo.completed
    const response = await api.put(`api/todos/${todoID}`, completeTodo)
    AppState.emit('todos')
  }

}

export const todoService = new TodoService()