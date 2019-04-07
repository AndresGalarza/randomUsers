import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listUsers: null,
    columns:{
      picture: true,
      title : true,
      firstName : true,
      lastName : true,
      email : true,
      phone : true,
      cell : false,
      gender : true,
      username: false,
      birthday: false,
      age : false
    },
    currentUser: null
  },
  mutations: {
    getListUsers(state) {
      fetch("https://randomuser.me/api/?results=10").then(function (response) {
          return response.json();
        }).then(function(data){
          state.listUsers =  data.results;
      })
    },
    getCurrentUser(state){
      try {
        const userId = router.currentRoute.params.userId;
        state.currentUser = state.listUsers.filter(user => user.email == userId)[0]
      }catch (e) {
        router.push({ path: '/' })
      }

    }
  },
  actions: {

  }
})
