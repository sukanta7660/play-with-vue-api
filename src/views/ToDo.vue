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
        <ul class="list-group todo-list" v-if="todoFilterd.length > 0">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="todo in todoFilterd"
            :key="todo.id"
          >
            <input type="checkbox" name="" id="" v-model="todo.isComplete" />
            <!-- <input type="checkbox" name="" id="" v-if="todo.isComplete == false"> -->
            <span
              class="todo-title"
              :class="{ done: todo.isComplete }"
              @click="doneTodo(todo)"
              >{{ todo.title }}</span
            >
            <span class="badge">
              <button class="btn btn-sm btn-danger" @click="removeTodo(todo)">
                Remove
              </button></span
            >
          </li>
        </ul>
        <h5 v-if="todoFilterd.length == 0">No Items.</h5>
      </div>
      <div class="col-md-12">
        <div class="row mt-5 d-flex justify-content-center">
          <div class="col-md-6 ml-2">
            <hr />
            <input type="checkbox" id="checkAll" @change="checkAll" />
            <label for="checkAll"> Check All</label>
            <span class="float-right">{{ remaining }} items left</span>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="row mt-5 d-flex justify-content-center">
          <div class="col-md-6">
            <button
              :class="{ active: filter == 'all' }"
              class="btn btn-sm btn-default mr-1"
              @click="filter = 'all'"
            >
              ALL
            </button>
            <button
              :class="{ active: filter == 'active' }"
              class="btn btn-sm btn-default mr-1"
              @click="filter = 'active'"
            >
              All Active
            </button>
            <button
              :class="{ active: filter == 'completed' }"
              class="btn btn-sm btn-default mr-1"
              @click="filter = 'completed'"
            >
              All Completed
            </button>
            <button
              class="btn btn-sm btn-danger pull-right"
              v-if="clearCompletedBtn"
              @click="clearCompleted"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appMixins from "@/mixins/appMixins";
export default {
  mixins: [appMixins],
  name: "ToDo",
  data() {
    return {
      newTodo: "",
      filter: "all",
      todolist: [],
    };
  },
  created() {
    this.loadTodos();
  },
  computed: {
    remaining() {
      return this.todolist.filter((todo) => !todo.isComplete).length;
    },
    todoFilterd() {
      if (this.filter == "all") {
        return this.todolist;
      } else if (this.filter == "active") {
        return this.todolist.filter((todo) => !todo.isComplete);
      } else if (this.filter == "completed") {
        return this.todolist.filter((todo) => todo.isComplete);
      }
      return this.todolist;
    },
    clearCompletedBtn() {
      return this.todolist.filter((todo) => todo.isComplete).length > 0;
    },
  },
  methods: {
    loadTodos() {
      this.$http
        .get("https://todoapi.monobol.com/api/todo-list")
        .then((result) => {
          this.todolist = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTodo() {
      if (this.newTodo != "") {
        this.$http
          .post("https://todoapi.monobol.com/api/todo-save/", {
            title: this.newTodo,
          })
          .then((result) => {
            console.log(result);
            this.$alert({ messages: "Todo has been saved" });
            this.newTodo = "";
            this.loadTodos();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$alert({
          type: "error",
          messages: "You are trying to submit a empty form",
        });
      }
    },
    removeTodo(todo) {
      this.$http
        .get("https://todoapi.monobol.com/api/todo-remove/" + todo.id)
        .then(() => {
          this.$alert({ messages: "Todo has been removed" });
          this.loadTodos();
        })
        .catch(() => {});
    },
    doneTodo(todo) {
      this.$http
        .get("https://todoapi.monobol.com/api/todo-update/" + todo.id)
        .then(() => {
          this.$alert({ messages: "Todo status has been updated" });
          this.loadTodos();
        })
        .catch(() => {});
    },
    checkAll() {
      this.todolist.forEach(
        (todo) => (todo.isComplete = todo.isComplete == true ? false : true)
      );
    },
    clearCompleted() {
      this.todolist = this.todolist.filter((todo) => !todo.isComplete);
    },
  },
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
.active,
.btn:hover {
  background-color: #666;
  color: white;
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