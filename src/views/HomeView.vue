<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import FeaturedPost from '@/components/FeaturedPostHome.vue';
import CategoryPost from '@/components/CategoryPostHome.vue';
import { ref } from 'vue';
import AuthorPost from '@/components/AuthorPostHome.vue';
import JoinSection from '@/components/JoinSection.vue'



// State untuk kategori yang dipilih
const selectedCategory = ref('');

// Function untuk mengatur kategori yang dipilih
const selectCategory = (category: string) => {
  selectedCategory.value = category;
};
const previous = () => {
  // Aksi untuk tombol previous
};

const next = () => {
  // Aksi untuk tombol next
};
</script>

<template>
  <MainLayout>
    <!-- Hero Section -->
    <section class="relative h-[700px]">
      <img 
        src="/images/cover.png" 
        alt="Hero background" 
        class="absolute inset-0 w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-black/50">
        <div class="container mx-auto px-4 h-full flex items-center">
          <div class="max-w-2xl text-white pl-6"> 
            <p class="text-base mb-2 tracking-[3px]">
              POSTED ON <span class="font-bold">STARTUP</span>
            </p>
            <h1 class="text-6xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h1>
            <div class="flex items-center gap-2 text-sm mb-4">
              <span>By</span><span class="text-blue-400 hover:text-blue-500 font-medium">James West</span>
              <span>|</span>
              <span>October 27, 2024</span>
            </div>
            <p class="text-gray-300 mb-6 pb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <router-link to="/blogpost" class="inline-flex items-center">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-none hover:bg-blue-700">
            Read More »
          </button>
        </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Posts & All Post Section -->
    <section class="py-16">
        <FeaturedPost />
    </section>

    <!-- About & Mission Section -->
    <section class="relative bg-white py-16">
  <div class="container mx-auto px-4 relative">
    <div class="bg-[#F4F0F8] mt-0 mx-auto max-w-6xl p-16 relative">
      <!-- Yellow and Blue Line SVG, positioned at the top right -->
      <div class="absolute -top-4 right-0">
        <svg width="960" height="23" viewBox="0 0 1021 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 23H843L842.094 0H0V23Z" fill="#FFD050"/>
          <path d="M779 23H1061V0H779.303L779 23Z" fill="#075EFD"/>
          </svg>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- About Us Section -->
        <div>
          <h4 class="uppercase font-semibold text-gray-600 mb-4 tracking-[3px]">About Us</h4>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            We are a community of <br> content writers who share <br> their learnings
          </h2>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" class="text-yellow-500 font-semibold">Read More &gt;</a>
        </div>

        <!-- Our Mission Section -->
        <div>
          <h4 class="uppercase text-gray-600 font-semibold mb-4 tracking-[3px]">Our Mission</h4>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Creating valuable content for <br> creatives all around the world
          </h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



    <!-- Categories Section -->
    <CategoryPost 
      :selectedCategory="selectedCategory" 
      @update:selectedCategory="selectCategory"
    />

    <!-- Why We Started Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 relative">
  <div class="flex w-[1280px] h-[705px] relative flex-col ml-[120px] mt-[100px] items-start text-base font-bold">
    <div class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px]">
      <img 
        loading="lazy" 
        src="https://s3-alpha-sig.figma.com/img/9b1a/e821/ce4666853a588ecefa1d1add86d0a4da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqIuCmBgKhfcOeh94HIPoDJrbEXX-XHKP3nSi7ZrU5i-mTaqF1v108I4E7EFxh7wTX6H3okz4wa~pwmjWHPKVlR2~itKXqmW2p8As3zSXXUwdVyTrq9bGf1JW7ie4Na5~R7mZdZryPL4tZ3muOOgMuc5QZ-f~hMCab5rv1U6Cy6EFuFgfG1Ykf5AkEviGUuYUbBXxijsA7qwH5BvhW8NyGlSbphyO8lnfdXudyDPchAvLW6W8kmYIh1WUOXYpMW583HCJIlnqPjPbpbnFo5mPfUduEW9dFYufIVR371N-XPlXaRLyFogMtZsMZZaSMUkS4ggn8Dx0w3~oP8RSIKGPg__"
        class="object-cover absolute inset-0 w-full h-full" 
      />
      <div class="flex flex-col p-20 bg-white w-[706px] h-[584px] left-[574px] top-[121px] absolute">
        <div class="font-semibold leading-tight text-gray-800 uppercase tracking-[3px]">
          Why we started
        </div>
        <div class="mt-6 text-[48px] tracking-tighter w-[520px] text-gray-800 leading-[64px]">
          It started out as a simple idea and evolved into our passion
        </div>
        <div class="mt-4 leading-7 text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </div>
        <router-link 
          to="/" 
          class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
          Discover our story &gt;
        </router-link>
      </div>
    </div>
  </div>
</div>
</section>


    <!-- Authors Section -->
    <AuthorPost />
   
<!-- LogoPost Section -->
  <section class="image-container">
    <div class="flex items-center justify-center space-x-4 py-4">
    <div class="text-center md:text-left">
      <p class="text-gray-400 text-sm">We are</p>
      <h3 class="text-lg font-semibold text-gray-500">Featured in</h3>
    </div>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4423d4f8991ccfa21577df9ae7b50e9b509e52e49d996e0e7f1d48cd67173bf3?placeholderIfAbsent=true&apiKey=b3c072f221674427bb68df078a2e9d61" 
        alt=""
        class="max-w-6xl max-md:max-w-full" />
    </div>
  </section>

    <!-- TestimoniPost Section -->
<!-- TestimoniPost Section -->
  <section class="py-8">
    <div class="container mx-auto px-4">
      <div style="background-color: #fdf8f3" class="px-20 py-32 flex items-center max-h-4xl mx-auto w-full">
        <div class="w-1/2 pr-8">
          <h3 class="text-sm font-semibold uppercase text-gray-600 tracking-[3px] pl-3">Testimonials</h3>
          <h2 class="text-5xl font-bold mt-2 pl-3">What people say 
            <br />
          about our blog</h2>
          <p class="text-base gray-600 mt-4 pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="w-1/2 pl-8 border-l border-gray-200">
          <p class="text-2xl font-bold  text-black-800 leading-relaxed pr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex justify-between items-center mt-8">
            <div class="flex items-center">
              <img src="https://s3-alpha-sig.figma.com/img/63bf/0ebe/baf975398b74732b52898a2562dfa9a6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISohA7zHZxyEJWWEz2PMVmkeIF1KcNOnySmpegWg0Tug0fEXWgWW4h0VD44lNWej0U5HBnvP2tR8E45QpC1lU4knRdu7pFhxe5wrlHCyaqHtU29cCMVRP2g3r0izJSkrt-KP58ezLPhOl9UfGDuVIi2sBuy3gzMjzNYQDPhE4jxJ-7acw3WwBadNSMQrFKI4DfNAmDvmAgXmZRsVHgdtiQyCXVu1B9DXfRcDjDEYPr1OGkb8vsVRqvPbYwmv7otQqw6xpuQvBHJcv4QlG89N9yWLejZySJHt~u3kt8EGHHahWBe7PsfwZ~Lr~HAgqKFs8oUdlbqz51KLJ30KzYn8Mg" 
                alt="User" class="rounded-full w-10 h-10 mr-3">
              <div>
                <p class="text-2xl font-semibold">Jonathan Vallem</p>
                <p class="text-base text-gray-600">New york, USA</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="previous" class="w-12 h-12 rounded-full flex items-center justify-center bg-white hover:bg-gray-800 hover:text-white transition ">
                <span>&larr;</span>
              </button>
              <button @click="next" class="w-12 h-12 rounded-full flex items-center justify-center bg-white  hover:bg-gray-800 hover:text-white transition ">
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

       <!-- Join Section -->
<JoinSection/>
  </MainLayout>
</template>
