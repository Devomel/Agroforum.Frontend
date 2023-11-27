<template>
  <section class="max-w-sm text-center">
    <AuthButtonsVue />
    <p>LOGIN</p>

    <form @submit.prevent="sendEmailAndPassword">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
      <br />
      <label for="password">Password:</label><br />
      <input type="password" id="password" v-model="password" required />
      <br />
      <a href="#/resetPassword">Forgot password?</a>
      <button class="submit" type="submit">Sign in</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import AuthButtonsVue from "./AuthButtons.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      isAuthSuccess: false,
    };
  },

  components: {
    AuthButtonsVue,
  },
  methods: {
    sendEmailAndPassword() {
      const apiUrl = "http://localhost:8081/api/auth/login"; // Замініть це на реальний URL сервера
      const loginData = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      console.log(loginData);
      axios
        .put(apiUrl, loginData, {
          headers: {
            "Content-Type": "application/json", // Set the content type header
          },
        })
        .then((response) => {
          // Обробка успішного відповіді від сервера
          console.log("Успішна відповідь:", response.data);
          this.$router.push("/");
          isAuthSuccess = true;
        })
        .catch((error) => {
          // Обробка помилки
          console.error("Помилка при відправці даних:", error);
        });
    },
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