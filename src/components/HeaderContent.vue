<script setup lang="ts">

</script>

<template>
  <nav class="px-12 w-full h-[80px] bg-x-black flex items-center justify-between">
    <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo">
    <ul class="flex gap-4">
      <li>
        <router-link to="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</router-link>
      </li>
      <li>
        <router-link to="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</router-link>
      </li>
      <li>
        <router-link to="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</router-link>
      </li>
    </ul>
    <router-link to="/contact" class="bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</router-link>
  </nav>
</template>
