<template>
  <div class="lg:mt-2.5 mt-0">
    <div class="flex justify-between relative 2xl:mx-20 md:mx-10 mx-2">
      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button class="flex items-start text-black hover:text-blue-500 mt-3.5 ml-2 focus:outline-none" @click="toggleSidebar">
          <font-awesome-icon icon="bars" size="2x" />
        </button>
      </div>

      <!-- Header Date -->
      <div class="header-date w-[215px] text-left hidden lg:block">
        <div class="eng-date text-black mt-1 font-domine" style="font-size: 13px ;">
          Monday October 14, 2024</div>
        <div class="today_top_links mt-1.5">
          <a href="https://www.thenews.com.pk/today" class="bg-black text-white
          py-1 px-1.5 hover:underline font-normal leading-6 font-domine text-[16px]">Today's Paper</a>
        </div>
      </div>

      <!-- Logo -->
      <div class="logo mt-0">
        <a class="open-section" href="https://www.thenews.com.pk/">
          <img src="https://www.thenews.com.pk/assets/front/images/Thenews-logo.svg"
               width="150" height="48" alt="The News International" />
        </a>
      </div>

      <!-- Search Button -->
      <div class="lg:hidden">
        <button class="flex items-end text-black hover:text-blue-500 mt-5 mr-2 focus:outline-none">
          <font-awesome-icon icon="magnifying-glass" size="1x" />
        </button>
      </div>

      <!-- Right Header Links -->
      <div class="header-date w-[215px] text-right hidden lg:block">
        <div class="eng-date text-black  mt-1 font-domine" style="font-size: 13px ;">Prayer Timing</div>
        <div class="today_top_links mt-1.5">
          <a href="https://www.thenews.com.pk/today" class="bg-black text-white
          py-1 px-1.5 hover:underline font-normal leading-6 font-domine text-[16px]">Epaper</a>
        </div>
      </div>

    </div>

    <div class="divide-y 2xl:mx-20 mx-10 mt-3 hidden md:block">
      <div class="h-0.5 bg-black"></div>
    </div>

    <!-- Sidebar Overlay -->
    <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50" v-if="isSidebarVisible" @click="toggleSidebar"></div>

    <!-- Sidebar Menu -->
    <div class="lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg
    transform transition-transform" :class="{ '-translate-x-full': !isSidebarVisible }">
      <div class="flex justify-end p-4">
        <button @click="toggleSidebar" class="text-black">
          <font-awesome-icon icon="times" size="2x" />
        </button>
      </div>
      <nav class="lg:flex block flex-col space-y-2 p-4 overflow-y-auto max-h-full">
        <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.path"
          class="block text-[#181716] hover:bg-gray-100 px-4 py-2 font-domine"
          @click="closeSidebar"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>

    <!-- Desktop Navbar -->
    <nav class="bg-white">
      <div class="max-w-7xl mx-auto px-4 flex md:justify-center md:items-center lg:py-1.5 py-0">
        <div class="hidden lg:flex space-x-2">
          <router-link
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.path"
            class="inline-block font-domine px-2 text-[#181716] hover:text-blue-500 text-[15px] font-normal whitespace-normal"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faMagnifyingGlass, faTimes);

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isSidebarVisible: false, // Sidebar visibility state
      navLinks: [
        { name: 'Home', path: '/' },
        { name: 'Latest', path: '/Latest' },
        { name: 'National', path: '/National' },
        { name: 'Sports', path: '/Sports' },
        { name: 'World', path: '/World' },
        { name: 'Business', path: '/Business' },
        { name: 'Entertainment', path: '/Entertainment' },
        { name: 'Technology', path: '/Technology' },
        { name: 'Health', path: '/Health' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle the sidebar visibility
    },
    closeSidebar() {
      this.isSidebarVisible = false; // Close the sidebar
    },
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
