<template lang="">
  <div
    class="md:container py-8 m-12 text-justify text-gray-900 dark:text-white"
    data-aos="fade"
  >
    <h3 class="p-5 m-1 text-center no-underline">
      Terms &amp; Conditions Agreement
    </h3>
    <div class="mt-5">
      <p class="justify-items-start">
        Welcome to
        <a class="font-bold underline decoration-rose-500">olema-chand.com</a>
        (the "Website"). By accessing or using the Website, you agree to be
        bound by the following terms and conditions (the "Agreement"). If you do
        not agree to these terms and conditions, you may not access or use the
        Website.
      </p>
      <p><strong>1. Website Content</strong></p>
      <div class="mt-4">
        <p>
          The content on the Website is for informational purposes only and
          should not be construed as legal, financial, or professional advice.
          We make no representations or warranties regarding the accuracy or
          reliability of any information on the Website.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>2. User Conduct</strong></p>
      <div class="mt-4">
        <p>
          You agree to use the Website only for lawful purposes and in a manner
          that does not infringe upon the rights of others. You may not use the
          Website to transmit or post any unlawful, threatening, defamatory,
          obscene, or otherwise objectionable content.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>3. User-Generated Content</strong></p>
      <div class="mt-4">
        <p>
          If you submit content to the Website (e.g. comments, forum posts), you
          grant us a non-exclusive, worldwide, royalty-free license to use,
          reproduce, modify, and distribute your content in any format.
        </p>
      </div>
      <div class="mt-4">
        <p>
          You are solely responsible for the content you submit to the Website,
          and you agree not to submit any content that infringes upon the rights
          of others or violates any laws or regulations.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>4. Intellectual Property </strong></p>
      <div class="mt-4">
        <p>
          All content on the Website, including but not limited to text,
          graphics, logos, images, and software, is the property of
          <a class="font-bold underline decoration-rose-500">olema-chand</a>
          or its content suppliers and is protected by copyright, trademark, and
          other intellectual property laws. You may not reproduce, modify, or
          distribute any content on the Website without our prior written
          consent.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>5. Privacy Policy </strong></p>
      <div class="mt-4">
        <p>
          We collect and use personal information in accordance with our Privacy
          Policy, which is available on the Website. By using the Website, you
          consent to our collection, use, and disclosure of your personal
          information in accordance with the Privacy Policy.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>6. Disclaimer</strong></p>
      <div class="mt-4">
        <p>
          We make no representations or warranties regarding the accuracy or
          reliability of any information on the Website. The Website is provided
          "as is" and we disclaim all warranties, whether express or implied,
          including but not limited to the implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>7. Termination</strong></p>
      <div class="mt-4">
        <p>
          We reserve the right to terminate your access to the Website at any
          time and for any reason, without notice. You may also terminate this
          Agreement at any time by ceasing to use the Website.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>8. Governing Law </strong></p>
      <div class="mt-4">
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of
          <a class="font-bold underline decoration-rose-500">Bangladesh</a>,
          without giving effect to any principles of conflicts of law.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>9. Changes to the Agreement</strong></p>
      <div class="mt-4">
        <p>
          We reserve the right to modify this Agreement at any time, without
          notice. By continuing to use the Website after any changes to this
          Agreement, you agree to be bound by the modified Agreement. If you
          have any questions about this Agreement, please contact us at
          <a class="font-bold underline decoration-rose-500"
            >admin@olema-chand.com</a
          >. By accessing or using the Website, you agree to be bound by this
          Agreement. If you do not agree to this Agreement, do not access or use
          the Website.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
export default {
  name: "Terms-conditions",
  setup() {
    useHead({
      title: "Terms & Conditions Page",
      meta: [
        {
          name: "title",
          content: "Terms & Conditions Page | Aydid Hasan",
        },
        {
          name: "description",
          content: "My Terms & Conditions Page.",
        },
        {
          property: "og:description",
          content: "My Terms & Conditions Page.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
