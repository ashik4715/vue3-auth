<template lang="">
  <div class="md:container text-center p-10 m-10">
    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-purple-600 dark:text-cyan-400"
      >
        <h2 class="text-4xl font-bold text-center no-underline">Projects</h2>
        <!--  projects div -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="destination in destinations" :key="destination.id">
            <div
              class="border rounded p-4 shadow-md hover:shadow-lg"
              @click="showModal(destination)"
            >
              <img
                :src="`/images/${destination.image}`"
                class="w-full cursor-pointer"
              />
              <div class="text-lg font-medium mt-2">{{ destination.name }}</div>
              <div class="text-sm text-gray-400 mt-2">
                {{ destination.short_description }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="selectedDestination"
          class="fixed inset-20 z-50 flex items-center justify-center"
        >
          <div class="inset-0 bg-gray-500 opacity-5"></div>
          <div class="bg-white rounded-lg p-2 shadow-md">
            <h2 class="text-2xl font-medium">{{ selectedDestination.name }}</h2>
            <div class="my-4" v-html="selectedDestination.description"></div>
            <a
              type="button"
              @click="hideModal()"
              class="bg-red-500 text-white text-2xl rounded-full px-4 py-2 hover:bg-yellow-600"
            >
              Close
            </a>
          </div>
        </div>
        <!-- end projects div -->
      </div>
    </div>
    <!-- End Projects section -->
  </div>
</template>

<script>
import sourceData from "@src/data/data.json";
import { useHead } from "unhead";

export default {
  name: "new-projects",
  data() {
    return {
      destinations: sourceData.destinations,
      selectedDestination: null,
    };
  },
  methods: {
    showModal(destination) {
      this.selectedDestination = destination;
    },
    hideModal() {
      this.selectedDestination = null;
    },
  },
  setup() {
    useHead({
      title: "Projects | Olema Chand",
      meta: [
        {
          name: "title",
          content: "Projects | Olema Chand",
        },
        {
          name: "description",
          content: "Projects Page of Olema Chand's Portfolio.",
        },
        {
          property: "og:description",
          content: "Projects Page of Olema Chand's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
