<template lang="">
  <div class="main-content flex flex-col flex-grow p-4">
    <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>

    <div
      class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
    >
      <!-- dashboard content -->
      <div class="isolate bg-inherit px-6 py-12 sm:py-12 lg:px-8">
        <div
          class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          ></div>
        </div>
        <div
          class="flex h-full items-center justify-center bg-white text-center font-bold shadow-md rounded"
        >
          <!-- Content goes here -->
        </div>
      </div>
      <!-- end dashboard content -->
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
export default {
  name: "DashBoard",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    logout() {
      // Clear the token from localStorage
      localStorage.removeItem("token");

      // Redirect to the login page
      this.$router.push("/login");
    },
    deleteUser(userId) {
      axios
        .delete(`http://localhost:3000/register/${userId}`)
        .then((response) => {
          console.log(response.data.message);
          this.users = this.users.filter((user) => user.id !== userId);
        })
        .catch((error) => {
          console.error("Error deleting user from client:", error);
          // Handle error scenarios
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");

    if (!token) {
      // Token is not present, redirect to the login page
      next("/login");
    } else {
      // Token is present, verify it on the server
      axiosInstance
        .get("/verify-token")
        .then(() => {
          // Token is valid, allow access to the route
          next();
        })
        .catch(() => {
          // Token is invalid, redirect to the login page
          next("/login");
        });
    }
  },

  setup() {
    useHead({
      title: "DashBoard | Olema Chand ",
      meta: [
        {
          name: "title",
          content: "DashBoard | Olema Chand ",
        },
        {
          name: "description",
          content: "DashBoard Page of Olema Chand 's Portfolio.",
        },
        {
          property: "og:description",
          content: "DashBoard Page of Olema Chand 's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
<style scoped></style>
