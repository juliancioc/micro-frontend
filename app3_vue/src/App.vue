<template>
  <div>
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Microfrontend - Vue App" };
  },
};
</script>

<style scoped>
div {
  background-color: orange;
  margin: 2rem;
  padding: 2rem;
  text-align: center;
  color: white;
  border-radius: 8px
}
</style>
