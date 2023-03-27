<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import {useTheme} from "vuetify"

const theme = useTheme()

// Store theme preference in local storage (default to light mode)
if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'light')
}
theme.global.name.value = localStorage.getItem('theme')
</script>

<style scoped>
</style>
