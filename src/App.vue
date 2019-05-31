<template>
  <div class="page-container">
    <md-app md-mode="reveal" md-theme="myColors">
      <md-app-toolbar class="md-primary">
        <router-link to="/" v-show="isDetail">
          <md-button class="md-fab">
            <md-icon>arrow_back</md-icon>
          </md-button>
        </router-link>
        <md-button class="md-fab" v-show="!isDetail" @click="getListUsers()">
          <md-icon>refresh</md-icon>
        </md-button>
        <span class="md-title">My Random Users</span>
      </md-app-toolbar>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("myColors", (
          primary: md-get-palette-color(bluegrey, 700),
          accent: md-get-palette-color(cyan, A700),
          theme:"dark"
  ));

  @import "~vue-material/dist/theme/all";
</style>

<script>
  import {mapMutations, mapActions} from 'vuex'

  export default {
    name: 'Overlap',
    data: () => ({
      menuVisible: false
    }),
    computed:{
      isDetail(){
        return !!(this.$route.params.userId);
      }
    },
    methods:{
      ...mapMutations(['getListUsers']),
      ...mapActions(['getSomeApi'])
    },
    created() {
      this.getListUsers()
      this.getSomeApi()
    }
  }
</script>


