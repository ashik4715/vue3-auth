<template>
  <span ref="countNumber"
    >{{ currentNumber
    }}<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-7 h-7 inline-flex"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    endNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentNumber: 0,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.startCounting();
          observer.unobserve(this.$refs.countNumber);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(this.$refs.countNumber);
  },
  methods: {
    startCounting() {
      const step = Math.ceil(this.endNumber / 300);

      const intervalId = setInterval(() => {
        if (this.currentNumber + step >= this.endNumber) {
          this.currentNumber = this.endNumber;
          clearInterval(intervalId);
        } else {
          this.currentNumber += step;
        }
      }, 10);
    },
  },
};
</script>
