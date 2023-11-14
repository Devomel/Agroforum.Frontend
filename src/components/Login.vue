<template>
  <section class="max-w-sm text-center">
    <div>
      <a href="#/signup">Вхід</a>
      <a>Реєстрація</a>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {};
</script>


<style scoped>
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
  justify-content: space-around;
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
</style>