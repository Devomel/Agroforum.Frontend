<template>
  <section class="max-w-sm text-center">
    <p>Зареєструватися через</p>
    <div class="flex flex-grow">
      <button><img src="" alt="" />Google</button>
      <button><img src="" alt="" />Facebook</button>
      <button><img src="" alt="" />Apple Id</button>
    </div>

    <p>або</p>
    <form @submit.prevent="register">
      <label for="user">Ви</label><br />
      <select name="" id="">
        <option value="">Юр особа</option>
        <option value="">Покупець</option></select
      ><br />
      <label for="username">Ім'я користувача:</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">Пароль:</label><br />
      <input type="password" id="password" v-model="password" required />
      <br />
      <button class="submit" type="submit">Зареєструватися</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        console.log(this.username);
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
div {
  display: flex;
  justify-content: space-between;
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