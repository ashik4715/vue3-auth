<template lang="">
  <div class="md:container pt-10 m-20">
    <h2
      class="text-4xl font-bold text-center no-underline text-purple-600 dark:text-cyan-300"
    >
      About Me
    </h2>
    <p class="pt-10 pb-5 sm:pt-10 text-lg text-slate-800 dark:text-white">
      Hello and welcome to my personal portfolio website! My name is Mohammed
      Olema Chand, and I am a dedicated and highly skilled professional with a
      passion for computer science, artificial intelligence, and cyber security.
      My unique educational background and diverse work experience have given me
      the knowledge and tools necessary to excel in the world of technology.
    </p>
    <h2
      class="text-xl text-slate-900 dark:text-white underline decoration-emerald-500"
    >
      Education:
    </h2>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      I earned my BSc in Computer Science, specializing in Artificial
      Intelligence, from the University of Hertfordshire. This prestigious
      program equipped me with the foundational knowledge and skills needed to
      succeed in the rapidly evolving field of AI. During my time at university,
      I had the opportunity to undertake an industrial placement, further
      enhancing my understanding of real-world applications of computer science.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      In addition to my primary degree, I completed a summer program in cyber
      security at Nanyang Technological University in Singapore. This enriching
      experience expanded my expertise in network and information security,
      providing me with valuable insights into the world of cyber threats and
      defense mechanisms.
    </p>
    <h2
      class="text-xl text-slate-900 dark:text-white underline decoration-emerald-500"
    >
      Career:
    </h2>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      My professional journey began in 2019 as an IT Intern at Parker Hannifin
      Corporation in Hemel Hempstead, where I gained hands-on experience in
      information technology and learned to apply my academic knowledge in a
      corporate environment. This experience prepared me for my next role as a
      Business Intelligence Support Analyst at Graphnet Health, UK, where I
      worked from September 2021 to December 2021. In this position, I honed my
      skills in data analysis and reporting, providing critical support to the
      company's business intelligence initiatives.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      Since January 2022, I have been working as a Graduate Consultant at Egis
      Group in London, UK. During my time with the company, I have tackled
      various projects and challenges, demonstrating my adaptability and strong
      problem-solving skills. As of February 1st, I have been on a short
      delegation with Egis Group in Dublin, Ireland, where I continue to
      contribute my expertise and grow professionally.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      As you browse through my portfolio, you will discover the wide range of
      projects I have been involved in, showcasing my passion for technology and
      my commitment to excellence. I am always eager to learn and take on new
      challenges, and I look forward to the opportunities that lie ahead.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      Thank you for visiting my website, and please feel free to reach out if
      you have any questions or would like to discuss potential collaborations.
    </p>
    <!-- PEOPLE SECTION -->
    <div class="bg-white dark:bg-inherit py-12 sm:py-12">
      <div
        class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-6 xl:grid-cols-3"
      >
        <div class="max-w-2xl">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Meet our leadership
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li v-for="person in people" :key="person.name">
            <div class="flex items-center gap-x-6">
              <img
                class="h-16 w-16 rounded-full"
                :src="person.imageUrl"
                alt=""
              />
              <div>
                <h3
                  class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm font-semibold leading-6 text-indigo-500">
                  {{ person.role }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- PEOPLE SECTION End -->
  </div>
</template>

<script>
import { useHead } from "unhead";
export default {
  name: "About",
  setup() {
    useHead({
      title: "About | Olema Chand",
      meta: [
        {
          name: "title",
          content: "About | Olema Chand",
        },
        {
          name: "description",
          content: "About Page of Olema Chand's Portfolio.",
        },
        {
          property: "og:description",
          content: "About Page of Olema Chand's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
<script setup>
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];
</script>
<style scoped></style>
