<script setup lang="ts">
import { Motion } from "@motionone/vue";
</script>

<template>
  <footer class="bg-[#0f1f1f] text-gray-300 py-20">
    <div class="container mx-auto">
      <div class="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        <!-- About -->
        <Motion 
          tag="div"
          class="lg:col-span-2"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          <div class="mb-4 flex items-center space-x-3">
            <div class="bg-[#006963] flex h-12 w-12 items-center justify-center rounded-xl shadow-lg">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">
              JAHON<span class="text-[#00bfa5]">SCHOOL</span>
            </span>
          </div>
          <p class="mb-6 max-w-md text-gray-400">{{ $t("footer.aboutText") }}</p>
          <div class="flex space-x-4">
            <!-- Social icons (adjust your SVGs) -->
            <a href="#" class="text-gray-400 hover:text-[#00bfa5] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">...</svg>
            </a>
          </div>
        </Motion>

        <!-- Quick Links -->
        <Motion 
          tag="div"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.3 }"
        >
          <h4 class="mb-4 font-semibold text-white text-lg">{{ $t("footer.quickLinks") }}</h4>
          <ul class="space-y-2">
            <li><a href="#hero" class="hover:text-[#00bfa5] transition-colors">Home</a></li>
            <li><a href="#why" class="hover:text-[#00bfa5] transition-colors">About</a></li>
            <li><a href="#programs" class="hover:text-[#00bfa5] transition-colors">Programs</a></li>
            <li><a href="#team" class="hover:text-[#00bfa5] transition-colors">Team</a></li>
            <li><a href="#faq" class="hover:text-[#00bfa5] transition-colors">FAQ</a></li>
          </ul>
        </Motion>

        <!-- Contact -->
        <Motion 
          tag="div"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.5 }"
        >
          <h4 class="mb-4 font-semibold text-white text-lg">{{ $t("footer.contact") }}</h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start space-x-2">
              <svg class="text-[#00bfa5] mt-1 flex h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-sm">{{ $t("footer.address") }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="text-[#00bfa5] h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="text-sm">{{ $t("footer.phone") }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="text-[#00bfa5] h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm">{{ $t("footer.email") }}</span>
            </li>
          </ul>
        </Motion>
      </div>

      <!-- Bottom Bar -->
      <Motion 
        tag="div"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.7 }"
      >
        <div class="flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 sm:flex-row sm:space-y-0">
          <p class="text-sm text-gray-500">{{ $t("footer.rights") }}</p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="hover:text-[#00bfa5] text-gray-500 transition-colors">{{ $t("footer.policy") }}</a>
            <a href="#" class="hover:text-[#00bfa5] text-gray-500 transition-colors">{{ $t("footer.terms") }}</a>
          </div>
        </div>
      </Motion>
    </div>
  </footer>
</template>
