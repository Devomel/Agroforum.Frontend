
<template>
  <div>
    <h1>Підтвердження електронної пошти</h1>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  created() {
    // Отримати токен з параметрів маршруту
    const token = this.$route.params.token;

    //Відправити токен на бекенд для підтвердження
    //this.confirmEmail(token);
  },
  methods: {
    //  confirmEmail(token) {
    //    axios
    //      .put("backendUri/confirmemail", { token })
    //      .then((response) => {
    //        this.message = "Електронна пошта успішно підтверджена!";
    //        this.$router.push("/");
    //      })
    //      .catch((error) => {
    //        this.message = "Помилка під час підтвердження електронної пошти.";
    //      });
    //  },
  },
};
</script>
