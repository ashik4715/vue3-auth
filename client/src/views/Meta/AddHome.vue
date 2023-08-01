<template>
  <div class="main-content flex flex-col flex-grow p-4">
    <h1 class="font-bold text-2xl text-gray-700">Add Homepage Meta</h1>

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
          <!-- <form class="space-y-6" @submit.prevent="homeSubmit" method="POST">
            <div>
              <label
                for="meta_title"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Meta Title</label
              >
              <div class="mt-2">
                <input
                  id="meta_title"
                  v-model="meta_title"
                  type="text"
                  placeholder="Enter Meta Title"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="meta_description"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Meta Description</label
              >
              <div class="mt-2">
                <textarea
                  rows="4"
                  name="meta_description"
                  id="meta_description"
                  v-model="meta_description"
                  placeholder="Enter Meta Description"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                ></textarea>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about Homepage Meta Description.
                </p>
              </div>
            </div>

            <div class="">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Cover photo</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        @change="handleFileUpload"
                        required
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Homepage Meta
              </button>
            </div>
          </form> -->
          <!-- end Content goes here -->

          <!-- new form -->
          <form
            class="space-y-6"
            @submit.prevent="submitForm"
            enctype="multipart/form-data"
          >
            <div>
              <label
                for="metaTitle"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Meta Title</label
              >
              <div class="mt-2">
                <input
                  id="metaTitle"
                  v-model="metaTitle"
                  type="text"
                  placeholder="Enter Meta Title"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="metaDescription"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Meta Description</label
              >
              <div class="mt-2">
                <textarea
                  rows="4"
                  name="metaDescription"
                  id="metaDescription"
                  v-model="metaDescription"
                  placeholder="Enter Meta Description"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                ></textarea>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about Homepage Meta Description.
                </p>
              </div>
            </div>
            <div class="">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Cover photo</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="summaryLargeImage"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="summaryLargeImage"
                        name="summaryLargeImage"
                        type="file"
                        class="sr-only"
                        @change="handleFileUpload"
                        accept="image/*"
                        required
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Homepage Meta
              </button>
            </div>
          </form>
          <!-- end form -->
        </div>
      </div>
      <!-- end dashboard content -->
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
import axios from "axios";

export default {
  name: "AddHome",
  data() {
    return {
      meta_title: "",
      meta_description: "",
      summary_large_image: null,
      metaTitle: "",
      metaDescription: "",
      summaryLargeImage: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.summary_large_image = event.target.files[0];
    },
    homeSubmit() {
      const formData = new FormData();
      formData.append("image", this.summary_large_image);

      axios
        .post("http://localhost:3000/add-home", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            meta_title: this.meta_title,
            meta_description: this.meta_description,
          },
        })
        .then((response) => {
          this.$router.push("/all-home-meta");
        })
        .catch((error) => {
          console.error("Homepage Meta failed:", error);
        });
    },
    handleFileUpload(event) {
      this.summaryLargeImage = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append("meta_title", this.metaTitle);
      formData.append("meta_description", this.metaDescription);
      formData.append("summary_large_image", this.summaryLargeImage);

      axios
        .post("http://localhost:3000/meta-home", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/all-home-meta");
        })
        .catch((error) => {
          console.error(error);
          alert("Error submitting form by submitting");
        });
    },
  },
  setup() {
    useHead({
      title: "Add Homepage Meta Page",
      meta: [
        {
          name: "title",
          content: "Add Homepage Meta Page",
        },
        {
          name: "description",
          content: "Add Homepage Meta page of this website.",
        },
        {
          property: "og:title",
          content: "Add Homepage Meta Page",
        },
        {
          property: "og:description",
          content: "Add Homepage Meta page of this website.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
