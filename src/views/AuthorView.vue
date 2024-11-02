<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <section id="Hero">
    <div
      class="py-24 bg-[#F4F0F8] flex text-left px-44 grid grid-cols-5 space-x-10 justify-center items-center relative"
    >
      <div class="flex items-center col-span-1">
        <img
          class="w-[251px] h-[294px] object-cover"
          src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div class="col-span-4 w-[750px]">
        <h1 class="mb-10 text-5xl font-bold leading-tight">
          Hey there, I’m Andrew Jonhson and welcome to my Blog
        </h1>
        <p class="mb-10 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>

        <div class="flex flex-row space-x-4 mb-4">
          <a href="">
            <i class="fab fa-facebook"></i></a>
          <a href="">
            <i class="fab fa-twitter"></i></a>
          <a href=""> 
            <i class="fab fa-instagram"></i></a>
          <a href="">
            <i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <svg
        class="flex absolute bottom-0 left-[130px]"
        width="1200"
        height="24"
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 24H813.693L812.818 0H0.874651L0 24Z" fill="#FFD050" />
        <path
          d="M752.066 24H1024L1023.71 0H752.359L752.066 24Z"
          fill="#FFD050"
        />
      </svg>
    </div>
  </section>
  <section>
    <div class="flex py-32 px-44 grid grid-cols-2">
      <h1 class="col-span-2 text-5xl font-bold tracking-tight mb-20">
        My Posts
      </h1>
      <div class="flex flew-row col-span-2 space-x-10 mb-20">
        <img
          class="w-[412px] h-[320px] object-cover"
          src="https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div
          class="col-span-2 flex flex-col justify-center space-y-4 w-[512px]"
        >
          <span class="tracking-widest text-[#FFD050] font-semibold text-sm"
            >BUSINESS</span
          >
          <h2 class="text-4xl font-bold hover:text-[#FFD050] tracking-tighter">
            Font sizes in UI design: The complete guide to follow
          </h2>
          <p class="text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="flex flew-row col-span-2 space-x-10">
        <img
          class="w-[412px] h-[320px] object-cover"
          src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div
          class="col-span-2 flex flex-col justify-center space-y-4 w-[512px]"
        >
          <span class="tracking-widest text-[#FFD050] font-semibold text-sm"
            >Economy</span
          >
          <h2 class="text-4xl font-bold hover:text-[#FFD050] tracking-tighter">
            How to build rapport with your web design clients
          </h2>
          <p class="text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </section>
  </MainLayout>
</template>
