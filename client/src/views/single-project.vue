<template lang="">
  <div class="mt-20 pt-5">
    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-purple-600 dark:text-cyan-300"
      >
        <h2 class="text-4xl font-bold text-center no-underline">
          {{ destination.name }}
        </h2>

        <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
          <div
            class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg hover:opacity-75"
          >
            <div class="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                :src="`/images/${destination.image}`"
                :alt="destination.slug"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div
            class="col-span-3 text-justify relative h-full w-full overflow-hidden rounded-lg"
          >
            <div
              class="text-base font-semibold text-gray-500 dark:text-slate-100"
            >
              <div v-html="destination.description"></div>
            </div>
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
  name: "single-project",
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
  data() {
    useHead({
      title: "Single Project | Olema Chand",
      meta: [
        {
          name: "title",
          content: " Single Project | Olema Chand",
        },
        {
          name: "description",
          content: "Single Projects Page of Olema Chand's Portfolio.",
        },
        {
          property: "og:description",
          content: "Single Projects Page of Olema Chand's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
