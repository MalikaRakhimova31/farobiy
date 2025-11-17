<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "@motionone/vue";

const form = ref({
  name: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

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
<section id="contact" class="relative py-24 bg-gradient-to-br from-[#e0f5ef] to-[#009663]/20">
  <!-- Soft radial light spots -->
  <div class="absolute inset-0">
    <div class="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 blur-3xl"></div>
    <div class="absolute w-96 h-96 bg-white/10 rounded-full bottom-20 right-10 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-6 relative z-10 flex flex-col items-center">

    <!-- Header -->
    <Motion
      :initial="{ opacity: 0, y: -40 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
      class="text-center mb-16"
    >
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{{ $t("contact.title") }}</h2>
      <p class="text-gray-700 text-lg max-w-xl mx-auto">{{ $t("contact.subtitle") }}</p>
    </Motion>

    <!-- Form Card -->
    <Motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1, transition: { duration: 0.6 } }"
      class="w-full max-w-xl bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2"
    >
      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Inputs -->
        <div class="grid gap-5 md:grid-cols-2">
          <Motion v-for="field in ['name','phone']" :key="field" :initial="{ opacity:0, y:20 }" :animate="{ opacity:1, y:0, transition:{duration:0.5, delay:field==='phone'?0.1:0} }">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-800">{{ $t(`contact.${field}`) }} *</label>
              <input
                v-model="form[field as keyof typeof form]"
                :type="field==='phone'?'tel':'text'"
                required
                :placeholder="$t(`contact.${field}Placeholder`)"
                class="w-full px-4 py-3 rounded-xl bg-gray-100 placeholder-gray-500 text-gray-900 shadow-inner outline-none focus:bg-white focus:ring-2 focus:ring-[#009663] transition"
              />
            </div>
          </Motion>
        </div>

        <!-- Message -->
        <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0, transition:{duration:0.5, delay:0.2} }">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-800">{{ $t("contact.message") }}</label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-xl bg-gray-100 placeholder-gray-500 text-gray-900 shadow-inner outline-none focus:bg-white focus:ring-2 focus:ring-[#009663] transition resize-none"
            ></textarea>
          </div>
        </Motion>

        <!-- Submit -->
        <Motion :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0, transition:{duration:0.5, delay:0.3} }">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3 rounded-full bg-gradient-to-r from-[#009663] to-[#00b377] text-white font-semibold hover:scale-105 hover:shadow-lg transition-all flex justify-center items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

        <!-- Message -->
        <Motion v-if="submitMessage" :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0, transition:{duration:0.5} }">
          <p :class="[ 'text-center text-sm mt-2 font-medium px-4 py-2 rounded-full', submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700', ]">
            {{ submitMessage }}
          </p>
        </Motion>
      </form>
    </Motion>
  </div>
</section>

</template>
