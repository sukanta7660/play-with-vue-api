<template>
  <div class="about">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>My To-Dos</h1>
        <p class="lead text-muted">Listing of to-dos. Lets Try?</p>
        <p></p>
      </div>
    </section>
    <div class="row mb-2 d-flex justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent.enter="addTodo">
          <div class="form-group">
            <label for="todo-name">New To-Do</label>
            <input
              type="text"
              class="form-control"
              id="todo-name"
              v-model="newTodo"
              placeholder="Create a new to do"
            />
          </div>
          <button type="submit" class="btn btn-sm btn-block btn-secondary">
            Add To Do
          </button>
        </form>
        <h3 class="mt-3">ToDo List</h3>
        <hr />
        <ul class="list-group todo-list" v-if="todolist.length > 0">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="todo in todolist" :key="todo.id">
            <input type="checkbox" name="" id="" v-model="todo.isComplete">
            <!-- <input type="checkbox" name="" id="" v-if="todo.isComplete == false"> -->
            <span class="todo-title" :class="{done: todo.isComplete}" @click="doneTodo(todo)">{{todo.title}}</span>
            <span class="badge"
              ><button class="btn btn-sm btn-danger" @click="removeTodo(todo)">Remove</button></span>
          </li>
        </ul>
        <h5 v-if="todolist.length == 0">Todo list is Empty.</h5>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  name: "ToDo",
  data() {
    return {
      newTodo: '',
      todolist: []
    }
  },
  methods:{
    addTodo(){
      if (this.newTodo != "") {
        this.todolist.push({id:1, title: this.newTodo, isComplete: false});
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Todo has been saved',
          showConfirmButton: false,
          timer: 1500
      })
        this.newTodo = "";
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'You are trying to submit a empty form',
          showConfirmButton: false,
          timer: 1500
      })
      }
      
    },
    removeTodo(todo){
      this.todolist.splice(this.todolist.indexOf(todo),1)
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Todo has been removed',
          showConfirmButton: false,
          timer: 1500
      })
    },
    doneTodo(todo){
      if (todo.isComplete == true) {
        todo.isComplete = false
      } else {
        todo.isComplete = true
      }
    }
  }
};
</script>
<style scoped>
.jumbotron {
  padding-top: 6rem;
  padding-bottom: 0;
}
input[type="checkbox"] {
    margin-right: 10px;
}
span.todo-title {
    cursor: pointer;
}
.done {
		text-decoration: line-through;
}
ul.list-group.todo-list li {
  margin-bottom: 10px;
  border-top: 1px solid #ccc;
  border-radius: 8px;
}
hr {
  background: #ccb;
  height: 4px;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
