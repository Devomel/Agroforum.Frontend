<script>
import axios from "axios";
import AuthButtonsVue from "./AuthButtons.vue";
export default {
  components: {
    AuthButtonsVue,
  },
  data() {
    return {
      username: "",
      password: "",
      email: "",
      company: "",
      user: 0,
    };
  },
  methods: {
    toggleUser() {
      if (this.user == 0) {
        ++this.user;
        console.log(this.user);
      } else --this.user;
    },
    async register() {
      try {
        console.log(this.username, this.password, this.email);
        if (!this.username || !this.password) {
          this.error = "Будь ласка, заповніть всі поля.";
          return;
        }
        const response = await axios.post("//посилання на наш апі", {
          username: this.username,
          password: this.password,
        });

        // Успішна реєстрація
        console.log("Успішна реєстрація:", response.data);
      } catch (error) {
        // Обробка помилок, наприклад, виведення повідомлення про помилку
        console.error("Помилка реєстрації:", error.response.data);
      }
    },
  },
};
</script>
<template>
  <section class="max-w-sm text-center">
    <AuthButtonsVue />
    <p>Sign up with</p>
    <div class="flex flex-grow">
      <button><img src="" alt="" />Google</button>
      <button><img src="" alt="" />Facebook</button>
      <button><img src="" alt="" />Apple Id</button>
    </div>

    <p>or</p>
    <form @submit.prevent="register">
      <label for="user">You</label><br />
      <select @change="toggleUser" name="" id="">
        <option value="farmer">Legal entity</option>
        <option value="buyer">Private person</option></select
      ><br />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <div v-if="this.user == 0">
        <label>Company name:</label>
        <br />
        <input type="text" v-model="company" />
      </div>

      <label for="email">Email:</label><br />
      <input type="email" id="email" v-model="email" required />
      <label for="password">Password:</label><br />
      <input type="password" id="password" v-model="password" required />
      <br />
      <button class="submit" type="submit">Sign up</button>
    </form>
  </section>
</template>




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
/* div {
  display: flex;
  justify-content: space-around;
} */
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