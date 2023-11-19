<template>
  <section class="max-w-sm text-center">
    <AuthButtonsVue />
    <p>LOGIN</p>

    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" />
      <br />
      <label for="password">Password:</label><br />
      <input type="password" id="password" />
      <br />
      <button class="submit" type="submit">Sign in</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import AuthButtonsVue from "./AuthButtons.vue";
export default {
  components: {
    AuthButtonsVue,
  },
};
</script>


<style scoped>
label {
  font-size: 0.8em;
}
p {
  text-align: center;
}
section {
  text-align: left;
  margin: 0 auto;
  max-width: 15rem;
  border: 1px solid #d8d0d0;
  background: #f8f3f3;
  padding: 20px;
  border-radius: 4px;
}

input,
select {
  background: #ebe6e6;
  border: none;
  color: black;
  min-width: 100%;
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 15px;
}

* {
  color: black;
}
.submit {
  background-color: orange;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 7px 0;
  color: #ffffffdf;
  font-size: 1em;
  margin-top: 10px;
}
button {
  padding: 3px 4px 3px 15px;
  font-size: 0.7em;
}
</style>