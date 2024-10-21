<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'

</script>

<template>
   <NavbarView></NavbarView>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>


  <RouterView />
  <FooterView></FooterView>
</template>

<style scoped>

</style>
