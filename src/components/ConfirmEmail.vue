
<template>
   <div>
      <h1>Підтвердження електронної пошти</h1>
      <p v-if="message">{{ message }}</p>
   </div>
</template>

<script>
import axios from "axios";
export default {
   data() {
      return {
         token: null,
         serverResponse: null,
         message: "",
      };
   },
   mounted() {
      // Витягуємо токен з параметрів маршрутизатора
      this.token = this.$route.params.token;

      // Тут ви викликаєте функцію для відправлення токена на сервер
      this.sendTokenToServer();
   },
   methods: {
      sendTokenToServer() {
         const apiUrl = "http://localhost:8081/api/auth/confirmEmail";
         console.log(this.token);

         this.serverResponse = "Sending token to server...";

         axios
            .put(
               apiUrl,
               {}, // Empty body if not needed
               {
                  headers: {
                     Authorization: `Bearer ${this.token}`,
                  },
               }
            )
            .then((response) => {
               // Successful response from the server
               this.serverResponse = response.data.message;
            })
            .catch((error) => {
               // Error handling
               if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.error("Server responded with non-2xx status:", error.response.status);
                  this.serverResponse = "Error sending token to server. Server responded with an error.";
               } else if (error.request) {
                  // The request was made but no response was received
                  console.error("No response received from server:", error.request);
                  this.serverResponse = "Error sending token to server. No response received from the server.";
               } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error("Error setting up the request:", error.message);
                  this.serverResponse = "Error sending token to server. Request setup error.";
               }
            });
      }

   },
};
</script>
