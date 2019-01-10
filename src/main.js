import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from "./store";
import firebase from 'firebase/app';
import 'firebase/database';

// connect to firebase database
firebase.initializeApp({
    
});
let dbRef = firebase.database();
// export the ref to the todos list
export const db = dbRef.ref('todos');

// this creates an object to store variables in
// it loads the store into the Vue object
// which every component is a child of
Vue.$store = new Store();
Vue.prototype.$store = Vue.$store;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");