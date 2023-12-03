<!-- NotFound.vue -->
<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <p>The page you're looking for seems to be lost in the digital abyss.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  font-size: 3em;
  color: #ff6347; /* Tomato color */
}

p {
  font-size: 1.2em;
  color: #555;
}

router-link {
  margin-top: 20px;
  font-size: 1.2em;
  color: #3498db; /* Dodger Blue color */
  text-decoration: underline;
  cursor: pointer;
}
</style>
