<script setup>
import Headless from "./views/Headless.vue";
import { useHead } from "unhead";

useHead({
  title: "Homepage | Olema Chand",
  meta: [
    {
      name: "title",
      content: "Homepage | Olema Chand",
    },
    {
      name: "description",
      content: "Homepage of Olema Chand's Website.",
    },
    {
      property: "og:description",
      content: "Homepage of Olema Chand's Website.",
    },
    { property: "og:image", content: `summary_large_image` },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<template>
  <Headless />
  <!-- <HelloWorld /> -->
</template>
<style scoped></style>
