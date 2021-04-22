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
        <form action="">
          <div class="form-group">
            <label for="todo-name">New To-Do</label>
            <input
              type="text"
              class="form-control"
              id="todo-name"
              placeholder="Create a new to do"
            />
          </div>
          <button type="button" class="btn btn-sm btn-block btn-secondary">
            Add To Do
          </button>
        </form>
        <h3 class="mt-3">ToDo List</h3>
        <hr />
        <ul class="list-group todo-list">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <span class="badge"
              ><button class="btn btn-sm btn-danger">Remove</button></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A second list item
            <span class="badge"><button class="btn btn-sm btn-danger">Remove</button></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A third list item
            <span class="badge"><button class="btn btn-sm btn-danger">Remove</button></span>
          </li>
        </ul>
        <h4>Empty list.</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDo",
  data() {
    return {};
  }
};
</script>
<style scoped>
.jumbotron {
  padding-top: 6rem;
  padding-bottom: 0;
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
