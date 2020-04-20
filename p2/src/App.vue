<template>
  <div id="app">
    <img alt="SPRs logo" id='logo' src="@/assets/images/logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='{ name: link}' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
        return {
            links: ['home', 'dashboard', 'sprs']
        };
  },
  components: {
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/main.scss';
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

#features-list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color:  #2c3e50;
}

h4 {
  color:  #5f6650;
}*/
</style>
