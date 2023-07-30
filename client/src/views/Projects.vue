<template lang="">
  <div class="md:container text-center p-10 m-10">
    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-purple-600 dark:text-cyan-300"
      >
        <h2 class="text-4xl font-bold text-center no-underline">Projects</h2>
        <!--  projects div -->
        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <router-link
            v-for="destination in destinations"
            :key="destination.name"
            :to="{ name: 'single-project', params: { id: destination.id } }"
            class="group relative"
          >
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
            >
              <img
                :src="`/images/${destination.image}`"
                :alt="destination.slug"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-6 text-lg text-purple-600 dark:text-cyan-300">
              <!-- <a :href="destination.slug">
                <span class="absolute inset-0" />
                {{ destination.name }}
              </a> -->
              <span class="absolute inset-0" />
              {{ destination.name }}
            </h3>
            <p
              class="text-base font-semibold text-gray-500 dark:text-slate-100"
            >
              {{ destination.short_description }}
            </p>
          </router-link>
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
  name: "Projects",
  data() {
    return {
      destinations: sourceData.destinations,
    };
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
