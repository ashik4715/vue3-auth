<template>
  <nav>
    <!-- desktop Menu -->
    <div class="bg-fuchsia-900">
      <div class="max-w-7xl mx-auto">
        <div class="justify-between flex">
          <!-- menu -->
          <div class="flex items-center space-x-4">
            <!-- logo -->
            <a href="" class="logo flex space-x-2 py-4 px-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-6 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                /></svg
              ><span class="text-2xl font-bold text-white">Aydid Hasan</span></a
            >
            <!-- Route for other rounter link -->
            <div class="routeLink flex space-x-5 text-yellow-100">
              <a href="/about" class="hover:text-cyan-500">About</a>
              <a href="/contact" class="hover:text-cyan-500">Contact</a>
            </div>
          </div>
          <!-- login -->
          <div class="flex items-center space-x-3 text-yellow-100">
            <!-- <a href="/login" class="hover:text-cyan-500">Login</a> -->
            <!-- <a href="/register" class="hover:text-cyan-500">Register</a> -->
            <div class="toggle-button space-x-5 pt-2">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  @click="toggleDark()"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
                <span
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Dark</span
                >
              </label>
            </div>
          </div>
          <!-- button show mobile menu -->
          <div class="md:hidden flex items-center">
            <button @click="showMobileMenu = !showMobileMenu" class="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-indigo-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          </div>
          <!-- end button show mobile menu -->
        </div>
      </div>
    </div>
    <!-- mobile Menu -->
    <div class="md:hidden bg-fuchsia-800" :class="{ hidden: showMobileMenu }">
      <a href="/login" class="block py-2 px-4 text-white hover:text-cyan-500"
        >Login</a
      >
      <a href="/register" class="block py-2 px-4 text-white hover:text-cyan-500"
        >Register</a
      >
      <a href="/about" class="block py-2 px-4 text-white hover:text-cyan-500"
        >about</a
      >
      <a href="/contact" class="block py-2 px-4 text-white hover:text-cyan-500"
        >contact</a
      >
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const showMobileMenu = ref(true);
</script>
<style>
.logo {
  max-height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
