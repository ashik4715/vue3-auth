<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-6 py-20"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto mt-4"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
      >
        Sign Up for your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register" method="POST">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >Full Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              v-model="name"
              type="text"
              autocomplete="name"
              placeholder="Enter Full Name"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="Enter Email"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-500 hover:text-cyan-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              placeholder="Enter Password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
        {{ " " }}
        <a
          href="/login"
          class="font-semibold leading-6 text-indigo-500 hover:text-cyan-500"
          >Log In</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/dashboard");
        // Store the token in local storage and route to dash board
      } catch (error) {
        console.error("Registration error:", error);
      }
    },
  },
  setup() {
    useHead({
      title: "Register Page",
      meta: [
        {
          name: "title",
          content: "Register Page",
        },
        {
          name: "description",
          content: "Register page of this website.",
        },
        {
          property: "og:title",
          content: "Register Page",
        },
        {
          property: "og:description",
          content: "Register page of this website.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
