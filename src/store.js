import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Axios from 'axios';

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
      state.listUsers = null
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
        console.error("404, user not found")
      }

    }
  },
  actions: {
    getSomeApi(){
      console.log('chompa')
      var serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW/';
      var headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
      const params = new URLSearchParams();
      params.append('UserName', 'russellwhyte');
      //params.append('param2', 'value2');
      var request = {
          url: serviceRoot + 'People',
          method: 'GET',
          headers: headers,
          data: params
      };

      Axios(request).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })

    }
  }
})
