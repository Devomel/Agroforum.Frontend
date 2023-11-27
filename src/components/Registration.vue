<script>
import axios from "axios";
import AuthButtonsVue from "./AuthButtons.vue";
export default {
   components: {
      AuthButtonsVue,
   },
   data() {
      return {
         name: "",
         surname: "",
         password: "",
         confirmPassword: "",
         email: "",
         isFarmer: true,
         company: "",
         user: 1,
         data1: {},
         dispatchDate: Date,
         backendUrl: "http://localhost:8081",
      };
   },
   methods: {
      toggleUser() {
         if (this.user == 0) {
            ++this.user;
            console.log(this.user);
         } else {
            --this.user;
            this.isFarmer = false;
         }
      },
      async register() {
         try {
            const data1 = {
               name: this.name,
               surname: this.surname,
               email: this.email,
               password: this.password,
               confirmPassword: this.confirmPassword,
               isFarmer: this.isFarmer,
            };
            console.log(data1);
            console.log(JSON.stringify(data1));
            const response = await axios.post(
               "http://localhost:8081/api/auth/register",
               JSON.stringify(data1),
               {
                  headers: {
                     "Content-Type": "application/json", // Set the content type header
                  },
               }
            );
            console.log(data1);
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
            <option value="buyer">Private person</option>
         </select><br />
         <label for="name">Name:</label>
         <input type="text" id="name" v-model="name" required />
         <label for="surname">surname:</label>
         <input type="text" id="surname" v-model="surname" required />
         <label for="email">Email:</label><br />
         <input type="email" id="email" v-model="email" required />
         <label for="password">Password:</label><br />
         <input type="password" id="password" v-model="password" required />
         <label for="confirmPassword">Confirm Password:</label><br />
         <input type="Password" id="confirmPassword" v-model="confirmPassword" required />
         <div v-if="this.user == 1">
            <label>Company name:</label>
            <br />
            <input type="text" v-model="company" />
         </div>

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