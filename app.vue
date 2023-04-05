<template>
  <div :style="isDarkMode ? { backgroundColor: 'black' } : ''">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<script setup lang="ts">
const { isDarkMode } = useDarkMode();

// console.log(isDarkMode.value);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>
