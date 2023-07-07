<template>
  <div class="app">
    <nav>
      <ul>
        <li>
          <router-link to="/location" class="nav-link" :class="{ 'active': $route.path === '/location' }">Location</router-link>
        </li> 
        <li>
          <router-link to="/stopwatch" class="nav-link" :class="{ 'active': $route.path === '/stopwatch' }">Stopwatch</router-link>
        </li>
        <li>
          <router-link to="/weather" class="nav-link" :class="{ 'active': $route.path === '/weather' }">Weather</router-link>
        </li>
        <li>
          <router-link to="/tictactoe" class="nav-link" :class="{ 'active': $route.path === '/tictactoe' }">Tic Tac Toe</router-link>
        </li>
        <li>
          <router-link to="/photo" class="nav-link" :class="{ 'active': $route.path === '/photo' }">Photo</router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
.app {
  font-family: 'Belanosima', sans-serif;
  display: grid;
  grid-template-columns: 5fr;
  justify-items: center;
  background: linear-gradient(to bottom right, #534b52, #616061);
  margin: 75px;
}

nav {
  background-color: #a87979;
  padding: 10px;
  display: flex;
  justify-content: center;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  padding: 5px;
  transition: transform 0.3s ease;
}

nav ul li a:hover {
  transform: scale(1.1);
  color: #555;
  background-color: rgb(255, 255, 255);
}

nav ul li a:active {
  color: #777;
  transform: scale(0.9);
  transition: transform 0.2s ease;
}

.content {
  display: flex;
  flex-direction: column;
}

.nav-link {
  transition: color 0.3s ease, transform 0.3 ease;
}

.nav-link:hover {
  color: #fff;
  background: linear-gradient(to bottom right, #4e6269, #4b6070);
  transform: scale(1.1);
}

.nav-link:active {
  color: rgb(0, 0, 0);
  transform: scale(1.1);
}

.active {
  color: #fff;
  background: linear-gradient(to bottom right, #4e6269, #4b6070);
}

</style>
