<template>
  <div class="md:container-lg md:mx-auto bg-no-repeat">
    <!-- Langing profile section -->
    <div class="relative overflow-hidden">
      <div class="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div class="mx-auto max-w-5xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left"
            >
              <div class="lg:py-24">
                <h1
                  class="mt-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                >
                  <span class="block text-pink-500">Introducing </span
                  ><span class="block text-black dark:text-white"
                    >Landing Website</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Our Website will launch soon. Join the waitlist to try the
                  beta before it's publicly available.
                </p>
              </div>
            </div>
            <div class="mt-12 hidden lg:block">
              <img
                class=""
                src="https://user-images.githubusercontent.com/1884712/202186141-9f8a93e1-7743-459a-bc95-b1d826931624.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Langing profile section -->
  </div>
</template>
<script>
import { useHead } from "unhead";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      meta_tags: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:8000/api/client-home", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.meta_tags = response.data;
          useHead({
            title: `${this.meta_tags[0].meta_title}`, // Update title
            meta: [
              {
                name: "title",
                content: `${this.meta_tags[0].meta_title}`,
              },
              {
                name: "description",
                content: `${this.meta_tags[0].meta_description}`,
              },
              {
                property: "og:description",
                content: `${this.meta_tags[0].meta_description}`,
              },
              {
                property: "og:image",
                content: `images/${this.meta_tags[0].summary_large_image}`,
              },
              {
                name: "twitter:card",
                content: `images/${this.meta_tags[0].summary_large_image}`,
              },
            ],
          });
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
  },
};
</script>
