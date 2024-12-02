import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"


export class Todo {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.creatorId = data.creatorId
    this.completed = data.completed
  }


  get todoListCard() {
    return `
<div class="todo-list card p-2 m-2">
    <div class="card-body shadow-sm text-start">
        <div class="row ps-2 justify-content-between">
            ${this.completedTodo}
            <button onclick="app.ToDoController.deleteTodo('${this.id}')" class="text-light btn btn-danger col-2"><i
                    class="mdi mdi-delete-circle-outline"></i></button>
        </div>
    </div>
</div>
`
  }

  get completedTodo() {
    if (this.completed == true) {
      return `
            <input onclick="app.ToDoController.completeTodo('${this.id}')" class="col-1" checked type="checkbox"
                name="completed">
                <p class="col-8 mb-0 align-self-center completedTodo">${this.description}</p>
            `}
    return `<input onclick="app.ToDoController.completeTodo('${this.id}')" class="col-1" type="checkbox"
                name="completed">
                <p class="col-8 mb-0 align-self-center">${this.description}</p>`
  }
}