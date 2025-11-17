<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "@motionone/vue";

// Form object
const form = ref({
  name: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

// Submit handler
const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    console.log("Form submitted:", form.value);

    submitSuccess.value = true;
    submitMessage.value =
      "Xabaringiz muvaffaqiyatli yuborildi! / Your message has been sent successfully!";

    form.value = { name: "", phone: "", message: "" };
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value =
      "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring. / An error occurred. Please try again.";
  } finally {
    isSubmitting.value = false;
    setTimeout(() => (submitMessage.value = ""), 5000);
  }
};
</script>

<template>
<section
  id="contact"
  class="relative overflow-hidden bg-linear-to-br from-primary-600 to-primary-800 py-20"
>
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute inset-0"
      style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"
    ></div>
  </div>

  <div class="relative container">

    <!-- Header -->
    <Motion
      :initial="{ opacity: 0, y: -30 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
      class="mb-12 text-center"
    >
      <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {{ $t("contact.title") }}
      </h2>
      <p class="text-primary-100 text-lg">{{ $t("contact.subtitle") }}</p>
    </Motion>

    <!-- Form Card -->
    <Motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :animate="{ opacity: 1, scale: 1, transition: { duration: 0.6 } }"
      class="rounded-3xl bg-white p-8 lg:p-12 shadow-2xl hover:-translate-y-1 transition-transform"
    >
      <form @submit.prevent="handleSubmit" class="space-y-6">

        <!-- Name & Phone -->
        <div class="grid gap-6 md:grid-cols-2">
          <Motion
            v-for="field in ['name', 'phone']"
            :key="field"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: field==='phone'?0.1:0 } }"
          >
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                {{ $t(`contact.${field}`) }} *
              </label>
              <input
                v-model="form[field as keyof typeof form]"
                :type="field==='phone'?'tel':'text'"
                required
                :placeholder="$t(`contact.${field}Placeholder`)"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gradient-to-r focus:from-primary-500 focus:to-primary-300"
              />
            </div>
          </Motion>
        </div>

        <!-- Message -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }"
        >
          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              {{ $t("contact.message") }}
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 shadow-sm transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-gradient-to-r focus:from-primary-500 focus:to-primary-300"
            ></textarea>
          </div>
        </Motion>

        <!-- Submit -->
        <Motion
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }"
        >
          <button
            type="submit"
            :disabled="isSubmitting"
            class="btn-primary w-full rounded-xl bg-linear-to-r from-primary-500 to-primary-600 text-white py-3 font-semibold hover:-translate-y-1 hover:shadow-lg transition-all flex justify-center items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">{{ $t("contact.submit") }}</span>
            <span v-else class="flex items-center">
              <svg class="h-5 w-5 animate-spin text-white mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t("contact.submit") }}...
            </span>
          </button>
        </Motion>

        <!-- Success/Error Message -->
        <Motion
          v-if="submitMessage"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
        >
          <p
            :class="[
              'text-center text-sm mt-2 font-medium px-4 py-2 rounded-full',
              submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700',
            ]"
          >
            {{ submitMessage }}
          </p>
        </Motion>

      </form>
    </Motion>
  </div>
</section>
</template>
