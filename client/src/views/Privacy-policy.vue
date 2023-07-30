<template lang="">
  <div
    class="md:container py-8 m-12 text-justify text-gray-900 dark:text-white"
    data-aos="fade"
  >
    <h3 class="p-5 m-1 text-center no-underline">Privacy Policy</h3>
    <div class="mt-5 justify-items-center">
      <p><strong>1. Protection of your information</strong></p>
      <div class="mt-4">
        <p>
          All the data we collect from you on our websites is protected against
          unauthorized access by third parties. We do our utmost to protect your
          privacy through the appropriate use of security technologies and
          physical safeguards.
        </p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>2. Website Usage Information</strong></p>
      <div class="mt-4">
        <p>
          <strong>2.1</strong> While you use our websites, your visits to
          individual pages will be tracked and recorded in web server log files
          (“Log Data”). Log Data may be used by International Medical
          Journal&nbsp;for statistical purposes, to recognize patterns of usage
          of the websites, and to improve the structure and content
          presentation. The usage information we collect (using&nbsp;HTTP
          Cookies) includes referring URLs, browser and device characteristics,
          IP address, operating system, as well as dates and times of website
          visits.
        </p>

        <p>
          <strong>2.2 </strong>Via the website, International Medical
          Journal&nbsp;may offer via its website third party services, such as
          article recommendations, social login, social sharing, and banners to
          third party sites. The information which is collected by
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >&nbsp;when you access third party services is processed under this
          Privacy Policy, while information collected by third-party operators
          themselves will be governed by their own privacy policies.
        </p>

        <p>
          <strong>2.3</strong> Our websites may use Google Analytics to help us
          collect information about how visitors use our sites. We use this
          information to compile reports and to help us improve the sites. The
          cookies collect information in an anonymous form, including the number
          of visitors to a site, where visitors have navigated to a site from
          and the pages they visit whilst on a site.
        </p>
        <p></p>
      </div>
    </div>
    <div class="mt-5">
      <p>
        <strong
          >3. User Accounts, Registration and Personalized Services</strong
        >
      </p>
      <div class="mt-4">
        <p></p>
        <p>
          <strong>3.1 </strong>To make use of personalized services, you will
          have to register a user account with our websites. During
          registration, we will ask you to provide some personal information,
          including, but not limited to, your name, valid e-mail address,
          affiliation, postal address, phone number, password, academic degree,
          position within your institution or organization, and your research
          interests. Some of this information is required to properly set up the
          user account for you to use all of
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >&nbsp;services.<br />
          <br />
          <strong>3.2</strong>&nbsp;International Medical Journal&nbsp;may use
          this information to fulfill our contract with you (e.g. the
          publication of your article). Furthermore,
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >&nbsp;may also use this information internally, e.g., to evaluate and
          improve our business, respond to any questions, requests or comments
          you make, for targeted marketing purposes, or to identify and prevent
          fraud, claims or other liabilities.<br />
          <br />
          <strong>3.3</strong>&nbsp;International Medical Journal&nbsp;may
          contact you by e-mail to draw your attention to content that might be
          of interest to you (e.g. new services, products or publications) and
          for other advertising. If the personal information was provided to us
          by a third party,
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >&nbsp;may still use this information in the same manner as described
          above. You will have the chance to opt-out of receiving such e-mails
          by unsubscribing.
        </p>
        <p></p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>4. International Transfer of Personal Data</strong></p>
      <div class="mt-4">
        <p></p>
        <p>
          International Medical Journal will never share your personal
          information with anyone nor with any third parties. Anyone can be
          subscribed to us and will get further information and announcement
          through the mail of
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >.
          <a class="font-bold underline decoration-pink-500">olema-chand.com</a
          >&nbsp;takes steps to ensure your personal information is continued to
          be protected wherever it is stored and/or processed.
        </p>
        <p></p>
      </div>
    </div>
    <div class="mt-5">
      <p><strong>5. Your Rights</strong></p>
      <div class="mt-4">
        <p></p>
        <p>
          As a registered user, you can access your account at any time and make
          corrections or updates. In accordance with existing data privacy law,
          you may request the information that the international Medical
          Journal&nbsp;holds or processes about you. On request, we will also
          provide you with a copy of all personal information that we possess
          about you. We will delete this personal information when you request
          to deactivate your account. However, some personal information may
          remain in storage for a certain period of time in order to comply with
          our (legal) obligations and to resolve disputes.
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
export default {
  name: "Privacy-policy",
  setup() {
    useHead({
      title: "Privacy policy | Olema Chand",
      meta: [
        {
          name: "title",
          content: "Privacy policy | Olema Chand",
        },
        {
          name: "description",
          content: "Privacy policy Page of Olema Chand's Portfolio.",
        },
        {
          property: "og:description",
          content: "Privacy policy Page of Olema Chand's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
