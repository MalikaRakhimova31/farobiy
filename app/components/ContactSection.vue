<script setup lang="ts">
import { ref } from "vue";
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
  <section id="contact"
    class="to-secondary-900/20 relative bg-linear-to-br from-[#e0f5ef] py-24 dark:from-[#0d1f1a] dark:to-[#1a3a2e]">
    <!-- Soft radial light spots -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="bg-secondary-900/10 absolute top-10 left-10 h-72 w-72 rounded-full blur-3xl dark:bg-[#00c878]/5">
      </div>
      <div class="bg-secondary-900/10 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl dark:bg-[#00c878]/5">
      </div>
    </div>
    <div class="relative z-10 container mx-auto flex flex-col items-center px-6">
      <!-- Header -->
      <div class="mb-16 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0"
        data-aos-easing="ease-out-cubic">
        <h2 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          {{ $t("contact.title") }}
        </h2>
        <p class="mx-auto max-w-xl text-lg text-gray-700 dark:text-gray-300">
          {{ $t("contact.subtitle") }}
        </p>
      </div>
      <!-- Form Card -->
      <div
        class="animate-fade-in dark:shadow-secondary-900/10 dark:border-secondary-900/20 w-full max-w-xl rounded-3xl border border-transparent bg-white/90 p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,150,99,0.3)] dark:bg-[#1a2f27]/90 dark:hover:shadow-[#00c878]/20">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Inputs -->
          <div class="grid gap-5 md:grid-cols-2">
            <div class="animate-fade-in" v-for="field in ['name', 'phone']" :key="field" :animate="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: field === 'phone' ? 0.1 : 0,
              },
            }">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">{{
                  $t(`contact.${field}`) }} *</label>
                <input v-model="form[field as keyof typeof form]" :type="field === 'phone' ? 'tel' : 'text'" required
                  :placeholder="$t(`contact.${field}Placeholder`)"
                  class="dark:border-secondary-900/30 focus:border-secondary-900 focus:ring-secondary-900/20 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 outline-none focus:bg-white focus:ring-2 dark:bg-[#0d2419] dark:text-white dark:placeholder-gray-500 dark:focus:border-[#00c878] dark:focus:bg-[#162d24] dark:focus:ring-[#00c878]/20" />
              </div>
            </div>
          </div>
          <!-- Message -->
          <div class="animate-fade-in" :animate="{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">{{ $t("contact.message")
                }}</label>
              <textarea v-model="form.message" rows="5" :placeholder="$t('contact.messagePlaceholder')"
                class="dark:border-secondary-900/30 focus:border-secondary-900 focus:ring-secondary-900/20 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 outline-none focus:bg-white focus:ring-2 dark:bg-[#0d2419] dark:text-white dark:placeholder-gray-500 dark:focus:border-[#00c878] dark:focus:bg-[#162d24] dark:focus:ring-[#00c878]/20"></textarea>
            </div>
          </div>
          <!-- Submit -->
          <div class="animate-fade-in" :animate="{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }">
            <button type="submit" :disabled="isSubmitting"
              class="from-secondary-900 hover:shadow-secondary-900/30 flex w-full items-center justify-center space-x-2 rounded-xl bg-linear-to-r to-[#00b377] py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 dark:from-[#00c878] dark:to-[#00e891] dark:hover:shadow-[#00c878]/30">
              <span v-if="!isSubmitting">{{ $t("contact.submit") }}</span>
              <span v-else class="flex items-center">
                <svg class="mr-2 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ $t("contact.submit") }}...
              </span>
            </button>
          </div>
          <!-- Message -->
          <div class="animate-fade-in" v-if="submitMessage">
            <p :class="[
              'mt-2 rounded-xl px-4 py-3 text-center text-sm font-medium shadow-sm',
              submitSuccess
                ? 'border border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'border border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400',
            ]">
              {{ submitMessage }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
