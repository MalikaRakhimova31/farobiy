<template>
  <section
    id="contact"
    class="from-primary-600 to-primary-800 relative overflow-hidden bg-linear-to-br"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            white 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative container">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {{ $t("contact.title") }}
        </h2>
        <p class="text-primary-100 text-lg">
          {{ $t("contact.subtitle") }}
        </p>
      </div>

      <div class="rounded-2xl bg-white p-8 shadow-2xl lg:p-12">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                {{ $t("contact.name") }} *
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="$t('contact.namePlaceholder')"
                class="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                {{ $t("contact.phone") }} *
              </label>
              <input
                v-model="form.phone"
                type="tel"
                required
                :placeholder="$t('contact.phonePlaceholder')"
                class="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              {{ $t("contact.message") }}
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="$t('contact.messagePlaceholder')"
              class="focus:ring-primary-500 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span v-if="!isSubmitting">{{ $t("contact.submit") }}</span>
            <span v-else class="flex items-center justify-center">
              <svg
                class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {{ $t("contact.submit") }}...
            </span>
          </button>

          <p
            v-if="submitMessage"
            :class="[
              'text-center text-sm',
              submitSuccess ? 'text-green-600' : 'text-red-600',
            ]"
          >
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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

    form.value = {
      name: "",
      phone: "",
      message: "",
    };
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value =
      "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring. / An error occurred. Please try again.";
  } finally {
    isSubmitting.value = false;

    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }
};
</script>
