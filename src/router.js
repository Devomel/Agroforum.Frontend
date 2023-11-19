import { createRouter, createWebHashHistory } from "vue-router";
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Confirmemail from './components/ConfirmEmail.vue'

export default createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: '/signup', component: Registration },
      { path: '/signin', component: Login },
      { path: '/Confirmemail', component: Confirmemail },
   ]
})






