<template>
  <div id="app">
    <img alt="SPRs logo" id='logo' src="@/assets/images/logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
              <router-link :to='{ name: link }' exact>
                {{ link }}
                <span v-if='link == "SPRs"'>({{ sprCount }})</span>
              </router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: 'App',
  data: function() {
        return {
            links: ['Home', 'SPRs', 'Dashboard' ],
            sharedState: app.store
        };
  },
  components: {
  },
  mounted : function() {
    // Invoke the `setSPRCount` mutation, passing the spr count as the payload
    let mySPRCount = 0;
    app.api.totalCount('sprs').then(response => {
      
      mySPRCount = response;
    this.$store.commit('setSPRCount', mySPRCount);
    this.$store.dispatch('setSPRs');
        });
  },
  computed: {
    sprCount: function() {
      return this.$store.state.sprCount;
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/main.scss';
</style>
