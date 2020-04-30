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
            links: ['Home', 'SPRs', 'Dashboard' ]
        };
  },
  components: {
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/main.scss';
</style>
