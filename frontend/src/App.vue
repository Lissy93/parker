<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/">Check a Policy</router-link>
      <router-link to="/">Policy Rankings</router-link>
      <router-link to="/about">Code</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'styles/global.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  padding: 1em;
  background: linear-gradient(
      to right bottom,
      rgba(132, 94, 194, 0.88),
      rgba(214, 93, 177, 0.9),
      rgba(255, 111, 145, 0.88),
      rgba(255, 150, 113, 0.86),
      rgba(255, 199, 95, 0.84),
      rgba(249, 248, 113, 0.82)
    ),
    url('/parker-alpha-bg.jpg') no-repeat center center;
  background-size: cover;
}
</style>
