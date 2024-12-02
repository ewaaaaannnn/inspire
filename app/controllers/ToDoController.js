import { AppState } from "../AppState.js"
import { todoService } from "../services/ToDoServices.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class ToDoController {
  constructor() {
    AppState.on('account', this.fetchTodos)
    AppState.on('toDoList', this.drawTodo)
    AppState.on('account', this.drawTodo)
    AppState.on('toDoList', this.drawTodoRemaining)
  }

  async fetchTodos() {
    try {
      await todoService.fetchTodos()
    } catch (error) {
      console.error(error)
    }
  }

  async createTodo(event) {
    try {
      event.preventDefault(); // Prevents the default form submission (page reload)
      const formElem = event.target; // Get the form element
      console.log('➕🚙', formElem);
      const formData = getFormData(formElem); // Get form data
      // Send form data to your service
      await todoService.createTodo(formData);
    } catch (error) {
      console.error(error); // Log any errors
    }
  }


  async deleteTodo(todoID) {
    try {
      event.stopPropagation()
      const confirm = await Pop.confirm("Are you sure you want to Delete")
      if (!confirm) return
      await todoService.deleteTodo(todoID)
    } catch (error) {
      console.error(error)
    }
  }

  async completeTodo(todoID) {
    try {
      await todoService.completeTodo(todoID)
    } catch (error) {
      console.error(error)
    }
    drawTodoRemaining()
  }


  drawTodo() {
    let todoListHTML = ''
    AppState.toDoList.forEach(todo => todoListHTML += todo.todoListCard)
    setHTML('todo-list', todoListHTML)
  }

  drawTodoRemaining() {
    const todoRemaining = AppState.toDoList.filter(toDoList => !toDoList.completed)
    setText('todo-remaining', todoRemaining.length)
  }

}