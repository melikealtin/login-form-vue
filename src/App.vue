<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Braah+One&family=Montserrat:ital,wght@0,200;0,300;0,400;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  margin: 0.25em 0;
  padding: 0.5em;
  width: 250px;
  border-radius: 3px;
  border-color: $border-color;
  outline: none;
  background-color: $button-bg-color;
  color: $button-text-color;
  cursor: pointer;
  transition: 300ms all;

  &:hover {
    font-weight: bold;
    background-color: $button-bg-hover-color;
  }
}

.input {
  margin: 0.25em 0;
  padding: 0.5em;
  width: 250px;
  border-radius: 3px;
  border-color: $border-color;
  outline: none;
}
</style>
