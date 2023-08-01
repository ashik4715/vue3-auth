<template>
  <div class="bg-zinc-200">
    <header class="absolute inset-x-0 top-0 z-50 w-full">
      <nav
        :class="{ scrolled: !view.atTopOfPage }"
        class="fixed flex w-full items-center bg-gray-100 dark:bg-gray-800 justify-between flex-wrap m-auto top-0 animated shadow-2xl shadow-cyan-400/20 p-8 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <!-- <img class="h-8 w-auto" src="#" alt="logo" /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-800 dark:text-white hover:text-emerald-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link
            class="text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-rose-500"
            to="/"
            >Home</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-rose-500"
            to="/about"
            >About</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-rose-500"
            to="/contact"
            >Contact</router-link
          >
          <router-link
            class="text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-rose-500"
            to="/projects"
            >Projects</router-link
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div class="toggle-button flex space-x-5">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" @click="toggleDark" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-400"
              ></div>

              <div v-if="isDark">
                <label
                  for="dark-mode"
                  class="ml-2 text-xs font-bold text-gray-300 dark:text-cyan-300"
                  >Dark</label
                >
              </div>
              <div v-else>
                <label
                  for="dark-mode"
                  class="ml-2 text-xs font-bold text-red-500 dark:text-cyan-300"
                  >Light</label
                >
              </div>
            </label>
            <a
              href="/login"
              class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <!-- <img class="h-8 w-auto" src="#" alt="logo" /> -->
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-red-600 hover:text-emerald-500"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/"
                  @click="mobileMenuOpen = false"
                  >Home</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/about"
                  @click="mobileMenuOpen = false"
                  >About</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/contact"
                  @click="mobileMenuOpen = false"
                  >Contact</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/projects"
                  @click="mobileMenuOpen = false"
                  >Projects</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/privacy-policy"
                  @click="mobileMenuOpen = false"
                  >Privacy-policy</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  to="/Terms-conditions"
                  @click="mobileMenuOpen = false"
                  >Terms &amp; Conditions Agreement</router-link
                >
              </div>
              <div class="py-6">
                <a
                  href="/login"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-slate-400"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>

  <div class="bg-no-repeat">
    <div v-if="false">
      <HelloWorld />
    </div>
    <div v-else-if="showDashboard">
      <Sidebar />
    </div>
    <div v-else-if="showUsers">
      <Sidebar />
    </div>
    <div v-else-if="showAddHome">
      <Sidebar />
    </div>
    <div v-else-if="showAllHome">
      <Sidebar />
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
  <!-- footer -->
  <footer class="p-1 flex justify-between">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <router-link
            to="/about"
            class="text-lg leading-6 dark:text-white text-slate-800 hover:text-cyan-300 dark:hover:text-pink-500"
            >About</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/contact"
            class="text-lg leading-6 dark:text-white text-slate-800 hover:text-cyan-300 dark:hover:text-pink-500"
            >Contact</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/projects"
            class="text-lg leading-6 dark:text-white text-slate-800 hover:text-cyan-300 dark:hover:text-pink-500"
            >Projects</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/privacy-policy"
            class="text-lg leading-6 dark:text-white text-slate-800 hover:text-cyan-300 dark:hover:text-pink-500"
            >Privacy Policy</router-link
          >
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/terms-conditions"
            class="text-lg leading-6 dark:text-white text-slate-800 hover:text-cyan-300 dark:hover:text-pink-500"
            >Terms and Conditions</router-link
          >
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.facebook.com/ajholok"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/ashik4715"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Dribbble</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <p class="mt-8 text-lg leading-6 text-center text-gray-400">
        © 2023
        <router-link to="/" class="text-cyan-400 hover:text-purple-500"
          >olema-chand.org</router-link
        >. All rights reserved.
      </p>
    </div>
  </footer>
  <!-- end footer -->
</template>

<script>
import { ref } from "vue";
import HelloWorld from "@src/components/HelloWorld.vue";
import Sidebar from "@src/components/Sidebar.vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useDark } from "@vueuse/core";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const showRouterView = ref(false);
    return {
      showRouterView,
    };
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },

  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const showDashboard = computed(() => {
  const route = useRoute();
  return route.name === "Dashboard";
});
const showUsers = computed(() => {
  const route = useRoute();
  return route.name === "Users";
});
const showAddHome = computed(() => {
  const route = useRoute();
  return route.name === "AddHome";
});
const showAllHome = computed(() => {
  const route = useRoute();
  return route.name === "AllHome";
});
const isDark = useDark();
const toggleDark = () => {
  isDark.value = !isDark.value;
};
const mobileMenuOpen = ref(false);
</script>
<style scoped>
nav {
  z-index: 10;
}

nav.scrolled {
  border-bottom: 0px;
}
</style>
