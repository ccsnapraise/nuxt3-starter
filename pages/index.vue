<template>
  <h1>{{ data }}</h1>
</template>

<script setup>
const { data } = await useFetch("/api/demo", {
  defer: true,
});
</script>

<style></style>
