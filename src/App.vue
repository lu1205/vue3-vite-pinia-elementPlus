<template>
  <router-view />
</template>

<script setup lang="ts">
import {ref} from "vue";
const active = ref(0)
</script>

<style>

body {
  padding: 0;
  margin: 0;
}

</style>
