import { createRouter, createWebHashHistory } from "vue-router";
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Confirmemail from './components/ConfirmEmail.vue'
import ResetPassword from './components/ResetPassword.vue'

export default createRouter({
   history: createWebHashHistory(),
   routes: [
      { path: '/signup', component: Registration },
      { path: '/signin', component: Login },
      { path: '/ConfirmEmail/:token', component: Confirmemail, name: 'ConfirmEmail' },
      { path: '/resetPassword', component: ResetPassword },
   ]
})






