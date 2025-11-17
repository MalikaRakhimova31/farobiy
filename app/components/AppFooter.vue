<script setup lang="ts"></script>
<template>
  <footer class="bg-[#0f1f1f] py-20 text-gray-300">
    <div class="container mx-auto">
      <div class="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <!-- About -->
        <div class="animate-fade-in lg:col-span-2"
        >
          <div class="mb-4 flex items-center space-x-3">
            <!-- Logo -->
            <div class="animate-fade-in flex items-center space-x-2"
            >
              <img src="/logo-white.png" alt="" class="w-44" />
            </div>
          </div>
          <p class="mb-6 max-w-md text-gray-400">
            {{ $t("footer.aboutText") }}
          </p>
          <div class="flex space-x-4">
            <!-- Social icons (adjust your SVGs) -->
            <a
              href="#"
              class="text-gray-400 transition-colors hover:text-[#00bfa5]"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                ...
              </svg>
            </a>
          </div>
        </div>
        <!-- Quick Links -->
        <div class="animate-fade-in"
        >
          <h4 class="mb-4 text-lg font-semibold text-white">
            {{ $t("footer.quickLinks") }}
          </h4>
          <ul class="space-y-2">
            <li>
              <a href="#hero" class="transition-colors hover:text-[#00bfa5]"
                >Home</a
              >
            </li>
            <li>
              <a href="#why" class="transition-colors hover:text-[#00bfa5]"
                >About</a
              >
            </li>
            <li>
              <a href="#programs" class="transition-colors hover:text-[#00bfa5]"
                >Programs</a
              >
            </li>
            <li>
              <a href="#team" class="transition-colors hover:text-[#00bfa5]"
                >Team</a
              >
            </li>
            <li>
              <a href="#faq" class="transition-colors hover:text-[#00bfa5]"
                >FAQ</a
              >
            </li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="animate-fade-in"
        >
          <h4 class="mb-4 text-lg font-semibold text-white">
            {{ $t("footer.contact") }}
          </h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start space-x-2">
              <svg
                class="mt-1 flex h-5 w-5 shrink-0 text-[#00bfa5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm">{{ $t("footer.address") }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="h-5 w-5 shrink-0 text-[#00bfa5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-sm">{{ $t("footer.phone") }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg
                class="h-5 w-5 shrink-0 text-[#00bfa5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">{{ $t("footer.email") }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="animate-fade-in"
      >
        <div
          class="flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 sm:flex-row sm:space-y-0"
        >
          <p class="text-sm text-gray-500">{{ $t("footer.rights") }}</p>
          <div class="flex space-x-6 text-sm">
            <a
              href="#"
              class="text-gray-500 transition-colors hover:text-[#00bfa5]"
              >{{ $t("footer.policy") }}</a
            >
            <a
              href="#"
              class="text-gray-500 transition-colors hover:text-[#00bfa5]"
              >{{ $t("footer.terms") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
