<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand ml-5" to="/">
      <img class="mt-2" alt="Vue logo" src="../assets/logo.png">
      My app
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item">
        <router-link to="/todo">Todo List</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  padding: 30px;
}
nav img{
    position: absolute;
    top: 2%;
    left: 3%;
  width: 30px;
  height: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>