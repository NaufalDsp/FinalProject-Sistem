<script setup lang="ts">
import { ref } from 'vue';

const authors = ref([
  {
    name: 'Floyd Miles',
    position: 'Content Writer @Company',
    image: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg',
    socials: [
      { iconClass: 'fab fa-facebook', url: 'https://facebook.com' },
      { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
      { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
      { iconClass: 'fab fa-linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Dianne Russell',
    position: 'Content Writer @Company',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg',
    socials: [
      { iconClass: 'fab fa-facebook', url: 'https://facebook.com' },
      { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
      { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
      { iconClass: 'fab fa-linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Jenny Wilson',
    position: 'Content Writer @Company',
    image: 'https://s3-alpha-sig.figma.com/img/e6f4/9511/e2521d1f9982ee7c506948d0020e937f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQ8SQkbkRznrqMVe48AQB9E7x2QVWf1vGjbRpu4BCbUtHeN5nBZKO6LXGrLpR88eaEzavWw9Ke50jAawKutJG4c2~6CWIHaPgGm-~2Ymjvr11Bk2C0UHsKizav2DzUkBk1DO3MqRWOoZscg1BQcjXVxjluZfwFIBc-5~QC3KWUyqcwF81e7kKfZULeOTVqNrN8IYY3vOh9wVHE51r1zMCGA7Lc6sp5sDVuXlti0UwsoW05bPpI7gdOo6hxZGzF128oUmNq-uULpx9V8zYfeym-UT3s6JaonFuCFnk~VaXijEWrJMbEEqNa~xvxMt3vd8YBAnz9MF6epSHnPNFmpYYA__',
    socials: [
      { iconClass: 'fab fa-facebook', url: 'https://facebook.com' },
      { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
      { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
      { iconClass: 'fab fa-linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    image: 'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg',
    socials: [
      { iconClass: 'fab fa-facebook', url: 'https://facebook.com' },
      { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
      { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
      { iconClass: 'fab fa-linkedin', url: 'https://linkedin.com' },
    ],
  },
]);
</script>


<template>
  <div class="container mx-auto px-6 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">List of Authors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="author in authors"
        :key="author.name"
        class="p-8 rounded-lg text-center transform transition bg-[#F4F4F4] hover:bg-[#fdf6e3] hover:shadow-xl hover:scale-105">
        <img :src="author.image"
          alt="Author photo"
          class="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
        <h3 class="text-xl font-semibold mb-2">{{ author.name }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ author.position }}</p>
        <div class="flex justify-center space-x-4">
          <a v-for="icon in author.socials"
            :key="icon.url"
            :href="icon.url"
            target="_blank"
            class="text-gray-400 hover:text-gray-600 transition">
            <i :class="icon.iconClass"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


